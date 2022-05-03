import 'react-native-gesture-handler';
import ProfileProvider from './src/contexts/profile/Provider';

import Routes from './src/screen/Routes';

export default function App() {
  return (
    <ProfileProvider>
      <Routes />
    </ProfileProvider>
  );
}

