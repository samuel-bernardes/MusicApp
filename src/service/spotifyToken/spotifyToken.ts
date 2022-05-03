import base64 from 'react-native-base64';

const apiPrefix = "https://accounts.spotify.com/api"

const client_id = "f048d52f04554f98a82322b065b9d7a9"
const client_secret = "85aa4bcd5d184a188f05e5bdab00b897"

const base64credentials = base64.encode(client_id + ':' + client_secret)


export default async () => {
    console.log('token begin')
    const res = await fetch(`${apiPrefix}/token`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${base64credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    });
    const json = await res.json();
    const newToken = json.acess_token;
    console.log('token is', newToken);
    return newToken;
}