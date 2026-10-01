import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTab from "../MainTab";

import Lista from "../../screens/carpeta1/Lista";
import Detalles from "../../screens/carpeta1/Detalles";

import X100PREScreen from "../../screens/musica/x100preScreen";
import OASISScreen from "../../screens/musica/OASISScreen";
import YHLQMDLGScreen from "../../screens/musica/YHLQMDLGScreen";
import LasQueNoIbanASalirScreen from "../../screens/musica/LasQueNoIbanASalirScreen";
import ElUltimoTourScreen from "../../screens/musica/ElUltimoTourScreen";
import UnVeranoSinTiScreen from "../../screens/musica/UnVeranoSinTiScreen";
import NadieSabeScreen from "../../screens/musica/NadieSabeScreen";
import DebiTirarMasFotosScreen from "../../screens/musica/DebiTirarMasFotosScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        headerShown: false,

        contentStyle: {
          backgroundColor: "#080808",
        },
      }}
    >
      <Stack.Screen
        name="MainTab"
        component={MainTab}
      />

      <Stack.Screen
        name="Galeria"
        component={Lista}
      />

      <Stack.Screen
        name="X100PRE"
        component={X100PREScreen}
      />

      <Stack.Screen
        name="OASIS"
        component={OASISScreen}
      />

      <Stack.Screen
        name="YHLQMDLG"
        component={YHLQMDLGScreen}
      />

      <Stack.Screen
        name="LasQueNoIbanASalir"
        component={LasQueNoIbanASalirScreen}
      />

      <Stack.Screen
        name="ElUltimoTour"
        component={ElUltimoTourScreen}
      />

      <Stack.Screen
        name="UnVeranoSinTi"
        component={UnVeranoSinTiScreen}
      />

      <Stack.Screen
        name="NadieSabe"
        component={NadieSabeScreen}
      />

      <Stack.Screen
        name="DebiTirarMasFotos"
        component={DebiTirarMasFotosScreen}
      />

      <Stack.Screen
        name="DetalleFoto"
        component={Detalles}
      />
    </Stack.Navigator>
  );
}