import { Action } from "../types/types";

const MEDIA_TOGGLE = "media/toggle";

export const mediaToggle = (): Action<string> => ({
  type: MEDIA_TOGGLE,
});

type MediaState = {
  mediaColorMode: string;
};

const initialState: MediaState = {
  mediaColorMode: "dark",
};

export default function media(
  state = initialState,
  action: Action<string, any>
): MediaState {
  switch (action.type) {
    case MEDIA_TOGGLE:
      if (state.mediaColorMode === "light") {
        return {
          ...state,
          mediaColorMode: "dark",
        };
      } else if (state.mediaColorMode === "dark") {
        return {
          ...state,
          mediaColorMode: "light",
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
