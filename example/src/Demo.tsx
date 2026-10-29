import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ShowProperties, useToast } from 'react-native-beautiful-toasts'

const icons: ShowProperties['icon'][] = ['success', 'warning', 'error', 'link', 'copy']
const longText = 'Your search for apartments in Amsterdam was updated, we will notify you as soon as new listings match your filters'
const stripes =['#ff3b30', '#ffcc00', '#34c759', '#007aff', '#af52de', '#ff2d55', '#000']

const Demo = () => {
  const toast = useToast()

  return (
    <View style={styles.container}>
      <View style={styles.stripes}>
        {stripes.map(color => (
          <View key={color} style={[styles.stripe, { backgroundColor: color }]} />
        ))}
      </View>
      {icons.map(icon => (
        <TouchableOpacity
          key={icon}
          style={styles.button}
          onPress={() => toast.show({ icon, text: `This is a ${icon} toast` })}
        >
          <Text style={styles.buttonText}>{icon}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => toast.show({ icon: 'success', text: longText })}
      >
        <Text style={styles.buttonText}>long text</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder='Open the keyboard to check the offset'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 12,
    backgroundColor: '#fff'
  },
  stripes: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 220,
    flexDirection: 'row'
  },
  stripe: {
    flex: 1
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#111'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd'
  }
})

export default Demo
