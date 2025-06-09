import { View } from 'react-native';
import { useEffect } from 'react';
import * as NotifManager from 'expo-notifications';

NotifManager.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function EntryPoint() {
  useEffect(() => {
    obtainNotificationPermissions();
  }, []);

  async function obtainNotificationPermissions() {
    const { status: currentStatus } = await NotifManager.getPermissionsAsync();
    let permissionStatus = currentStatus;
    if (currentStatus !== 'granted') {
      const { status } = await NotifManager.requestPermissionsAsync();
      permissionStatus = status;
    }
    if (permissionStatus !== 'granted') {
      alert('Cannot obtain notification token for reminders!');
      return;
    }
  }

  return (
    <View>
    </View>
  );
}