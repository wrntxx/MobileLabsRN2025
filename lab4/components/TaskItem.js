import { View, Text, TouchableOpacity } from 'react-native';
  
export default function TaskItem({ item, onDelete }) {
  return (
    <View >
      <View >
        <Text >{item.text}</Text>
        {item.description ? (
          <Text >{item.description}</Text>
        ) : null}
        <Text >нагадування: {item.reminderTime}</Text>
      </View>
      <TouchableOpacity  onPress={() => onDelete(item.id)}>
        <Text >Видалити</Text>
      </TouchableOpacity>
    </View>
  );
}
