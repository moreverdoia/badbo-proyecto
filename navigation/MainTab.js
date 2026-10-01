import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import InicioScreen from "../screens/inicio/InicioScreen";
import AlbumsScreen from "../screens/musica/AlbumsScreen";
import SpotifyScreen from "../screens/spotify/SpotifyScreen";
import ColaboradoresScreen from "../screens/colaboradores/ColaboradoresScreen";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#080808",
          borderTopColor: "rgba(255,255,255,0.08)",
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#666666",

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
      />

      <Tab.Screen
        name="Álbumes"
        component={AlbumsScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();

            navigation
              .getParent()
              ?.navigate("AppDrawer", {
                screen: "Álbumes",
              });
          },
        })}
      />

      <Tab.Screen
        name="Spotify"
        component={SpotifyScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();

            navigation
              .getParent()
              ?.navigate("AppDrawer", {
                screen: "Spotify",
              });
          },
        })}
      />

      <Tab.Screen
        name="Colaboradores"
        component={ColaboradoresScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();

            navigation
              .getParent()
              ?.navigate("AppDrawer", {
                screen: "Colaboradores",
              });
          },
        })}
      />
    </Tab.Navigator>
  );
}