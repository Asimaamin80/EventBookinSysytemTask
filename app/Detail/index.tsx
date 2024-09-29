import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Event } from './../event';
import { styles } from "./style";
import { API } from './../../API';

interface Props {
  route: any;
  navigation: any;
}

const Detail = ({ route, navigation }: Props) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  const eventId = route.params.eventId;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await API.getEvent(eventId);
        setEvent(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {console.log('saf',eventId)}
      <Image source={ eventId?.image } style={styles.image} />
      {/* <Image
            style={styles.image}
            source={require('./../../assets/images/Mask6.png')}
          /> */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{event?.title}</Text>
        <Text style={styles.description}>Experience skydiving in the world's premier location & get photographed while you freefall.
           Fun & safety guranteed. Skydive with trained instructors and world class safety measures.Ready to view Palm Jumeirah from a bird's eye view as you soar through the sky during a 20-30 mins tandem skydive in Dubai?
        Fun and safety are both guaranteed at SkyDubai, the biggest name in adventure sports in the city.</Text>
        <Text style={styles.date}>
          Date: 
          <Text style={{color: '#2AAAE0',fontWeight:'400'}}>{eventId?.Date}</Text>
        </Text>
        <Text style={styles.location}>Location:<Text style={{color: '#2AAAE0',fontWeight:'400'}}> {eventId?.title}</Text></Text>
      </View>
      <TouchableOpacity style={styles.bookButton} 
      onPress={() => navigation.navigate('Booking', { eventId })}
      >
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Detail;
