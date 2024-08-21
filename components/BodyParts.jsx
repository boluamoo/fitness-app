import { View, Text, FlatList } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants/bodyParts";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const BodyPartCard = ({ item, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        activeOpacity={0.9}
        style={{
          width: widthPercentageToDP(44),
          height: widthPercentageToDP(52),
        }}
        className="flex justify-end p-4 mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: widthPercentageToDP(44),
            height: widthPercentageToDP(52),
          }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            width: widthPercentageToDP(44),
            height: heightPercentageToDP(15),
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />
        <Text
          className="text-white font-semibold text-center tracking-wide capitalize"
          style={{ fontSize: heightPercentageToDP(2.3) }}
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const BodyParts = () => {
  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: heightPercentageToDP(3) }}
        className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 20,
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard item={item} index={index} />
        )}
      />
    </View>
  );
};

export default BodyParts;
