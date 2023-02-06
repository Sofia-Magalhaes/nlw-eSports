import React from "react";
import { View, Modal, ModalProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../theme";

interface Props extends ModalProps {
  discord: string;
  OnClose: () => void;
}

export function DuoMatch({ discord,OnClose, ...rest }: Props) {
  return (
    <Modal {...rest} transparent statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.content}>

            <TouchableOpacity style={styles.closeIcon} onPress={OnClose}>
                <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500}/>                
            </TouchableOpacity>

          <Text style={styles.discord}>{discord}</Text>
        </View>
      </View>
    </Modal>
  );
}
