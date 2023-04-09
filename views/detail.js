import React,{useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import axios from 'axios';

import { styleGlobal } from '../styles-global';
const DetailMateri = ({route, navigation}) => {
    const { number } = route.params;
    const url = `https://8d3f-2001-448a-40a0-21f5-5d16-903-e9d7-6b73.ngrok-free.app/api/materi`
    const [page, setPage] = useState(1)
    const [materi, setMateri] = useState([])
    useEffect(() => {
        getMateri();
    }, []);

    const getMateri = () => {
        axios.get(url)
        .then((res)=>{
            setMateri(res.data);
        })
        .catch(
            (error)=>console.log(error)
        )
    }
    const value = materi.data?.find((v) => v.id === Number(number))
    if (page === 2 && !value.isi4) setPage(3);
    return(
        <View style={styleGlobal.mainMateri}>
            <View style={styleGlobal.headMateri}>
                <TouchableOpacity onPress={() => {navigation.navigate('home')}}>
                    <Image style={{width: 10, height:18}} source={require('../assets/icon/Back.png')}/>
                </TouchableOpacity>
                <Text style={{alignSelf: 'center', fontSize:20, fontWeight: 500}}>{value?.judul}</Text>
                <View></View>
            </View>
            <View style={page >= 3 ? {height: '75%', width: '100%', backgroundColor: '#F5F5F5', flexDirection: 'column', justifyContent: 'space-between',} : styleGlobal.contentMateri }>
                {
                    page == 1 ?
                        <ScrollView>
                            <Image style={{marginHorizontal:50, marginTop:20, width:250, height:150, borderRadius:20}} source={{uri: `${value?.image}`}}/>
                            <Text style={styleGlobal.textMateri}>{value?.isi}</Text>
                            <Text style={styleGlobal.textMateri}>{value?.isi2}</Text>
                            <Text style={styleGlobal.textMateri}>{value?.isi3}</Text>
                        </ScrollView>
                    : page == 2 ?
                        <ScrollView>
                            <Text style={styleGlobal.textMateri}>{value?.isi4}</Text>
                            <Text style={styleGlobal.textMateri}>{value?.isi5}</Text>
                            <Text style={styleGlobal.textMateri}>{value?.isi6}</Text>
                        </ScrollView>
                    : page == 3 ?
                        <View style={{alignItems: 'center', flexDirection: 'column'}}>
                            <Image style={{marginTop:50, width:255, height: 255}} source={require('../assets/check.png')}/>
                            <Text style={{marginRight:30, marginLeft:30, marginTop: 16, marginBottom: 1, fontWeight: 500, fontSize: 20, color: 'black'}}>Selamat Kamu Telah Menyelesaikan Materi!</Text>
                        </View>
                    : page == 4 ? 
                        <View style={{alignItems: 'center'}}>
                        <Text style={{marginTop: 8, fontWeight: 500, fontSize: 16, color: 'black', marginBottom: 16}}>Quiz {value?.judul}</Text>
                        <View>
                            <Image style={{width: 326, height: 177, borderTopLeftRadius:20, borderTopRightRadius: 20}} source={{uri: `${value?.image}`}}/>
                            <View style={{width: 326, height: 60, backgroundColor: '#162023', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingHorizontal: 16}}>
                                <Text style={{color: 'white', marginTop: 8}}>Subjek   : <Text style={{fontWeight: 700}}>{value?.judul}</Text></Text>
                                <Text style={{color: 'white'}}>Bab   : <Text style={{fontWeight: 700}}>0{value?.id}</Text></Text>
                            </View>
                        </View>

                        <View style={{marginTop: 16}}>
                            <View style={styleGlobal.textQuiz}>
                                <Text style={styleGlobal.textTitleQuiz}>Text Quiz : </Text>
                                <Text style={styleGlobal.textTitleQuiz2}>3 Soal</Text>
                            </View>
                            <View style={styleGlobal.textQuiz}>
                                <Text style={styleGlobal.textTitleQuiz}>Total Waktu : </Text>
                                <Text style={styleGlobal.textTitleQuiz2}>15 Menit </Text>
                            </View>
                            <View style={styleGlobal.textQuiz}>
                                <Text style={styleGlobal.textTitleQuiz}>Perintah : </Text>
                                <Text style={styleGlobal.textTitleQuiz2}>Kerjakan dengan teliti dan jujur!</Text>
                            </View>
                        </View>
                    </View>
                    :
                    <ScrollView>
                        <Text style={styleGlobal.textMateri}>Wayang Kulit adalah seni tradisional asli Indonesia yang terutama berkembang di Jawa Tengah dan Jawa Timur.Kata wayang sendiri diketahui berasal dari ‘Ma Hyang’ yang berarti menuju kepada roh spiritual, para dewa, atau sang kuasa. Kendati begitu, ada pula yang mengatakan bahwa wayang berasal dari teknik pertunjukan yang mengandalkan bayangan pada layar.</Text>
                        <Text style={styleGlobal.textMateri2}>Wayang kulit adalah warisan budaya yang bernilai tinggi, karena merupakan sebuah seni kriya, dan penggabungan dari sastra, seni musik, sampai seni rupa. Bukan hanya terkenal di Indonesia, wayang kulit sudah dikenal di mata dunia yang dibawa oleh pedalang terkenal Ki Purbo Asmoro. Berkatnya, kini wayang kulit mulai populer di beberapa negara Asia hingga Eropa.Keberadaan wayang kulit diakui UNESCO sebagai karya kebudayaan yang mengagumkan di bidang cerita narasi dan warisan budaya yang indah dan berharga.</Text>
                    </ScrollView>
                }
                <View style={styleGlobal.bottomBarMateri}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <TouchableOpacity onPress={()=>{if (page == 3) {setPage(1);} else if(page == 1) {ToastAndroid.show("Can't go back further", ToastAndroid.SHORT);} else {setPage(page - 1)} console.log(page);}} style={ page == 3 ? {paddingVertical: 16, paddingHorizontal: 26, backgroundColor: '#A64E00', borderRadius: 8, width: 184, alignItems: 'center'} : {paddingVertical: 16, paddingHorizontal: 26, backgroundColor: '#A64E00', borderRadius: 8, width: 94, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}} >
                            {page == 4 ? <Image style={{width: 22, height: 22, marginRight: 8}} source={require('../assets/icon/Timer.png')}/> : <></>}
                            <Text style={{color: 'white', fontWeight: 500}}>{page == 3 ? 'Preview Materi' : page == 4 ? '15:00' : 'Back' }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{page == 4 ? navigation.navigate('quiz', {numero: value?.id}) : setPage(page+1); console.log(page)}} style={ page == 3 ? {paddingVertical: 16, paddingHorizontal: 17, backgroundColor: '#FBD875', borderRadius: 8, width:94, alignItems: 'center'} : {paddingVertical: 16, paddingHorizontal: 17, backgroundColor: '#FBD875', borderRadius: 8, width:184, alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 500}}>{page == 3 ? 'Quiz' : page == 4? 'Mulai Quiz' : 'Next' }</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
    );
}
export default DetailMateri;