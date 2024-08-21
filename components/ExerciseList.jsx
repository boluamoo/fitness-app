import { View, Text, FlatList } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";
import Animated, { FadeInDown } from "react-native-reanimated";

const ExerciseCard = ({ item, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}>
      <TouchableOpacity
        onPress={() =>
          router.push({ pathname: "/exerciseDetails", params: item })
        }
        activeOpacity={0.9}
        className="flex py-3 space-y-2"
      >
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{
              width: widthPercentageToDP(44),
              height: widthPercentageToDP(52),
            }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{ fontSize: heightPercentageToDP(1.7) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wide"
        >
          {item?.name?.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const ExerciseList = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60,
          paddingTop: 20,
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <ExerciseCard item={item} index={index} />
        )}
      />
    </View>
  );
};

export default ExerciseList;
