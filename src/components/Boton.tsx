import { StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

interface BotonProps {
  label: string;
  type?: "number" | "operator" | "action" | "equals";
}

export default function Boton({ label, type = "number" }: BotonProps) {
  const getBgColor = () => {
    if (type === "equals") return "#007AFF";
    if (type === "operator" || type === "action") return "#F2F2F7";
    return "#F9F9FB";
  };

  const getTextColor = () => {
    if (type === "equals") return "#FFFFFF";
    if (type === "operator" || type === "action") return "#007AFF";
    return "#1C1C1E";
  };

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: getBgColor() }]}>
      <CustomText style={{ color: getTextColor() }}>{label}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
});