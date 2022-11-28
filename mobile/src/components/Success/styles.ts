import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  successImg: {
    width: 36,
    height: 36,
    marginTop: 42,
    marginBottom: 10,
  },
  successTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
    marginBottom: 24,
  },
  successButton: {
    height: 40,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    marginBottom: 56,
  },
  succesButtonTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
