import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import icon from "../assets/icon";
import color from "../assets/color";
const datacard = [
  { id: "1", name: "Mã ưu đãi", prePrice: 100000, price: 1000, title: "HCM" },
  { id: "2", name: "3G/4G", prePrice: 200000, price: 2000, title: "500MB" },
  { id: "3", name: "Movie", prePrice: 300000, price: 3000, title: "Movie" },
  { id: "4", name: "Nạp thẻ đt", prePrice: 400000, price: 4000, title: "Card" }
];
const UICard = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {datacard.map((card) => (
          <TouchableOpacity>
            <View key={card.id} style={styles.item}>
              <View style={{ flexDirection: "row" }}>
                <Image source={icon.card} style={styles.icon}></Image>
                <Text style={styles.text_name}>{card.name}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image source={icon.flash} style={styles.icon_flash}></Image>
                <View style={styles.text_price}>
                  <Text
                    style={{
                      textDecorationLine: "line-through",
                      marginRight: 30
                    }}
                  >
                    <Text
                      style={{
                        textDecorationLine: "underline"
                      }}
                    >
                      đ
                    </Text>
                    {card.prePrice}
                  </Text>
                  <Text style={{ color: color.maincolor }}>
                    <Text
                      style={{
                        textDecorationLine: "underline"
                      }}
                    >
                      đ
                    </Text>
                    {card.price}
                  </Text>
                </View>
              </View>
              <Text>{card.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 10
  },
  row: {
    flexDirection: "row",
    marginTop: 5
  },
  item: {
    width: 160,
    height: 70,
    padding: 5,
    backgroundColor: "#EDA502",
    margin: 5,
    borderRadius: 5,
    elevation: 5
  },
  icon: {
    height: 20,
    width: 20
  },
  text_price: {
    flexDirection: "row"
  },
  text_name: {
    fontWeight: "bold",
    fontSize: 16
  },
  icon_flash: {
    height: 15,
    width: 7,
    tintColor: color.maincolor
  }
});
export default UICard;
