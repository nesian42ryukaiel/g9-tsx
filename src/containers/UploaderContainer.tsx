import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Uploader from "../components/Uploader";
import { movePage, uploadPage } from "../modules/pages";
import { editFile, editTitle, editText, editClean } from "../modules/editor";

function UploadContainer() {
  const { mid, efile, etitle, etext } = useSelector((state) => ({
    mid: state.membership.mid,
    efile: state.editor.efile,
    etitle: state.editor.etitle,
    etext: state.editor.etext,
  }));
  const dispatch = useDispatch();
  const move = (page) => dispatch(movePage(page));
  const upload = (article) => dispatch(uploadPage(article));
  const cleanup = () => dispatch(editClean());
  const setFile = (file) => dispatch(editFile(file));
  const setTitle = (title) => dispatch(editTitle(title));
  const setText = (text) => dispatch(editText(text));
  return (
    <Uploader
      mid={mid}
      efile={efile}
      etitle={etitle}
      etext={etext}
      move={move}
      upload={upload}
      cleanup={cleanup}
      setFile={setFile}
      setTitle={setTitle}
      setText={setText}
    />
  );
}

export default UploadContainer;
