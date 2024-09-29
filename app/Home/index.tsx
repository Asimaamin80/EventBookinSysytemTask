import { Text, View, Image,ScrollView, SafeAreaView,FlatList,Modal, Alert,TouchableOpacity } from "react-native";
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
    Location:'Lhore',
  },
  {
    id: '2',
    title: 'Paris',
    image:require('./../../assets/images/Mask1.png'),
    Date:'12/03/2024',
    Location:'Lahore',
  },
  {
    id: '3',
    title: 'Dubai',
    image:require('./../../assets/images/Mask2.png'),
    Date:'12/03/2024',
    Location:'Lahore',
  },
  {
    id: '4',
    title: 'Lahore',
    image:require('./../../assets/images/Mask.png'),
    Date:'12/03/2024',
    Location:'Lahore',
  },
  {
    id: '5',
    title: 'Dehli',
    image:require('./../../assets/images/Mask.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
];
const DATAs = [
  {
    id: '1',
    title: 'Tower Bridge London',
    image:require('./../../assets/images/Mask4.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
  {
    id: '2',
    title: 'Safari Dessert Dubai',
    image:require('./../../assets/images/Mask5.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
  {
    id: '3',
    title: 'Tower Bridge London',
    image:require('./../../assets/images/Mask4.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },

  {
    id: '4',
    title: 'Safari Dessert Dubai',
    image:require('./../../assets/images/Mask5.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
  {
    id: '5',
    title: 'Tower Bridge London',
    image:require('./../../assets/images/Mask4.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
];
const DATAse = [
  {
    id: '1',
    title: 'Island Tour with Cruises and Lunch',
    image:require('./../../assets/images/Maskgroup14.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
  {
    id: '2',
    title: 'Singing Concert',
    image:require('./../../assets/images/Maskgroup12.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
  {
    id: '3',
    title: 'Grill Kitchen Beer and Dine Tour',
    image:require('./../../assets/images/Maskgroup10.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
  {
    id: '4',
    title: 'Island Tour with Cruises and Lunch',
    image:require('./../../assets/images/Maskgroup14.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
  {
    id: '5',
    title: 'Singing Concert',
    image:require('./../../assets/images/Maskgroup12.png'),
    Date:'12/03/2024',
    Location:'Lhore',
  },
];

type ItemProps = {title: string};
const Item = ({title}: ItemProps) => (
  <View >
    <Text >{title}</Text>
  </View>
);

const home = ({navigation})  => {
  
  const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <SafeAreaView
    
      style={styles.contaner}>
      <SearchBar/>
      <View style={styles.desstyle}>
      <Text style={styles.deste}>World’s top destinations</Text>
    <TouchableOpacity 
    style={styles.allinfo}
    onPress={()=> navigation.navigate('AllDestinations')}
    >
    <Text style={styles.allinfotet}>View All 
    
    </Text>
    <AntDesign name="rightcircleo" size={12} color="#2AAAE0" />
    </TouchableOpacity>
    </View>
    <View style={styles.firstlist}>
    <FlatList
    ItemSeparatorComponent={() => <View style={{width:12}}></View>}
    ListHeaderComponent={() => <View style={{width:2}}></View>}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    
        data={DATA}
        renderItem={({item}) =>   <View>
        <Image
            style={{}}
            source={item.image}
          />
          <Text style={styles.London}>{item.title}</Text></View>}
        keyExtractor={item => item.id}
      />
      </View>
    <FlatList
    ItemSeparatorComponent={() => <View style={{height:20}}></View>}
    ListHeaderComponent={() =>    <View>
  
    
     <Text style={styles.remend}>Recommended for you</Text>
     <View
     style={styles.seclist}>
    <FlatList
    ItemSeparatorComponent={() => <View style={{width:30}}></View>}
    ListHeaderComponent={() => <View style={{width:10}}></View>}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    
        data={DATAs}
        renderItem={({item}) =>  
        <TouchableOpacity 
        onPress={() => navigation.navigate('Detail', { eventId: item })}>
        <Image
        style={{alignSelf:'center'}}
               source={item.image}
          />
          <Text style={styles.retet}>{item.title}</Text>
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
      <View style={{ height:3,width:350,marginTop:3,alignItems:"center"}}></View></View> }
    showsVerticalScrollIndicator={false}
    
        data={DATAse}
        renderItem={({item}) =>  
        <TouchableOpacity
        onPress={() => navigation.navigate('Detail', { eventId: item })}
        style={{width:326,backgroundColor:'#E6E6E680',height:200,borderRadius:25}}>
        <Image
            style={{marginLeft:9}}
            source={item.image}
          />
          <View style={styles.setview}>
          <Text style={styles.teview}>Tower Bridge London</Text>
        <View style={styles.ionview}>
            <Entypo name="star" size={14} color="#FF9C06" />
         <Text style={styles.num}>4.9</Text>
        </View></View>
        <Text style={styles.sky}>{item.title}</Text>
        </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
    }
export default home;






















