import React, { useEffect } from "react";
import axios from "axios";
import { pServerLink } from "../pseudoLinks/links";
import Base64 from "../modules/Base64";

function Uploader({
  mid,
  efile,
  etitle,
  etext,
  move,
  upload,
  cleanup,
  setFile,
  setTitle,
  setText,
}) {
  const onFileLoad = (e) => {
    setFile(e.target.files[0]);
    console.log(efile);
    console.log(efile.filePath);
  };
  const onTitleType = (e) => {
    setTitle(e.target.value);
  };
  const onTextType = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    console.log("Now testing FormData creation: ");
    const uploadForm = new FormData();
    if (efile instanceof File) {
      uploadForm.set("image", efile, Base64.encode(efile.name));
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
  const cancelAndGoBack = (e) => {
    setFile([]);
    setTitle("");
    setText("");
    move("index");
  };
  useEffect(() => {
    console.log("업로드 컴포넌트가 화면에 나타남");
    return () => {
      console.log("업로드 컴포넌트가 화면에서 사라짐");
    };
  }, []);
  return (
    <div className="Uploader centralize corefunc">
      <div className="focusBox">
        <div className="Uploader__preview">
          {efile ? (
            <>
              <img src={efile.filePath} alt="" id="ul--output" width="256" />
              <h3>{efile.fileName}</h3>
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
