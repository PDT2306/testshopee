import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import color from "../assets/color";
import UIStatus from "./UIStatus";
import NameDisplay from "./NameDisplay";
type IPostData = {
  id: number;
  title: string;
};
const UIFlatListProduct = () => {
  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState<IPostData[]>([]);

  const [loadingMore, setLoadingMore] = useState(false);

  const [page, setPage] = useState(1);

  //get data PostData
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page}`
        );
        //
        setPosts((prevPosts) => [...prevPosts, ...response.data]);
        setLoading(false);
        setLoadingMore(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchPosts();
  }, [page]);
  //render ActivityIndicator
  const renderFooter = () => {
    if (!loadingMore) return null;

    return (
      <View style={styles.loadingMoreContainer}>
        <ActivityIndicator size="small" color="#999999" />
      </View>
    );
  };
  //Loading more
  const handleLoadMore = () => {
    if (loadingMore) return;
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
  };
  //
  const renderPost = ({ item }: { item: IPostData }) => {
    return (
      <TouchableOpacity key={item.id.toString()} style={styles.postContainer}>
        {/* product item*/}
        <UIStatus></UIStatus>
        <View style={{ flex: 1, width: 148 }}>
          <NameDisplay
            productName={item.title}
            maxDisplayLength={35}
          ></NameDisplay>
        </View>
        <View key={item.id.toString()} style={styles.status}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Flash Sale
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: color.maincolor }}>
            <Text style={{ textDecorationLine: "underline" }}>đ</Text>100.000
          </Text>
          <Text style={{ fontSize: 10, color: "black", marginTop: 3 }}>
            Đã bán : 10
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.8}
        ListFooterComponent={renderFooter}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    marginHorizontal: 5,
    padding: 16,
    backgroundColor: "#fff",
    elevation: 4,
    marginBottom: 5
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16
  },
  loadingMoreContainer: {
    marginVertical: 16,
    alignItems: "center",
    alignSelf: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  status: {
    height: 20,
    width: 70,
    backgroundColor: color.maincolor,
    borderRadius: 3,
    justifyContent: "center"
  }
});
export default UIFlatListProduct;
