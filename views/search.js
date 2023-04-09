import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput, ScrollView } from "react-native";
import axios from "axios";

import { styleGlobal } from "../styles-global";

const Search = ({ navigation }) => {
  const [isSearch, setIsSearch] = useState({
    search: "",
  });
  const [materi, setMateri] = useState([]);
  const [filteredMateri, setFilteredMateri] = useState([]);
  
  useEffect(() => {
    getMateri();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilteredMateri(
        materi.filter((ListItem) => {
          return ListItem?.judul.toLowerCase().includes(isSearch.search.toLowerCase());
        })
      );
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [isSearch.search, materi]);

  const getMateri = () => {
    axios
      .get("https://8d3f-2001-448a-40a0-21f5-5d16-903-e9d7-6b73.ngrok-free.app/api/materi")
      .then((res) => {
        setMateri(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styleGlobal.mainSearch}>
      <View
        style={{
          justifyContent: "space-between",
          width: "80%",
          marginBottom: 18,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Image
            style={{ width: 10, height: 18, marginTop: 60 }}
            source={require("../assets/icon/Back.png")}
          />
        </TouchableOpacity>
        <View></View>
      </View>
      <Image
        style={{ width: 70, height: 70 }}
        source={require("../assets/logo.png")}
      />
      <View style={styleGlobal.search2}>
        <TextInput
          placeholder="Cari materi batik..."
          placeholderTextColor={"#ABABAB"}
          onChangeText={(search) => setIsSearch({ search })}
        />
        <Image
          style={{ width: 16, height: 16 }}
          source={require("../assets/icon/Magnify.png")}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {filteredMateri.map((listItem, index) => (
        <TouchableOpacity
          key={index}
          style={styleGlobal.listContainer}
          onPress={() => {
            navigation.navigate("detail", { number: 1 });
          }}
        >
          <Image
            style={{ width: 62, height: 62 }}
            source={{uri : `${listItem?.image}`}}
          />
          <View style={styleGlobal.textContainer} key={index}>
            <Text style={styleGlobal.textHead}>{listItem?.judul}</Text>
            <Text style={styleGlobal.textDesc} numberOfLines={3}>
              {listItem?.isi}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
};
export default Search;
