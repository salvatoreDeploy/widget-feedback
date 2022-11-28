import React, { useRef, useState } from "react";

import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../themes";

import { Options } from "../Options";
import { Form } from "../Form";

import { feedbackTypes } from "../../utils/feedbackType";
import { Success } from "../Success";

export type FeedBackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);
  const [feedbackSent, setFeedBackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedBack() {
    setFeedBackType(null);
    setFeedBackSent(false);
  }

  function handleFeedBackSend() {
    setFeedBackSent(true);
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={34}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <Success onSendAnotherFeedBack={handleRestartFeedBack} />
        ) : (
          <>
            {feedBackType ? (
              <Form
                feedBackType={feedBackType}
                onFeedBackCanceled={handleRestartFeedBack}
                onFeedBackSend={handleFeedBackSend}
              />
            ) : (
              <Options onFeedBackTypeChanged={setFeedBackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
