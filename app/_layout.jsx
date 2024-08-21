import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen
        name="exercises"
        options={{
          presentation: "modal",
          gestureEnabled: true,
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: "modal",
          gestureEnabled: true,
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
};

export default _layout;
