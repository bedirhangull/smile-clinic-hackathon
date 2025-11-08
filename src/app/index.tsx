import { Button, } from 'heroui-native';
import { View } from "react-native";
import { useTranslation } from 'react-i18next';
import { router } from "expo-router";

export default function Index() {
  const { t } = useTranslation();

  const handlePress = () => {
    router.replace("/onboarding")
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Button onPress={handlePress}>
        <Button.Label>{t("page.title")}</Button.Label>
      </Button>
    </View>
  );
}
