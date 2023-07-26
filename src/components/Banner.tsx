import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import image from "../assets/image";
import icon from "../assets/icon";
import color from "../assets/color";
import UIScrollView from "../components/UIScrollView";
import UIScrollViewProduct from "./UIFlatListProduct";
import UIShopeePay from "./UIShopeePay";
import UICard from "./UICard";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Banner = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={image.banner} style={styles.banner_image}></Image>
        <View style={styles.banner_view}>
          <Image source={icon.scan} style={styles.icon_scan}></Image>
          <Image source={icon.line} style={styles.row}></Image>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={[styles.icon, { tintColor: color.maincolor }]}
                source={icon.wallet}
              ></Image>
              <Text style={styles.text}>Ví ShopeePay</Text>
            </View>
            <Text>Voucher</Text>
          </View>
          <Image source={icon.line} style={styles.row}></Image>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Image style={styles.icon} source={icon.coin}></Image>
              <Text style={styles.text}>0</Text>
            </View>
            <Text>Đổi xu</Text>
          </View>
        </View>
        <UIScrollView></UIScrollView>
        <View style={{ flexDirection: "row" }}>
          <Image source={image.sale} style={styles.image}></Image>
          <Image source={image.sale} style={styles.image}></Image>
          <Image source={image.sale} style={styles.image}></Image>
        </View>
      </View>

      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text style={[styles.flash_sale, { fontWeight: "bold" }]}>
          F<Image source={icon.flash} style={styles.flash}></Image>ash Sale :
        </Text>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text style={{ marginTop: 15, color: "black" }}>Xem tất cả</Text>
          <Image
            source={icon.right_arrow}
            style={{ height: 10, width: 10, marginTop: 20, marginLeft: 2 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <UIScrollViewProduct></UIScrollViewProduct>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles.text, { color: color.maincolor }]}>
          ShopeePay gần bạn 🎉
        </Text>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text style={{ marginTop: 5 }}>Xem thêm</Text>
          <Image
            source={icon.right_arrow}
            style={{ height: 10, width: 10, marginTop: 11, marginLeft: 2 }}
          ></Image>
        </TouchableOpacity>
      </View>
      {/* ShopeePay gần bạn */}
      <UIShopeePay></UIShopeePay>
      {/* Card */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles.text, { color: color.maincolor }]}>
          Nạp thẻ & Dịch vụ 🎉
        </Text>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text style={{ marginTop: 5 }}>Xem thêm</Text>
          <Image
            source={icon.right_arrow}
            style={{ height: 10, width: 10, marginTop: 11, marginLeft: 2 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <UICard></UICard>
      <Text style={[styles.text, { color: color.maincolor }]}>
        Gợi ý hôm nay 🎉
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.maincolor,
    flex: 1
  },
  text: { color: "black", fontSize: 16, marginTop: 5, marginRight: 5 },
  banner_view: {
    width: windowWidth * 0.8,
    height: 50,
    backgroundColor: "#f5f5f5",
    alignSelf: "center",
    borderRadius: 5,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 180
  },
  icon_scan: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginVertical: 10
  },
  row: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginVertical: 10,
    tintColor: "#d1d1d3"
  },
  banner_image: {
    width: "100%",
    height: windowHeight * 0.25
  },
  image: { height: 50, width: 80, marginVertical: 15, marginHorizontal: 20 },
  icon: {
    height: 20,
    width: 20,
    marginTop: 7,
    marginRight: 4
  },
  flash: {
    width: 15,
    height: 15,
    tintColor: color.maincolor
  },
  flash_sale: {
    fontSize: 16,
    color: color.maincolor,
    marginTop: 10,
    flex: 1
  }
});
export default Banner;
