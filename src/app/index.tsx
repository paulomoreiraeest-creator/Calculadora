import { StyleSheet, View } from "react-native";
import Display from "../components/Display";
import Rejilla from "../components/Rejilla";

export default function Index() {
  return (
    <View style={styles.container}>
      <Display />
      <Rejilla />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
});