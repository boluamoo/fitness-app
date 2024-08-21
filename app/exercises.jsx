import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import api from "../api/axios";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

const exercises = () => {
  const item = useLocalSearchParams();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get(`/bodyPart/${item.name}`);
      setData(response.data);
      console.log(data);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(45),
        }}
        className="rounded-b-[40px]"
      />

      {/* exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: heightPercentageToDP(3) }}
          className="font-semibold text-neutral-700 capitalize"
        >
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={data} />
        </View>
      </View>
    </ScrollView>
  );
};

export default exercises;
