import React, { useEffect, useState } from "react";
import axios from "axios";
import { pServerLink } from "../pseudoLinks/links";
import Base64 from "../modules/Base64";

type UploaderProps = {
  mid: string;
  eprev: string;
  etitle: string;
  etext: string;
  move: Function;
  upload: Function;
  cleanup: Function;
  setFile: Function;
  setTitle: Function;
  setText: Function;
};

function Uploader({
  mid,
  eprev,
  etitle,
  etext,
  move,
  upload,
  cleanup,
  setFile,
  setTitle,
  setText,
}: UploaderProps) {
  const [UploaderFile, setUploaderFile] = useState<File>();
  const onFileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    let TargetFile: File;
    let newURL: string;
    if (e.target.files) {
      TargetFile = e.target.files[0];
      newURL = URL.createObjectURL(TargetFile);
      setUploaderFile(TargetFile);
      setFile(newURL);
    }
  };
  const onTitleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onTextType = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    console.log("[DEBUG]: Now testing FormData creation: ");
    const uploadForm = new FormData();
    if (UploaderFile instanceof File) {
      uploadForm.set("image", UploaderFile, Base64.encode(UploaderFile.name));
    } else {
      alert("Please upload a file!");
      return false;
    }
    if (etitle !== "") {
      uploadForm.set("title", etitle);
    } else {
      alert("Please type a title!");
      return false;
    }
    uploadForm.set("text", etext);
    if (mid !== "") {
      uploadForm.set("writer", mid);
    } else {
      alert("Are you a ghost writer? ;)");
      return false;
    }
    for (let pair of uploadForm.entries()) {
      let val;
      if (pair[1] instanceof File) {
        val = pair[1].name;
      } else {
        val = pair[1];
      }
      console.log(pair[0] + ", " + val);
    }
    return axios
      .post(pServerLink + "/upload", uploadForm)
      .then((res) => {
        if (res.data.success) {
          alert(`Success in sending to ${res.data.article.image}!`);
          upload(res.data.article);
          cleanup();
          move("index");
        } else {
          alert(`Didn't upload well!`);
          cleanup();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const cancelAndGoBack = () => {
    setTitle("");
    setText("");
    move("index");
  };
  useEffect(() => {
    console.log("[DEBUG]: rerendered with useEffect()");
  }, []);
  return (
    <div className="Uploader centralize corefunc">
      <div className="focusBox">
        <div className="Uploader__preview">
          {UploaderFile && eprev !== "" ? (
            <>
              <img src={eprev} alt="" id="ul--output" width="256" />
              <h3>{UploaderFile.name}</h3>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="Uploader__pseudoForm" id="Uploader__pseudoForm">
          <div>
            <input
              type="file"
              name="articleFile"
              onChange={onFileLoad}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="articleWriter"
              value={mid !== "" ? mid : "PH"}
              style={{ width: "50%" }}
              readOnly
            />
          </div>
          <div>
            <input
              type="text"
              name="articleTitle"
              onChange={onTitleType}
              placeholder="Title"
              style={{ width: "50%" }}
              required
            />
          </div>
          <div>
            <textarea
              name="articleText"
              onChange={onTextType}
              style={{ width: "50%" }}
              rows={5}
              placeholder="Text (optional)"
            />
          </div>
          <div>
            <span>
              <button type="button" onClick={cancelAndGoBack}>
                Cancel
              </button>
              <button className="button--post" type="button" onClick={onSubmit}>
                Upload
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uploader;
