import { StyleSheet, View } from "react-native";
import Boton from "./Boton";

const rows = [
  [ { label: "C", type: "action" }, { label: "%", type: "action" }, { label: "÷", type: "operator" }, { label: "⌫", type: "action" } ],
  [ { label: "7", type: "number" }, { label: "8", type: "number" }, { label: "9", type: "number" }, { label: "×", type: "operator" } ],
  [ { label: "4", type: "number" }, { label: "5", type: "number" }, { label: "6", type: "number" }, { label: "-", type: "operator" } ],
  [ { label: "1", type: "number" }, { label: "2", type: "number" }, { label: "3", type: "number" }, { label: "+", type: "operator" } ],
  [ { label: "( )", type: "action" }, { label: "0", type: "number" }, { label: ".", type: "number" }, { label: "=", type: "equals" } ],
];

export default function Rejilla() {
  return (
    <View style={styles.container}>
      {rows.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((btn) => (
            <Boton key={btn.label} label={btn.label} type={btn.type as any} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 4,
  },
});