import { Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';

export const getDeviceInfo = () => ({
  brand: DeviceInfo.getBrand(),
  model: DeviceInfo.getModel(),
  systemVersion: DeviceInfo.getSystemVersion(),
});

export const getPlatform = () => Platform.OS;

export const isConnected = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};
