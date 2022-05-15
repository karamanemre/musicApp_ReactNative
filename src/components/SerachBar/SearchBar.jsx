import React from "react";
import { View ,TextInput} from "react-native";
import styles from "./SearchBar.styles";

function SearchBar({onChange}) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search.." onChangeText={onChange} />
    </View>
  );
}

export default SearchBar;
