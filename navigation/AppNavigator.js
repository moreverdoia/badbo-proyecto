import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTab from "./MainTab";

import AlbumsScreen from "../screens/musica/AlbumsScreen";
import SpotifyScreen from "../screens/spotify/SpotifyScreen";
import ColaboradoresScreen from "../screens/colaboradores/ColaboradoresScreen";
import BiografiaScreen from "../screens/biografia/BiografiaScreen";

import Lista from "../screens/carpeta1/Lista";
import Detalles from "../screens/carpeta1/Detalles";

import X100PREScreen from "../screens/musica/x100preScreen";
import OASISScreen from "../screens/musica/OASISScreen";
import YHLQMDLGScreen from "../screens/musica/YHLQMDLGScreen";
import LasQueNoIbanASalirScreen from "../screens/musica/LasQueNoIbanASalirScreen";
import ElUltimoTourScreen from "../screens/musica/ElUltimoTourScreen";
import UnVeranoSinTiScreen from "../screens/musica/UnVeranoSinTiScreen";
import NadieSabeScreen from "../screens/musica/NadieSabeScreen";
import DebiTirarMasFotosScreen from "../screens/musica/DebiTirarMasFotosScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Álbumes"
      screenOptions={{
        headerShown: true,

        headerStyle: {
          backgroundColor: "#080808",
        },

        headerTintColor: "#ffffff",

        headerTitleStyle: {
          fontWeight: "800",
        },

        drawerStyle: {
          backgroundColor: "#080808",
          width: 280,
        },

        drawerActiveTintColor: "#ffffff",
        drawerInactiveTintColor: "#888888",

        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
          marginLeft: -5,
        },

        sceneStyle: {
          backgroundColor: "#080808",
        },
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={MainTab}
        options={{
          title: "Inicio",
        }}
      />

      <Drawer.Screen
        name="Álbumes"
        component={AlbumsScreen}
      />

      <Drawer.Screen
        name="Spotify"
        component={SpotifyScreen}
      />

      <Drawer.Screen
        name="Colaboradores"
        component={ColaboradoresScreen}
      />

      <Drawer.Screen
        name="Biografia"
        component={BiografiaScreen}
        options={{
          title: "Biografía",
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
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
        name="AppDrawer"
        component={AppDrawer}
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