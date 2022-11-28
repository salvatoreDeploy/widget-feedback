import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";

import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import { captureScreen } from "react-native-view-shot";
import * as FyleSystem from "expo-file-system";
import { theme } from "../../themes";

/* Aqui temos a tipagem do que queremos na lista, depois a lista em si, e uma interface de propriedades */
import { FeedBackType } from "../../components/Widget";
import { feedbackTypes } from "../../utils/feedbackType";

interface Props {
  feedBackType: FeedBackType;
  onFeedBackCanceled: () => void;
  onFeedBackSend: () => void;
}

import { styles } from "./styles";
import { ScreenShotButton } from "../ScreenShotButton";
import { Button } from "../Button";
import { api } from "../../services/api";

export function Form({
  feedBackType,
  onFeedBackCanceled,
  onFeedBackSend,
}: Props) {
  const [screenShot, setScreenShot] = useState<string | null>(null);

  const [isSendFeedBack, setIsSendFeedBack] = useState(false);

  const [commentInput, setCommentInput] = useState("");

  const feedbackInfo = feedbackTypes[feedBackType];

  function handleScreenShot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => {
        setScreenShot(uri);
      })
      .catch((error) => console.log(error));
  }

  function handleScreenShotRemove() {
    setScreenShot(null);
  }

  async function handleSendFeedBack() {
    if (isSendFeedBack) {
      return;
    }

    setIsSendFeedBack(true);

    const screenshotBase64 =
      screenShot &&
      (await FyleSystem.readAsStringAsync(screenShot, { encoding: "base64" }));

    try {
      await api.post("/feedbacks/createfeedback", {
        type: feedBackType,
        comment: commentInput,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
      });

      onFeedBackSend();
    } catch (error) {
      console.log(error);
      setIsSendFeedBack(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedBackCanceled}>
          <ArrowLeft
            size={24}
            weight={"bold"}
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackInfo.title}</Text>
        </View>
      </View>
      {/* End Header */}

      <TextInput
        multiline
        style={styles.inputText}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setCommentInput}
      />
      <View style={styles.footer}>
        <ScreenShotButton
          onTakeShot={handleScreenShot}
          onRemoveShot={handleScreenShotRemove}
          screenshot={screenShot}
        />
        <Button onPress={handleSendFeedBack} isLoading={isSendFeedBack} />
      </View>
    </View>
  );
}
