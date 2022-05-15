import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 4,
    backgroundColor: "#f1f1f1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  information: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    width: 190,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  soldOut:{
      borderWidth:1,
      textAlign:"center",
      borderColor:"#E8452C",
      padding:2,
      borderRadius:5,
      color:"#E8452C"
  }
});
