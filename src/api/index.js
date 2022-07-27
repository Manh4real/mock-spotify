import axios from "axios";

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export const getToken = async () => {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "user-top-read playlist-read-private",
      client_id: client_id,
      client_secret: client_secret,
    }),
  });
  const data = await res.json();
  return data.access_token;
};

export const getAlbum = async (albumId) => {
  const token = await getToken();

  const result = await api.get("/albums/" + albumId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

export const getArtist = async (artistId) => {
  const token = await getToken();

  const result = await api.get("/artists/" + artistId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

export const search = async (params) => {
  const token = await getToken();

  const result = await api.get("/search", {
    params: {
      market: "US",
      type: "album",
      ...params,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

export const getRandomAlbums = async () => {
  const result = await search({ q: "hip hop playlist" });

  return result.albums.items;
};
