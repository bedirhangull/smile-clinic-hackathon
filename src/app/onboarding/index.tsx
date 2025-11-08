import { View } from "react-native";
import { ScreenScrollView } from "@/src/components/screen-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import FirstStep from "./steps/first-step";
import SecondStep from "./steps/second-step";
import { Button } from "heroui-native";

export default function Onboarding() {

    const STEPS = [
        {
            id: 1,
            page: FirstStep
        },
        {
            id: 2,
            page: SecondStep
        }
    ]

    return (
        <ScreenScrollView contentContainerClassName="px-4 flex-1">
            <SafeAreaView style={{ flex: 1 }} >
                {STEPS.map((step) => (
                    <View key={step.id}>
                        <step.page />
                    </View>
                ))}
            </SafeAreaView>
            <View className="">
                <Button >
                    <Button.Label>
                        Devam Et
                    </Button.Label>
                </Button>
            </View>
        </ScreenScrollView>

    )
}