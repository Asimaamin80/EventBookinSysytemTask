// import {StyleSheet} from 'react-native';
// import {getFontSize, getHeight, getWidth} from './../../utils/ResponsiveFun';

// export const styles = StyleSheet.create({
//   contaner: {
//     alignItems: 'center',
//     flex: 1,},
  


// });
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookingForm: {
    marginBottom: 55,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderColor: '#5B5B5B',
    borderWidth: 1,
    borderRadius:8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: '#2AAAE0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    alignSelf:'center'
  },
});

export { styles };