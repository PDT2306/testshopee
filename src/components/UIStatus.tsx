import { ImageBackground, View, Text } from "react-native";
import image from "../assets/image";

const UIStatus = () => {
  return (
    <ImageBackground
      style={{
        height: 90,
        width: "100%",
        justifyContent: "space-between"
      }}
      source={image.banner}
    >
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View
          style={{
            height: 15,
            width: 30,
            backgroundColor: "#CB031D",
            borderTopEndRadius: 5,
            borderBottomEndRadius: 5,
            elevation: 10
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 10,
              fontWeight: "bold"
            }}
          >
            MALL
          </Text>
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: "yellow",
            alignItems: "center",
            borderBottomRightRadius: 3,
            borderBottomLeftRadius: 3,
            elevation: 10
          }}
        >
          <Text style={{ color: "#D76507", fontSize: 10 }}>Giảm</Text>
          <Text style={{ color: "#D76507", fontSize: 10 }}>23%</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 15,
            width: 50,
            backgroundColor: "#20AD9A",
            elevation: 10
          }}
        >
          <Text
            style={{
              fontSize: 10,
              alignSelf: "center",
              fontWeight: "bold",
              color: "white"
            }}
          >
            FREESHIP
          </Text>
        </View>
        <View
          style={{ height: 10, width: 10, backgroundColor: "#9A2D28" }}
        ></View>
      </View>
    </ImageBackground>
  );
};
export default UIStatus;
