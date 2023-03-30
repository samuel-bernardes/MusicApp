import axios from "axios";
import { getAccessToken } from "../spotifyToken/spotifyToken";

const baseUrl = "https://api.spotify.com/v1";

type Props = {
    offset: number;
    limit: number;
    value: string;
};

export const search = async ({ offset, limit, value }: Props) => {
    const { access_token } = await getAccessToken();

    const data = await axios(
        `${baseUrl}/search?type=track&limit=${limit}&offset=${offset}&q=${encodeURIComponent(
            value
        )}*`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${access_token}`,
            },
        }
    )
        .then((res) => {
            const json = res.data.tracks.items;
            return json.map(item => ({
                id: item.id,
                title: item.name,
                popularity: item.popularity,
                artist: item.artists
                    ? item.artists[0].name
                    : undefined,
                album: item.album.name,
                is_playable: item.is_playable,
                preview_url: item.preview_url,
                imageUri: item.album.images
                    ? item.album.images[0].url
                    : undefined
            }));

        })
        .catch((err) => {

            console.log(err);
        });

    return data;
};
