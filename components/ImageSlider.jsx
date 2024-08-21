import React from "react";
import { Platform, Text, View } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import images from "../constants/images";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const sliderImages = [
  images.slide1,
  images.slide2,
  images.slide3,
  images.slide4,
  images.slide5,
];

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View
      style={{
        width: widthPercentageToDP(100) - 70,
        height: heightPercentageToDP(25),
      }}
      key={index}
    >
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};

const ImageSlider = () => {
  return (
    <Carousel
      autoplay={Platform.OS === "ios" ? true : false}
      autoplayInterval={4000}
      loop={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={widthPercentageToDP(100)}
      firstItem={1}
      itemWidth={widthPercentageToDP(100) - 70}
      slideStyle={{ display: "flex", alignSelf: "center" }}
      layoutCardOffset={9}
      data={sliderImages}
    />
  );
};

export default ImageSlider;
