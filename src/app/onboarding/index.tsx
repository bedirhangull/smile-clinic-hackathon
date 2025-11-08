import { View } from "react-native";
import { ScreenScrollView } from "@/src/components/screen-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import FirstStep from "./steps/first-step";
import SecondStep from "./steps/second-step";
import { Button } from "heroui-native";

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState(0);

    const STEPS = [
        {
            id: 1,
            page: FirstStep
        },
        {
            id: 2,
            page: SecondStep
        }
    ];

    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === STEPS.length - 1;

    const handleNext = () => {
        if (!isLastStep) {
            setCurrentStep(prev => prev + 1);
        } else {
            console.log('Onboarding tamamlandı!');
        }
    };

    const handleBack = () => {
        if (!isFirstStep) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const CurrentStepComponent = STEPS[currentStep].page;

    return (
        <ScreenScrollView contentContainerClassName="px-4 flex-1">
            <SafeAreaView style={{ flex: 1 }}>
                {/* Sadece aktif adımı göster */}
                <View style={{ flex: 1 }}>
                    <CurrentStepComponent />
                </View>
            </SafeAreaView>

            {/* Alt butonlar */}
            <View className="pb-4 gap-3">
                {/* Progress indicator */}
                <View className="flex-row justify-center gap-2 mb-2">
                    {STEPS.map((_, index) => (
                        <View
                            key={index}
                            className={`h-2 rounded-full ${index === currentStep
                                ? 'w-8 bg-blue-600'
                                : 'w-2 bg-gray-300'
                                }`}
                        />
                    ))}
                </View>

                {/* Butonlar */}
                <View className="flex-row gap-3">
                    {!isFirstStep && (
                        <View className="flex-1">
                            <Button onPress={handleBack}>
                                <Button.Label>Geri</Button.Label>
                            </Button>
                        </View>
                    )}

                    <View className={isFirstStep ? "flex-1" : "flex-1"}>
                        <Button onPress={handleNext}>
                            <Button.Label>
                                {isLastStep ? 'Başla' : 'Devam Et'}
                            </Button.Label>
                        </Button>
                    </View>
                </View>
            </View>
        </ScreenScrollView>
    );
}