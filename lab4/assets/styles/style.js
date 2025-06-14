import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 40,
    textAlign: 'left',
    color: '#333333',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  inputContainer: {
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  input: {
    borderWidth: 0,
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
    fontSize: 16,
    color: '#333333',
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#A0A0A0',
  },
  taskInfo: {
    flex: 1,
    marginRight: 15,
  },
  taskText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333333',
  },
  taskDescription: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 6,
  },
  reminderTime: {
    fontSize: 12,
    color: '#B0B0B0',
    fontWeight: '400',
  },
  deleteButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
    shadowColor: '#E74C3C',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});