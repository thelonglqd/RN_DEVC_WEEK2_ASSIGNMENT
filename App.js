import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const {
    container,
    header,
    profile,
    avatar,
    username,
    userInfo,
    jobTitle,
  } = styles;

  const socialInfo = [
    { name: "Photos", quantity: "210" },
    { name: "Followers", quantity: "15k" },
    { name: "Following", quantity: "605" },
  ];

  const imagesList = [
    { sourceUrl: require("./assets/1.jpg") },
    { sourceUrl: require("./assets/2.jpg") },
    { sourceUrl: require("./assets/3.jpg") },
    { sourceUrl: require("./assets/4.jpg") },
    { sourceUrl: require("./assets/5.jpg") },
    { sourceUrl: require("./assets/6.jpg") },
  ];
  return (
    <ScrollView style={container}>
      <View style={header}>
        <AntDesign name="arrowleft" size={30} color="#747FA6" />
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={30}
          color="#747FA6"
        />
      </View>
      <View style={profile}>
        <Image source={require("./assets/avt3.png")} style={avatar} />
        <View style={userInfo}>
          <Text style={username}>Long Nguyen</Text>
          <Text style={jobTitle}>Developer</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonFollow}>
              <Text style={{ fontSize: 16, color: "#ffffff" }}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSend}>
              <MaterialCommunityIcons name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: 27 }}></View>
      </View>
      <View style={styles.socialInfo}>
        {socialInfo.map((social) => (
          <View key={social.name}>
            <Text style={styles.socialQuan}>{social.quantity}</Text>
            <Text style={styles.socialName}>{social.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.imagesList}>
        {imagesList.map((img) => (
          <Image
            key={img.sourceUrl}
            style={styles.image}
            source={img.sourceUrl}
            resizeMode="stretch"
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: 30,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userInfo: {
    justifyContent: "space-between",
    flexDirection: "column",
  },
  username: {
    fontSize: 25,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#C4C6D6",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  buttonFollow: {
    flex: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    borderRadius: 17,
    backgroundColor: "#3B73FF",
  },
  buttonSend: {
    flex: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    borderRadius: 17,
    backgroundColor: "#56D8FF",
  },
  socialInfo: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
  },
  socialQuan: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  socialName: {
    alignSelf: "center",
    color: "#C4C6D6",
    fontSize: 16,
    fontWeight: "900",
  },
  imagesList: {
    height: 600,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  image: {
    marginTop: 30,
    width: "45%",
    height: 120,
    borderRadius: 40,
  },
});
