import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { albums } from "../../data/data";

export default function AlbumsScreen({ navigation }) {
  // ==========================================
  // IR AL ÁLBUM
  // ==========================================

  const abrirAlbum = (album) => {
    navigation.navigate(album.screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ======================================
            HEADER
        ====================================== */}

        <View style={styles.header}>
          <Text style={styles.eyebrow}>
            BAD BUNNY
          </Text>

          <Text style={styles.title}>
            ÁLBUMES
          </Text>
        </View>

        {/* ======================================
            ÁLBUMES
        ====================================== */}

        <FlatList
          data={albums}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item: album }) => (
            <Pressable
              style={styles.cardWrapper}
              onPress={() => abrirAlbum(album)}
            >
              <View style={styles.albumCard}>
                {/* PORTADA */}
                <View style={styles.imageContainer}>
                  <Image
                    source={album.image}
                    style={styles.albumImage}
                    resizeMode="cover"
                  />

                  <LinearGradient
                    colors={[
                      "transparent",
                      "rgba(0,0,0,0.15)",
                      "rgba(0,0,0,0.8)",
                    ]}
                    locations={[0.45, 0.7, 1]}
                    style={styles.imageGradient}
                  />

                  {/* AÑO */}
                  <View style={styles.yearBadge}>
                    <Text style={styles.yearText}>
                      {album.year}
                    </Text>
                  </View>
                </View>

                {/* INFORMACIÓN */}
                <View style={styles.cardInfo}>
                  <Text
                    style={styles.albumTitle}
                    numberOfLines={2}
                  >
                    {album.title}
                  </Text>

                  <View style={styles.openRow}>
                    <Text style={styles.openText}>
                      VER ÁLBUM
                    </Text>

                    <View style={styles.arrowCircle}>
                      <Text style={styles.arrow}>
                        →
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
        />

        {/* ======================================
            FOOTER
        ====================================== */}

        <View style={styles.footer}>
          <Text style={styles.footerEyebrow}>
            BAD BUNNY
          </Text>

          <Text style={styles.footerText}>
            Ocho álbumes. Distintas etapas. Una misma
            evolución.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// ==================================================
// ESTILOS
// ==================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 50,
  },

  // ─────────────────────────────
  // HEADER
  // ─────────────────────────────

  header: {
    paddingHorizontal: 6,
    marginBottom: 28,
  },

  eyebrow: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2.5,
    marginBottom: 6,
  },

  title: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "900",
    letterSpacing: -2,
    lineHeight: 52,
  },

  // ─────────────────────────────
  // GRID
  // ─────────────────────────────

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  cardWrapper: {
    width: "48%",
    marginBottom: 16,
  },

  // ─────────────────────────────
  // GLASS CARD
  // ─────────────────────────────

  albumCard: {
    backgroundColor: "rgba(255,255,255,0.07)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    borderRadius: 22,
    overflow: "hidden",
  },

  // ─────────────────────────────
  // PORTADA
  // ─────────────────────────────

  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    position: "relative",
  },

  albumImage: {
    width: "100%",
    height: "100%",
  },

  imageGradient: {
    ...StyleSheet.absoluteFillObject,
  },

  yearBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  yearText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.8,
  },

  // ─────────────────────────────
  // INFORMACIÓN
  // ─────────────────────────────

  cardInfo: {
    padding: 13,
    paddingTop: 12,
  },

  albumTitle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "800",
    minHeight: 36,
  },

  openRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },

  openText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  arrowCircle: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },

  arrow: {
    color: "#fff",
    fontSize: 15,
    marginTop: -1,
  },

  // ─────────────────────────────
  // FOOTER
  // ─────────────────────────────

  footer: {
    marginTop: 35,
    paddingHorizontal: 8,
  },

  footerEyebrow: {
    color: "rgba(255,255,255,0.35)",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 8,
  },

  footerText: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 14,
    lineHeight: 21,
  },
});