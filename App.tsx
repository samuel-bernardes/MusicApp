import 'react-native-gesture-handler';
import GoogleTokenProvider from './src/contexts/googleToken/Provider';
import MusicProvider from './src/contexts/music/Provider';
import ProfileProvider from './src/contexts/profile/Provider';

import Routes from './src/screen/Routes';

export default function App() {
  return (
    <ProfileProvider>
      <GoogleTokenProvider>
        <MusicProvider>
          <Routes />
        </MusicProvider>
      </GoogleTokenProvider>
    </ProfileProvider>
  );
}

