import {StyleSheet} from 'react-native';
import {getFontSize, getHeight, getWidth} from './../../utils/ResponsiveFun';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  date: {
    marginTop:9,
    fontSize: 16,
    fontWeight:'600',
    color: '#666',
  },
  location: {
    fontSize: 16,
    fontWeight:'600',
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#2AAAE0',
    padding: 10,
    alignItems:'center',
    borderRadius: 5,
    marginHorizontal: 20,
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight:'600',
    color: '#FFFFFF',
  },
});


