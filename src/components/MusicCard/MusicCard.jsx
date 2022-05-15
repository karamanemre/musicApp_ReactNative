import React from "react";
import { View, Text, Image } from "react-native";
import style from "./MusicCard.styles";

function MusicCard({ title, imgUri, isSold }) {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={{
            uri: imgUri,
          }}
        />
      </View>
      <View style={style.content}>
        <Text style={style.title}>{title}</Text>
        <View style={style.information}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: 100,
            }}
          >
            <Text>Deneme</Text>
            <Text>1500</Text>
          </View>
          {isSold && <Text style={style.soldOut}>Tükendi</Text>}
        </View>
      </View>
    </View>
  );
}

export default MusicCard;
