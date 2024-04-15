import { useState } from 'react';
import axios from 'axios';
import "./App.css"
import photo from "./assets/gallery.png"
import Loading from './Loading';

const API_KEY = import.meta.env.VITE_GOOGLE_VISION_KEY
const App = () => {
  const [imageFile, setImageFile] = useState(null);
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(null)


  const onSelectFile = (event) => {
    setImageFile(event.target.files[0]);
  };

  const onDrop = (event) => {
    event.preventDefault();
    setImageFile(event.dataTransfer.files[0]);

  };


  const detectText = async () => {
    setLoading(true)

    const url = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
    const base64EncodedImage = await getBase64EncodedImage(imageFile);
    const requestBody = {
      requests: [
        {
          image: {
            content: base64EncodedImage,
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        },
      ],
    };

    try {
      const response = await axios.post(url, requestBody);
      const { responses } = response.data;
      const [result] = responses;
      const text = result.fullTextAnnotation.text;
      setText(text);
      setLoading(false)

    } catch (error) {
      console.error(error);
    }
  };

  const getBase64EncodedImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let base64Encoded = reader.result.replace(/^data:(.*;base64,)?/, '');
        if (base64Encoded.length % 4 > 0) {
          base64Encoded += '='.repeat(4 - (base64Encoded.length % 4));
        }
        resolve(base64Encoded);
      };
      reader.onerror = reject;
    });
  };

  const reset = () => {
    setImageFile(null)
    setText(null)
    setLoading(null)
  }

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
<div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body text-center">
              {imageFile ? (
                <div>
                  <img src={URL.createObjectURL(imageFile)} alt="Selected file" className="img-fluid mb-3 rounded" />
                  <button className="btn btn-primary m-1" onClick={detectText} disabled={text ? true : false}>Detect Text</button>
                  <button className="btn btn-secondary m-1" onClick={reset}>Reset</button>
                </div>
              ) : (
                <div
                  className="dropzone text-center p-5"
                  onDrop={onDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <img src={photo} alt="photo" className="img-fluid mb-3 rounded" />
                  <h3>Drag your photo here to start uploading</h3>
                  <hr className="hr-text" data-content="OR" />
                  <input type="file" onChange={onSelectFile} accept="image/*" aria-label="Upload" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <div className="text-center">
                <div className="pt-4">
                  <h4>Extracted Text:</h4>
                  <hr className="hr-text" />
                  {loading === 1 && <Loading />}
                  {!loading && text && (
                    <div className="p-3">
                      <p className="text-muted">{text}</p>
                      <button className="btn btn-secondary" onClick={copyTextToClipboard}>Copy Text</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
