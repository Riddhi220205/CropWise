import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.cb7f2f9f98294b77a5bad31d37f4cd2d',
  appName: 'flutter-joy-blossom',
  webDir: 'dist',
  server: {
    url: 'https://cb7f2f9f-9829-4b77-a5ba-d31d37f4cd2d.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    StatusBar: {
      style: 'default',
      backgroundColor: '#16a34a'
    }
  }
};

export default config;