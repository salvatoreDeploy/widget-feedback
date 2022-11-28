import React from "react";

import { View, Image, TouchableOpacity, Text } from "react-native";

import successImg from "../../assets/success.png";
import { Copyright } from "../Copyright";

import { styles } from "./styles";

interface Props {
  onSendAnotherFeedBack: () => void;
}

export function Success({ onSendAnotherFeedBack }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.successImg} source={successImg} />
      <Text style={styles.successTitle}>Agradecemos o Sucesso</Text>
      <TouchableOpacity
        style={styles.successButton}
        onPress={onSendAnotherFeedBack}
      >
        <Text style={styles.succesButtonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
