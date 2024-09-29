import { Text, View, Image,ScrollView, SafeAreaView,FlatList,Modal, Alert,TouchableOpacity } from "react-native";
import {getFontSize, getHeight, getWidth} from './../../utils/ResponsiveFun';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";
import detail from "../detail";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import SearchBar from "@/components/SearchBar";
import { styles } from "./style";
import { useState } from "react";

const DATA = [
  {
    id: '1',
    title: 'London',
    image:require('./../../assets/images/Mask.png'),
    Date:'12/03/2024',
    Location:'United Arab Emirates',
  },
  {
    id: '2',
    title: 'Paris',
    image:require('./../../assets/images/Mask1.png'),
    Date:'12/03/2024',
    Location:'France',
  },
  {
    id: '3',
    title: 'Dubai',
    image:require('./../../assets/images/Mask2.png'),
    Date:'12/03/2024',
    Location:'United Kingdom',
  },
  {
    id: '4',
    title: 'Lahore',
    image:require('./../../assets/images/Mask.png'),
    Date:'12/03/2024',
    Location:'United Kingdom',
  },
  {
    id: '5',
    title: 'Dehli',
    image:require('./../../assets/images/Mask.png'),
    Date:'12/03/2024',
    Location:'Thailand',
  },
];

type ItemProps = {title: string};
const Item = ({title}: ItemProps) => (
  <View style={{}}>
    <Text style={{}}>{title}</Text>
  </View>
);

const AllDestinations = ()  => {
  
  const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <SafeAreaView
    
      style={styles.contaner}
    >
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <Image
            style={{width:200}}
            source={require('./../../assets/images/Mask4.png')}
          />
          <Text></Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
          
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SearchBar/>
      <View style={styles.desstyle}>
      <Text style={styles.deste}>All Destinations</Text>
    <View
   >
    </View>
    </View>
    <View style={styles.firstlist}>
    <FlatList
    showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) =>  
         <View style={{ height:70,width:320,margin:7,backgroundColor:"#E6E6E680",borderRadius:20,flexDirection:"row",alignItems:"center"}}>
        <Image
            style={{margin:7}}
            source={item.image}
          />
          <View style={{flexDirection:'column',justifyContent:'space-between',height:20}}>
          <Text style={styles.London}>{item.title}</Text>
          <Text style={{...styles.London,fontSize:12,fontWeight:'400'}}>{item.Location}</Text>
          </View>
          </View>}
        keyExtractor={item => item.id}
      />
      </View>
    </SafeAreaView>
  );
    }
export default AllDestinations;

