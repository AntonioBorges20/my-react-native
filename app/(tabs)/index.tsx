import Alumnos from "@/components/Alumnos";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { createStackNavigator } from "@react-navigation/stack";
import Cursos from "@/components/Cursos";
import Materias from "@/components/Materias";
import Profesores from "@/components/Profesores";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Bienvenido">
      <Stack.Screen name="Bienvenido" component={ThemedText} />
      <Stack.Screen name="Alumnos" component={Alumnos} />
      <Stack.Screen name="Materias" component={Materias} />
      <Stack.Screen name="Profesores" component={Profesores} />
      <Stack.Screen name="Cursos" component={Cursos} />
    </Stack.Navigator>
  );
}
