import {StyleSheet} from 'react-native';
import {getFontSize, getHeight, getWidth} from './../../utils/ResponsiveFun';

export const styles = StyleSheet.create({
  contaner:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  desstyle:{
    width:320,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    alignSelf:'center'
    },
    deste:{
        color:'#2D2D2D',
        alignSelf:'flex-start',
        fontSize:20,
        fontWeight:'bold',
        
    },
    allinfo:{
        width:60,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        alignSelf:'center'
        },
        allinfotet:{
            color:'#2AAAE0',
            textAlign:'center',
            fontSize:12,
            fontWeight:'400',
        },
        firstlist:{ 
            height:90,width:320,marginTop:8},
        London:{
            color:'#2D2D2D',
            alignSelf:'center',
            fontSize:12,
            fontWeight:'bold',   
        },
        remend:{
            color:'#2D2D2D',
            alignSelf:'flex-start',
            fontSize:20,
            fontWeight:'bold',
            marginLeft:19
        },
        seclist:{ 
            height:200,width:340,marginTop:8},
            reqim:{
                width:154,
                backgroundColor:'#E6E6E680',
                height:200,
                borderRadius:25},
                retet:{
                    color:'#2D2D2D',
                    alignSelf:'center',
                    fontSize:14,
                    textAlign:'center',    
                    fontWeight:'400',
                },
                senview:{ 
                    height:20,
                    width:70,
                    justifyContent:'space-between',
                    alignItems:'center',
                    flexDirection:'row',
                    marginLeft:8,
                    alignSelf:'flex-start'},


                    centeredView: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 22,
                      },
                      modalView: {
                        margin: 20,
                        backgroundColor: 'white',
                        borderRadius: 20,
                        padding: 35,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                      },
                      button: {
                        borderRadius: 20,
                        padding: 10,
                        elevation: 2,
                      },
                      buttonOpen: {
                        backgroundColor: '#F194FF',
                      },
                      buttonClose: {
                        backgroundColor: '#2196F3',
                      },
                      textStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      },
                      modalText: {
                        marginBottom: 15,
                        textAlign: 'center',
                      },
                      numb:{
                        color:'#5B5B5B',
                        alignSelf:'center',
                        fontSize:12,
                        textAlign:'center',
                      
                        fontWeight:'700',
                        
                    },
                    kilo:{
                      color:'#5B5B5B',
                      alignSelf:'center',
                      fontSize:12,
                      textAlign:'center',
                    
                      fontWeight:'700',
                      
                  },
                  eperi:{
                    color:'#2D2D2D',
                    alignSelf:'flex-start',
                    fontSize:20,
                    fontWeight:'bold',
                    marginLeft:20,
                },
                setview:{  height:20,
                  width:300,
                  justifyContent:'space-between',
                  alignItems:'flex-start',
                  flexDirection:'row',
                  alignSelf:'center'},
                  teview:{
                    color:'#2D2D2D',
                    alignSelf:'center',
                    fontSize:14,
                    textAlign:'center',    
                    fontWeight:'400',
                },
                ionview:{ 
           
                  width:40,
                  justifyContent:'space-between',
                  alignItems:'center',
                  flexDirection:'row',
                  alignSelf:'center'},
                  num:{
                    color:'#5B5B5B',
                    alignSelf:'center',
                    fontSize:14,
                    textAlign:'center',
                    fontWeight:'700', 
                },
                sky:{
                  color:'#2D2D2D',
                  alignSelf:'flex-start',
                  fontSize:14,
                  marginLeft:14,
                  textAlign:'center',    
                  fontWeight:'700',
              }


});
