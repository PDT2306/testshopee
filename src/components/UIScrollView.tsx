import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import icon from "../assets/icon";

const data = [
  { id: "1", title: "Mã giảm giá" },
  { id: "2", title: "Shop Mall" },
  { id: "3", title: "ShopeePay" },
  { id: "4", title: "Nạp thẻ" },
  { id: "5", title: "Săn thưởng" },
  { id: "6", title: "TechZone" }
];

const UIScrollView = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {data.map((item) => (
          <TouchableOpacity key={item.id}>
            <View style={styles.item}>
              <Image source={icon.salad} style={styles.image}></Image>
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        {data.map((item) => (
          <TouchableOpacity key={item.id}>
            <View style={styles.item}>
              <Image source={icon.gift} style={styles.image}></Image>
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 20,
    marginTop: 30
  },
  row: {
    flexDirection: "row",
    marginTop: 5
  },
  item: {
    flex: 1,
    padding: 10,
    marginHorizontal: 25,
    marginVertical: 5,
    backgroundColor: "#FAF2F7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 10
  },
  title: {
    fontSize: 16,
    color: "white",
    alignSelf: "center"
  },
  image: {
    height: 20,
    width: 20,
    resizeMode: "cover"
  }
});

export default UIScrollView;
