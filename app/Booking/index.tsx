import React, { useState } from 'react';
import { 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TextInput,
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { Event } from './../event';

interface BookingProps {
  event: Event;
}

const Booking = ({ event }: BookingProps) => {
  const navigation = useNavigation();
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleBook = () => {
    // API call to book event
    console.log(bookingDetails);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Book SkyDiving</Text>
      <ScrollView>
        <View style={styles.bookingForm}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={bookingDetails.name}
            onChangeText={(text) => setBookingDetails({ ...bookingDetails, name: text })}
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={bookingDetails.email}
            onChangeText={(text) => setBookingDetails({ ...bookingDetails, email: text })}
          />
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={styles.input}
            value={bookingDetails.phone}
            onChangeText={(text) => setBookingDetails({ ...bookingDetails, phone: text })}
          />
          <Text style={styles.label}>Date:</Text>
          <TextInput
            style={styles.input}
            value={bookingDetails.date}
            onChangeText={(text) => setBookingDetails({ ...bookingDetails, date: text })}
          />
          <Text style={styles.label}>Time:</Text>
          <TextInput
            style={styles.input}
            value={bookingDetails.time}
            onChangeText={(text) => setBookingDetails({ ...bookingDetails, time: text })}
          />
        </View>
        <TouchableOpacity style={styles.bookButton} onPress={handleBook}>
          <Text style={styles.bookButtonText}>Booking</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Booking;


