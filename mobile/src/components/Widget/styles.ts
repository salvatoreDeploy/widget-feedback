import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
  button: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: theme.colors.brand,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 16,
    bottom: getBottomSpace() + 16,
  },

  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  },
});
