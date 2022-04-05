const MEDIA_TOGGLE = "media/toggle";

export const mediaToggle = () => ({
  type: MEDIA_TOGGLE,
});

const initialState = {
  mediaColorMode: "dark",
};

export default function media(state = initialState, action) {
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
