import React from "react";
import { View, Image } from "react-native";

import loogImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={loogImg} style={styles.logo} />
    </View>
  );
}
