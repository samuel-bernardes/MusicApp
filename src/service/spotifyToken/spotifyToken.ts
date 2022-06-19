import axios from "axios";
import base64 from "react-native-base64";

const CLIENT_ID = process.env.CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.CLIENT_SECRET_SPOTIFY;

const baseUrl = "https://accounts.spotify.com/api";
const Authorization = `Basic ${base64.encode(CLIENT_ID + ":" + CLIENT_SECRET)}`;

export const getAccessToken = async () => {
  const data = await axios(`${baseUrl}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: Authorization,
    },
    data: "grant_type=client_credentials",
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};