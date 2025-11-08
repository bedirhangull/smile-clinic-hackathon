import { Button, } from 'heroui-native';
import { Text, View } from "react-native";
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg font-semibold">Deneme src/app/index.tsx</Text>
      <Button onPress={() => alert('Button Pressed!')}>
        <Button.Label>{t("page.title")}</Button.Label>
      </Button>
      <Text className="text-lg font-semibold">{t("page.description")}</Text>
    </View>
  );
}
