import { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/style';
import CustomTextInput from './CustomTextInput';

export default function TaskInputForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSubmit = useCallback(() => {
    if (!title.trim()) return;

    onAddTask(title, details, reminderTime);
    setTitle('');
    setDetails('');
    setReminderTime('');
  }, [title, details, reminderTime, onAddTask]);

  return (
    <View style={styles.inputContainer}>
      <CustomTextInput
        placeholder="Введіть завдання"
        value={title}
        onChangeText={setTitle}
      />
      <CustomTextInput
        placeholder="Введіть опис завдання"
        value={details}
        onChangeText={setDetails}
        multiline
        style={styles.descriptionInput}
      />
      <CustomTextInput
        placeholder="Час нагадування (РРРР-ММ-ДД ГГ:ХХ)"
        value={reminderTime}
        onChangeText={setReminderTime}
        keyboardType="datetime"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Додати Завдання</Text>
      </TouchableOpacity>
    </View>
  );
}
