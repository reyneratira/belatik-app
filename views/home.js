import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import useAxios from 'axios-hooks';

import { styleGlobal } from '../styles-global';

const HomePage = ({navigation}) => {

    const [isSelected, setIsSelected] = useState(1);

    const [{ data, loading, error }, refetch] = useAxios(
        `https://8d3f-2001-448a-40a0-21f5-5d16-903-e9d7-6b73.ngrok-free.app/api/materi`
      )
    const val = data?.data.find((v) => v.id === Number(isSelected));

    console.log(data);

    return(
        <View style={{flex:1}}>
            <View style={styleGlobal.home}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{justifyContent:"space-between", alignItems:"center"}}>
                        <Image style={{width: 78, height: 80, marginTop: 50}} source={require("../assets/logo.png")}/>
                        <Text style={{color: "white", fontSize: 20, fontWeight:'bold', alignItems:"center", marginTop:10}}>Ayo Belajar Batik!</Text>
                    </View>
                
                <TouchableOpacity onPress={() => {navigation.navigate('search')}} style={styleGlobal.search}>
                    <Text style={{color: 'white'}}>Cari...</Text>
                    <Image style={{width: 16, height: 16}} source={require('../assets/icon/Magnify.png')}/>
                </TouchableOpacity>
                {/* <ScrollView style={{marginLeft: 48, maxHeight: 32}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        data?.data.map((va)=> (
                            <TouchableOpacity style={isSelected == va?.id ? styleGlobal.buttonActive : styleGlobal.button} onPress={() => {setIsSelected(va?.id)}}>
                                <Text style={{color: 'white'}}>{va?.judul}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView> */}
                
                {/* <TouchableOpacity style={styleGlobal.listContainer} onPress={()=>{navigation.navigate('detail', {number: val?.id})}}>
                            <Image style={{width: 62, height: 62}} source={{uri: `${val?.image}`}}/>
                            <View style={styleGlobal.textContainer}>
                                <Text style={styleGlobal.textHead}>{val?.judul}</Text>
                                <Text style={styleGlobal.textDesc} numberOfLines={2}>{val?.isi}</Text>
                            </View>
                        </TouchableOpacity> */}
            </View>
            </View>
            <View style={styleGlobal.itemList}>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:10}}>
                    {data?.data.map((val, index)=>(
                        <TouchableOpacity key={val.id} style={styleGlobal.listContainer} onPress={()=>{navigation.navigate('detail', {number: val?.id})}}>
                            <Image style={{width: 62, height: 62}} source={{uri: `${val?.image}`}}/>
                            <View style={styleGlobal.textContainer}>
                                <Text style={styleGlobal.textHead}>{val?.judul}</Text>
                                <Text style={styleGlobal.textDesc} numberOfLines={2}>{val?.isi}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                    
                    
                    }
                </ScrollView>
            </View>

            {/* <View style={styleGlobal.bottomNavigationBar}>
                <TouchableOpacity>
                    <Image style={{width: 20, height: 20}} source={require('../assets/icon/Message.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('home')}}>
                    <Image style={{width: 20, height: 20, marginHorizontal: 88}} source={require('../assets/icon/Home.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width: 20, height: 20}} source={require('../assets/icon/Like.png')}/>
                </TouchableOpacity>
            </View> */}
        </View>
    );
} 
export default HomePage;