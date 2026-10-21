import { StyleSheet, Text, TextProps } from "react-native";

export default function CustomText({ children, style, ...props }: TextProps) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#1C1C1E",
    fontSize: 24,
  },
});