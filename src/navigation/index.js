import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/WelcomeScreen";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import LibraryScreen from "../screens/LibraryScreen";
import UnitScreen from "../screens/UnitScreen";
import DoseScreen from "../screens/DoseScreen";
import AboutScreen from "../screens/AboutScreen";
import DiagnosticRadio from "../screens/DiagnosticRadio";
import TherapeuticRadio from "../screens/TherapeuticRadio";
import TheragnosticRadio from "../screens/TheragnosticRadio";
import NonClinicalRadio from "../screens/NonClinicalRadio";
import Conversions from "../screens/Conversions";
import ElementDetailScreen from "../screens/ElementDetailScreen";
import Calculator from "../screens/Calculator";
import Occupational from "../screens/DoseLimit/Occupational";
import Apprentices from "../screens/DoseLimit/Apprentices";
import PublicDose from "../screens/DoseLimit/PublicDose";
import Radiological from "../screens/DoseLimit/Radiological";
import Radiation from "../screens/DoseLimit/Radiation";
import Discharge from "../screens/DoseLimit/Discharge";
import Guideline from "../screens/DoseLimit/Guideline";
import HalfLife from "../screens/Calculations/HalfLife";
import CalTe from "../screens/Calculations/CalTe";
import CalTb from "../screens/Calculations/CalTb";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Library" component={LibraryScreen} />
                <Stack.Screen name="Unit" component={UnitScreen} />
                <Stack.Screen name="Dose" component={DoseScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Diagnostic" component={DiagnosticRadio} />
                <Stack.Screen name="Therapeutic" component={TherapeuticRadio} />
                <Stack.Screen name="Theragnostic" component={TheragnosticRadio} />
                <Stack.Screen name="Nonclinical" component={NonClinicalRadio} />
                <Stack.Screen name="Convert" component={Conversions} />
                <Stack.Screen name="Details" component={ElementDetailScreen} />
                <Stack.Screen name="Calculate" component={Calculator} />
                <Stack.Screen name="Occupational" component={Occupational} />
                <Stack.Screen name="Apprentice" component={Apprentices} />
                <Stack.Screen name="Public" component={PublicDose} />
                <Stack.Screen name="Radio" component={Radiological} />
                <Stack.Screen name="Radiation" component={Radiation} />
                <Stack.Screen name="Dispose" component={Discharge} />
                <Stack.Screen name="Guide" component={Guideline} />
                <Stack.Screen name="Half" component={HalfLife} />
                <Stack.Screen name="Te" component={CalTe} />
                <Stack.Screen name="Tb" component={CalTb} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}