import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import icon from "../assets/icon";
import color from "../assets/color";
const Header = () => {
  return (
    <View style={styles.search_view}>
      <View style={styles.search}>
        <Image
          style={[styles.icon, { margin: 10 }]}
          source={icon.search}
        ></Image>
        <TextInput
          style={styles.textinput}
          placeholder="Tìm kiếm"
          placeholderTextColor={color.maincolor}
        ></TextInput>
        <TouchableOpacity>
          <Image
            style={[styles.icon, { marginLeft: 10, marginVertical: 10 }]}
            source={icon.camera}
          ></Image>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image
          source={icon.cart}
          style={[styles.icon, styles.icon_top]}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={icon.mess}
          style={[styles.icon, styles.icon_top]}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  icon_top: {
    marginTop: 20,
    marginLeft: 20,
    tintColor: "#FD1F00"
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: "#6D6D6D"
  },
  search_view: {
    flexDirection: "row",
    marginBottom: 10
  },
  search: {
    height: 40,
    width: 280,
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: "#f5f5f5",
    elevation: 5,
    flexDirection: "row"
  },
  textinput: {
    borderRadius: 10,
    width: 200
  }
});
export default Header;
