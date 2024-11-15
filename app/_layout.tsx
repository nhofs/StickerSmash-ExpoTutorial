import { Stack } from "expo-router";
import AboutScreen from "./(tabs)/about";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="+not-found"  />
  </Stack>;
}
