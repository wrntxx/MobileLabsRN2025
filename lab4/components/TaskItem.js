import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/style';
  
export default function TaskItem({ item, onDelete }) {
  return (
    <View style={styles.taskItem}>
      <View style={styles.taskInfo}>
        <Text style={styles.taskText}>{item.text}</Text>
        {item.description ? (
          <Text style={styles.taskDescription}>{item.description}</Text>
        ) : null}
        <Text style={styles.reminderTime}>нагадування: {item.reminderTime}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
        <Text style={styles.deleteButtonText}>Видалити</Text>
      </TouchableOpacity>
    </View>
  );
}
