import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Datas } from "../data";
import { set } from "react-native-reanimated";
import { Appbar } from "react-native-paper";

const renderItem = ({ item }) => {
  return (
    <View style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 10 }}>
      <View>
        <Image style={styles.Image} source={{ uri: item.image_url }} />
      </View>
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemAddress}>
          {item.address} {""} {item.date}
        </Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );
};

// const LIMIT = 11;

export default function SellingItem() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [radioSelected, setRadioSelected] = useState(0);
  const [itemMenu, setItemMenu] = useState(true);

  const renderRadioButtons = () => {
    const radioButtons = [
      {
        id: 0,
        label: "중고거래",
      },
      {
        id: 1,
        label: "동네생활",
      },
    ];

    return (
      <>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {radioButtons.map((button) => {
            let idChecked = button.id === radioSelected;

            return (
              <View
                style={{
                  flex: 1,
                  height: 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderBottomWidth: idChecked ? 2 : 0,
                  borderBottomColor: "black",
                }}
              >
                <TouchableOpacity
                  key={button.id}
                  onPress={() => onRadioButtonClick(button.id)}
                  style={{
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: idChecked ? "600" : "400",
                      color: idChecked ? "black" : "gray",
                    }}
                  >
                    {button.label}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View
          style={{ flex: 1, height: 2, backgroundColor: "rgb(206, 206, 206)" }}
        />
      </>
    );
  };

  const onRadioButtonClick = (id) => {
    if (id == 0) {
      setItemMenu(true);
      setRadioSelected(id);
    } else {
      setItemMenu(false);
      setRadioSelected(id);
    }
  };

  // const getData = () => {
  //   setLoading(true);
  //   fetch("http://218.238.104.248:19006/data/data.json")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  //   .then((res) => setData(data.concat(res.slice(offset, offset + LIMIT))))
  //   .then(() => {
  //     setOffset(offset + LIMIT);
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     setLoading(false);
  //     Alert.alert("에러가 났습니다");
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const onEndReached = () => {
    // if (loading) {
    //   return;
    // } else {
    //   getData();
    // }
    console.log("onEndReached");
  };

  const FlatListItemSeperator = () => {
    return (
      <View
        style={{
          height: 1,
          flex: 1,
          backgroundColor: "rgb(206, 206, 206)",
        }}
      />
    );
  };

  // console.log(Datas[0].address);
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "white", border: "none" }}>
        <Appbar.Content title="잠실 6동" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="menu" />
        <Appbar.Action icon="bell" />
      </Appbar.Header>
      <View>{renderRadioButtons()}</View>
      {itemMenu ? (
        <FlatList
          data={Datas}
          style={{
            padding: 20,
            paddingTop: 10,
            marginTop: 40,
          }}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={FlatListItemSeperator}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.8}
          // ListHeaderComponent={FlatListHeader}
          // ListFooterComponent={loading && <ActivityIndicator />}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  imgContainer: {
    padding: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "200",
    marginBottom: 10,
  },
  itemAddress: {
    fontSize: 13,
    color: "gray",
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: "600",
  },
});
