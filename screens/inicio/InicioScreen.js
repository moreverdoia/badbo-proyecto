import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

export default function InicioScreen({ navigation }) {
  const imagenBadBunny = "";

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <ImageBackground
        source={
          imagenBadBunny
            ? { uri: imagenBadBunny }
            : require("../../assets/x100pre.jpg")
        }
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,0.05)",
            "rgba(0,0,0,0.15)",
            "rgba(0,0,0,0.65)",
            "rgba(0,0,0,0.97)",
          ]}
          locations={[0, 0.3, 0.7, 1]}
          style={StyleSheet.absoluteFill}
        />

        <LinearGradient
          colors={["rgba(0,0,0,0.65)", "transparent"]}
          style={styles.topGradient}
        />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>BB</Text>
            </View>

            <View style={styles.headerRight}>
              <Text style={styles.headerSmall}>BAD BUNNY</Text>
              <Text style={styles.headerDot}>●</Text>
            </View>
          </View>

          <View style={styles.heroSpacer} />

          <View style={styles.mainContent}>
            <Text style={styles.title}>Bad</Text>

            <Text style={styles.titleLast}>Bunny</Text>

            <Text style={styles.subtitle}>
              Benito Antonio Martínez Ocasio
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.glassButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() =>
                navigation.getParent()?.navigate("AppDrawer", {
                  screen: "Biografia",
                })
              }
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>EXPLORAR MÁS</Text>

                <View style={styles.arrowCircle}>
                  <Text style={styles.arrow}>→</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  topGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.35,
  },

  scrollContent: {
    flexGrow: 1,
    paddingTop: 55,
    paddingHorizontal: 22,
    paddingBottom: 35,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: -1,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerSmall: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
  },

  headerDot: {
    color: "#FFFFFF",
    fontSize: 7,
  },

  heroSpacer: {
    flex: 1,
    minHeight: height * 0.30,
  },

  mainContent: {
    width: "100%",
  },

  eyebrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  eyebrow: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2.5,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 72,
    lineHeight: 67,
    fontWeight: "900",
    letterSpacing: -4,
  },

  titleLast: {
    color: "#FFFFFF",
    fontSize: 72,
    lineHeight: 67,
    fontWeight: "900",
    letterSpacing: -4,
    marginBottom: 12,
  },

  subtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 9,
  },

  description: {
    color: "rgba(255,255,255,0.58)",
    fontSize: 12,
    lineHeight: 18,
    maxWidth: 300,
    marginBottom: 22,
  },

  glassButton: {
    height: 58,
    width: "100%",
    borderRadius: 29,
    backgroundColor: "rgba(255,255,255,0.13)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.28)",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  buttonContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 7,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
  },

  arrowCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.92)",
    justifyContent: "center",
    alignItems: "center",
  },

  arrow: {
    color: "#111111",
    fontSize: 20,
    fontWeight: "600",
    marginTop: -2,
  },

  infoCard: {
    minHeight: 78,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.09)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 17,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  cardLabel: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  cardValue: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  cardDivider: {
    width: 1,
    height: 32,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginHorizontal: 18,
  },

  bunnySymbol: {
    marginLeft: "auto",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.08)",
    justifyContent: "center",
    alignItems: "center",
  },

  bunnyText: {
    fontSize: 19,
  },
});