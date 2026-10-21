import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";

export default function Display() {
  return (
    <View style={styles.container}>
      <CustomText style={styles.expression}>1500*2</CustomText>
      <CustomText style={styles.result}>=3000</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 20,
    alignItems: "flex-end",
  },
  expression: {
    fontSize: 32,
    color: "#3A3A3C",
    marginBottom: 4,
  },
  result: {
    fontSize: 28,
    color: "#007AFF",
    fontWeight: "500",
  },
});