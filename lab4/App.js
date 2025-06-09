import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import * as NotifManager from 'expo-notifications';
import InputArea from './components/TaskInputForm';
import ItemDisplay from './components/TaskItem';

NotifManager.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function EntryPoint() {
  const [userEntries, setUserEntries] = useState([]);

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

  async function arrangeReminder(entryTitle, entryDetails, reminderTimestamp) {
    const triggerPoint = new Date(reminderTimestamp);
    const currentTime = new Date();
    if (triggerPoint <= currentTime) {
      alert('Reminder time must be in the future.');
      return;
    }
    const timeDifferenceInSeconds = Math.floor((triggerPoint - currentTime) / 1000);
    await NotifManager.scheduleNotificationAsync({
      content: {
        title: '🔔 Reminder Activated',
        body: `Your task: ${entryTitle}\nDetails: ${entryDetails}`,
      },
      trigger: { seconds: timeDifferenceInSeconds },
    });
  }

  const appendEntry = async (titleInput, descriptionInput, timeInput) => {
    if (titleInput.trim() === '') {
      alert('Entry title cannot be empty.');
      return;
    }
    if (timeInput.trim() === '') {
      alert('Reminder time cannot be empty.');
      return;
    }
    const newEntry = {
      uniqueId: Math.random().toString(),
      title: titleInput,
      details: descriptionInput,
      scheduledTime: timeInput,
    };
    setUserEntries(currentEntries => [...currentEntries, newEntry]);
    await arrangeReminder(titleInput, descriptionInput, timeInput);
  };

  const removeEntry = (idToRemove) => {
    setUserEntries(currentEntries => currentEntries.filter(entry => entry.uniqueId !== idToRemove));
  };

  return (
    <View >
      <Text >Daily Planner</Text>
      <InputArea onAddTask={appendEntry} />
      <FlatList
        data={userEntries}
        keyExtractor={item => item.uniqueId}
        renderItem={({ item }) => (
          <ItemDisplay item={item} onDelete={removeEntry} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}