import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'task1',
  webDir: 'dist/task1',
  bundledWebRuntime: false,

  server:{
    url:'http://192.168.29.22:4200',
    cleartext:true
  }
  
};

export default config;
