import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  productName: string;
  maxDisplayLength: number; // Số ký tự tối đa để hiển thị trước khi cắt bớt
}

const NameDisplay: React.FC<Props> = ({ productName, maxDisplayLength }) => {
  const truncatedName =
    productName.length > maxDisplayLength
      ? `${productName.substring(0, maxDisplayLength)}...`
      : productName;

  return <Text style={styles.title}>{truncatedName}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: "black"
  }
});
export default NameDisplay;
