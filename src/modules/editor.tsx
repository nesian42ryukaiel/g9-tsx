import { Action } from "../types/types";

const EDIT_CLEAN = "editor/CLEAN";
const EDIT_FILE = "editor/FILE";
const EDIT_TITLE = "editor/TITLE";
const EDIT_TEXT = "editor/TEXT";

/* A File object is a Blob object with a name attribute, which is a string */

export const editClean = (): Action<string> => ({
  type: EDIT_CLEAN,
});
export const editFile = (task: File | Blob): Action<string, Object> => ({
  type: EDIT_FILE,
  payload: {
    task,
  },
});
export const editTitle = (task: string) => ({
  type: EDIT_TITLE,
  payload: {
    task,
  },
});
export const editText = (task: string) => ({
  type: EDIT_TEXT,
  payload: {
    task,
  },
});

type EditorState = {
  efile: File[] | Blob[];
  etitle: string;
  etext: string;
};

const initialState: EditorState = {
  efile: [],
  etitle: "",
  etext: "",
};

export default function editor(
  state = initialState,
  action: Action<string, any>
): EditorState {
  switch (action.type) {
    case EDIT_CLEAN:
      return {
        ...state,
        efile: [],
        etitle: "",
        etext: "",
      };
    case EDIT_FILE:
      return {
        ...state,
        efile: action.payload.task,
      };
    case EDIT_TITLE:
      return {
        ...state,
        etitle: action.payload.task,
      };
    case EDIT_TEXT:
      return {
        ...state,
        etext: action.payload.task,
      };
    default:
      return state;
  }
}
