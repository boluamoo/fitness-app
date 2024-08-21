import { View, Text } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";

const exerciseDetails = () => {
  const item = useLocalSearchParams();

  return (
    <View className="flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px] overflow-hidden">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{
            width: widthPercentageToDP(100),
            height: widthPercentageToDP(100),
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0 top-7"
      >
        <AntDesign
          name="closecircle"
          size={heightPercentageToDP(4.5)}
          color="#f43f5e"
        />
      </TouchableOpacity>

      {/* details */}
      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Text
          style={{ fontSize: heightPercentageToDP(3.5) }}
          className="capitalize font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Text>
        <Text
          style={{ fontSize: heightPercentageToDP(2) }}
          className="capitalize text-neutral-700 tracking-wide"
        >
          Equipment:{" "}
          <Text className="font-bold text-neutral-800">{item?.equipment}</Text>
        </Text>
        <Text
          style={{ fontSize: heightPercentageToDP(2) }}
          className="capitalize text-neutral-700 tracking-wide"
        >
          Target Muscles:{" "}
          <Text className="font-bold text-neutral-800">{item?.target}</Text>
        </Text>
        <Text
          style={{ fontSize: heightPercentageToDP(2) }}
          className="capitalize text-neutral-700 tracking-wide"
        >
          Secondary Muscles:{" "}
          <Text className="font-bold text-neutral-800">
            {item?.secondaryMuscles}
          </Text>
        </Text>
        <Text
          style={{ fontSize: heightPercentageToDP(3) }}
          className="capitalize font-semibold text-neutral-800 tracking-wide"
        >
          Instructions
        </Text>
        {item.instructions.split(",").map((instruction, index) => (
          <Text
            key={index}
            style={{ fontSize: heightPercentageToDP(1.7) }}
            className="text-neutral-800"
          >
            {instruction}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default exerciseDetails;
