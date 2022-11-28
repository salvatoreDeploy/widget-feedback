import React from "react";
import { View, Text } from "react-native";
import { Copyright } from "../Copyright";
import { Option } from "../Option";
import { FeedBackType } from "../Widget";
import { feedbackTypes } from "./../../utils/feedbackType";

import { styles } from "./styles";

interface Props {
  onFeedBackTypeChanged: (feedBackType: FeedBackType) => void;
}

export function Options({ onFeedBackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe o seu Feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedBackTypeChanged(key as FeedBackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
