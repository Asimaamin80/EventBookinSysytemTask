import { Text, View, Image,ScrollView, SafeAreaView,FlatList,Modal, Alert,TouchableOpacity } from "react-native";
import {getFontSize, getHeight, getWidth} from './../../utils/ResponsiveFun';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";
import detail from "../Detail";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import SearchBar from "@/components/SearchBar";
import { styles } from "./style";
import { useState } from "react";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
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
            source={require('./../../assets/images/Mask.png')}
          />
          <View style={{flexDirection:'column',justifyContent:'space-between',height:20}}>
          <Text style={styles.London}>London</Text>
          <Text style={{...styles.London,fontSize:12}}>United Kingdom</Text>
          </View>
          </View>}
        keyExtractor={item => item.id}
      />
      </View>
    </SafeAreaView>
  );
    }
export default AllDestinations;

