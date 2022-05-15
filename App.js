import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import MusicCard from "./src/components/MusicCard";
import SearchBar from "./src/components/SerachBar";
import musicData from "./src/music-data.json";

export default function App() {
  const [data, setData] = useState(musicData);

  const renderMusicCard = ({ item }) => (
    <MusicCard title={item.title} isSold={item.isSold} imgUri={item.url} />
  );

  const renderSeperator = () => <View style={styles.seperator} />;

  const handleChange = (text) => {
    const filterMusicData = musicData.filter((music) => {
      const title = music.title.toLowerCase();
      const textToLower = text.toLowerCase();
      return title.indexOf(textToLower) > -1;
    });
    setData(filterMusicData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>Music App</Text>
      <SearchBar onChange={handleChange} />
      <FlatList
        data={data}
        renderItem={renderMusicCard}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
  },
  seperator: {
    height: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 5,
  },
});
