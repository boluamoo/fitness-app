import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import images from "../constants/images";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIfStarted = async () => {
      try {
        const started = await AsyncStorage.getItem("started");
        if (started) {
          router.push('/home');
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    checkIfStarted();
  }, []);

  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem("started", "true");
      router.push('/home');
    } catch (error) {
      console.error("Failed to save the 'started' state", error);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#FF5A5F" />
      </View>
    );
  }

  return (
    <View className="flex-1 justify-end">
      <Image source={images.welcome} className="w-full h-full absolute" />
      <LinearGradient
        colors={["transparent", "#18181B"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(5) }}
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(5) }}
          >
            For you
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={handleGetStarted}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 items-center justify-center mx-auto rounded-full border-2 border-neutral-200"
            activeOpacity={0.8}
          >
            <Text
              className="text-white font-bold tracking-widest"
              style={{ fontSize: hp(3) }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
      <StatusBar style="dark" />
    </View>
  );
};

export default Index;
