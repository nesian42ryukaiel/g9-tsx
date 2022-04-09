import { Action } from "../types/types";

const MOVE = "pages/MOVE";
const UPLOAD = "pages/UPLOAD";

export const movePage = (page: string) => ({
  type: MOVE,
  payload: page,
});
export const uploadPage = (article: any) => ({
  type: UPLOAD,
  payload: article,
});

type ArticleType = {
  id: number;
  image: string;
  text: string;
  title: string;
  writer: string;
};

type PagesState = {
  currentPage: string;
  articles: ArticleType[];
};

const initialState: PagesState = {
  currentPage: "index",
  articles: [],
};

export default function pages(
  state = initialState,
  action: Action<string, any>
): PagesState {
  switch (action.type) {
    case MOVE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case UPLOAD:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    default:
      return state;
  }
}
