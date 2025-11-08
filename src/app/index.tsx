import { Button, } from 'heroui-native';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg font-semibold">Deneme src/app/index.tsx</Text>
      <Button onPress={() => alert('Button Pressed!')}>
        <Button.Label>Press Me</Button.Label>
      </Button>
      <Text className="text-lg font-semibold">to edit this screen.</Text>
    </View>
  );
}
