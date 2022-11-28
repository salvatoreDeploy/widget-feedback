import { StyleSheet } from "react-native";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    position: "relative",
  },
  removeIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  cameraIcon: {},
  screeshotImage: {
    width: 40,
    height: 40,
  },
});
