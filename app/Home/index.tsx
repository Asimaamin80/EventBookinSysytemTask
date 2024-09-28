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

const home = ()  => {
  
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
      <Text style={styles.deste}>World’s top destinations</Text>
    <View
    
     style={styles.allinfo}
    >
    <Text style={styles.allinfotet}>View All 
    
    </Text>
    <AntDesign name="rightcircleo" size={12} color="#2AAAE0" />
    </View>
    </View>
    <View style={styles.firstlist}>
    <FlatList
    ItemSeparatorComponent={() => <View style={{width:30}}></View>}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    
        data={DATA}
        renderItem={({item}) =>   <View>
        <Image
            style={{}}
            source={require('./../../assets/images/Mask.png')}
          />
          <Text style={styles.London}>London</Text></View>}
        keyExtractor={item => item.id}
      />
      </View>
     <Text style={styles.remend}>Recommended for you</Text>
     <View
     style={styles.seclist}>
    <FlatList
    ItemSeparatorComponent={() => <View style={{width:30}}></View>}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    
        data={DATA}
        renderItem={({item}) =>  
        <TouchableOpacity 
        onPress={() => setModalVisible(!modalVisible)} style={styles.reqim}>
        <Image
            
            source={require('./../../assets/images/Mask4.png')}
          />
          <Text style={styles.retet}>Tower Bridge London</Text>
        <View style={styles.senview}>
            <Entypo name="star" size={14} color="#FF9C06" />
         <Text style={styles.numb}>4.9</Text>
        <Text style={styles.kilo}>(80K)</Text>
        </View>
       
        </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
      </View>
      <Text style={styles.eperi}>Popular experiences </Text>
      <View style={{ height:200,width:350,marginTop:8,alignItems:"center"}}>
    <FlatList
    ItemSeparatorComponent={() => <View style={{height:20}}></View>}
    showsVerticalScrollIndicator={false}
    
        data={DATA}
        renderItem={({item}) =>  
        <View style={{width:326,backgroundColor:'#E6E6E680',height:200,borderRadius:25}}>
        <Image
            style={{}}
            source={require('./../../assets/images/Mask6.png')}
          />
          <View style={styles.setview}>
          <Text style={styles.teview}>Tower Bridge London</Text>
        <View style={styles.ionview}>
            <Entypo name="star" size={14} color="#FF9C06" />
         <Text style={styles.num}>4.9</Text>
        </View></View>
        <Text style={styles.sky}>Sky Diving</Text>
        </View>}
        keyExtractor={item => item.id}
      />
      </View>
{/* <Icon name="rocket" size={30} color="#900" /> */}
    </SafeAreaView>
  );
    }
export default home;

