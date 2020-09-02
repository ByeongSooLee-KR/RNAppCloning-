import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SellingItem from "./src/screens/sellingItem";
import AroundMe from "./src/screens/aroundMeScreen";
import Writing from "./src/screens/writingScreen";
import Chat from "./src/screens/chatScreen";
import MyCarrot from "./src/screens/myCarrotScreen";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        initialRouteName="홈"
        tabBarOptions={{
          labelStyle: {
            fontSize: 12,
          },
          activeTintColor: "black",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="홈"
          component={SellingItem}
          options={{
            tabBarLabel: "홈",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="내 근처"
          component={AroundMe}
          options={{
            tabBarLabel: "내 근처",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="map-marker"
                color={color}
                size={23}
              />
            ),
          }}
        />
        <Tab.Screen
          name="글쓰기"
          component={Writing}
          options={{
            tabBarLabel: "글쓰기",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="pen" color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="채팅"
          component={Chat}
          options={{
            tabBarLabel: "채팅",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="나의 당근"
          component={MyCarrot}
          options={{
            tabBarLabel: "나의 당근",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={23} />
            ),
          }}
        />
      </Tab.Navigator>

      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
