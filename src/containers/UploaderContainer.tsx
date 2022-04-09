import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Uploader from "../components/Uploader";
import { movePage, uploadPage } from "../modules/pages";
import { editFile, editTitle, editText, editClean } from "../modules/editor";
import type { ArticleType } from "../modules/pages";

function UploadContainer() {
  const { mid, efile, etitle, etext } = useSelector((state: any) => ({
    mid: state.membership.mid,
    efile: state.editor.efile,
    etitle: state.editor.etitle,
    etext: state.editor.etext,
  }));
  const dispatch = useDispatch();
  const move = (page: string) => dispatch(movePage(page));
  const upload = (article: ArticleType) => dispatch(uploadPage(article));
  const cleanup = () => dispatch(editClean());
  const setFile = (file) => dispatch(editFile(file));
  const setTitle = (title: string) => dispatch(editTitle(title));
  const setText = (text: string) => dispatch(editText(text));
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
