import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playingAlbumId: "",
  playingSong: {
    id: null,
    url: null,
  },
  isPlaying: false,
};

const trackControllerSlice = createSlice({
  initialState: initialState,
  name: "track_controller",
  reducers: {
    play: (state) => {
      if (state.isPlaying) return state;

      return {
        ...state,
        isPlaying: true,
      };
    },
    pause: (state) => {
      if (!state.isPlaying) return state;

      return {
        ...state,
        isPlaying: false,
      };
    },
    setPlayingSongInfo: (state, action) => {
      const { id, url, albumId } = action.payload;

      return {
        ...state,
        playingSong: { id, url },
        playingAlbumId: albumId,
      };
    },
  },
});

export const { play, pause, setPlayingSongInfo } = trackControllerSlice.actions;

// selectors
export const getPlayingSong = (state) => state.trackController.playingSong;
export const getPlayingAlbumId = (state) =>
  state.trackController.playingAlbumId;
export const getPlayingStatus = (state) => state.trackController.isPlaying;

export default trackControllerSlice.reducer;
