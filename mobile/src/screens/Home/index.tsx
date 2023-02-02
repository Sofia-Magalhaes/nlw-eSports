import { View, Image } from "react-native";

import loogImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";


import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={loogImg} style={styles.logo} />

      <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..."/>
    </View>
  );
}
