import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  StatusBar,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { x100pre } from "../../data/data";

const album = x100pre;

export default function X100PREScreen({ navigation }) {
  const abrirCancion = (song) => {
    navigation.navigate("SongDetail", {
      song,
      album,
    });
  };

  const abrirEra = () => {
    navigation.navigate("Galeria", {
      era: album.id,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ======================================
            HERO
        ====================================== */}
        <View style={styles.hero}>
          <Image
            source={album.image}
            style={styles.heroImage}
          />

          <LinearGradient
            colors={[
              "transparent",
              "rgba(0,0,0,0.3)",
              "#050505",
            ]}
            style={styles.heroGradient}
          />

          {/* VOLVER */}
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </Pressable>

          <View style={styles.heroContent}>
            <Text style={styles.heroYear}>
              {album.year}
            </Text>

            <Text style={styles.heroTitle}>
              {album.title}
            </Text>

            <Text style={styles.heroArtist}>
              {album.artist}
            </Text>
          </View>
        </View>

        {/* ======================================
            INFORMACIÓN DEL ÁLBUM
        ====================================== */}
        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>
            INFORMACIÓN
          </Text>

          <View style={styles.infoGrid}>
            <InfoItem
              label="LANZAMIENTO"
              value={album.releaseDate}
            />

            <InfoItem
              label="CANCIONES"
              value={album.totalSongs}
            />

            <InfoItem
              label="DURACIÓN"
              value={album.duration}
            />

            <InfoItem
              label="REPRODUCCIONES"
              value={album.reproductions}
            />
          </View>
        </View>

        {/* ======================================
            DESCRIPCIÓN
        ====================================== */}
        {album.description !== "" && (
          <View style={styles.descriptionCard}>
            <Text style={styles.sectionTitle}>
              SOBRE EL ÁLBUM
            </Text>

            <Text style={styles.description}>
              {album.description}
            </Text>
          </View>
        )}

        {/* ======================================
            CANCIÓN MÁS ESCUCHADA
        ====================================== */}
        {album.mostListened !== "" && (
          <View style={styles.mostListenedCard}>
            <Text style={styles.smallLabel}>
              MÁS ESCUCHADA
            </Text>

            <Text style={styles.mostListened}>
              {album.mostListened}
            </Text>
          </View>
        )}

        {/* ======================================
            TRACKLIST
        ====================================== */}
        <View style={styles.tracklistSection}>
          <View style={styles.tracklistHeader}>
            <Text style={styles.sectionTitle}>
              TRACKLIST
            </Text>

            <Text style={styles.trackCount}>
              {album.songs.length} CANCIONES
            </Text>
          </View>

          <FlatList
            data={album.songs}
            keyExtractor={(item) => String(item.number)}
            renderItem={({ item: song }) => (
              <Pressable
                style={styles.songRow}
                onPress={() => abrirCancion(song)}
              >
                <Text style={styles.songNumber}>
                  {song.number}
                </Text>

                <View style={styles.songInfo}>
                  <Text style={styles.songTitle}>
                    {song.title}
                  </Text>

                  {song.artists?.length > 1 && (
                    <Text style={styles.songArtists}>
                      {song.artists.join(" · ")}
                    </Text>
                  )}
                </View>

                <Text style={styles.songDuration}>
                  {song.duration}
                </Text>

                <Text style={styles.arrow}>
                  ›
                </Text>
              </Pressable>
            )}
            scrollEnabled={false}
          />
        </View>

        {/* ======================================
            BOTÓN DE LA ERA
        ====================================== */}
        <Pressable
          style={styles.eraButton}
          onPress={abrirEra}
        >
          <View>
            <Text style={styles.eraButtonSmall}>
              DESCUBRÍ LA ERA
            </Text>

            <Text style={styles.eraButtonTitle}>
              VER X100PRE
            </Text>
          </View>

          <Text style={styles.eraArrow}>
            →
          </Text>
        </Pressable>

        {/* ======================================
            CURIOSIDADES
        ====================================== */}
        {album.curiosities.some(
          (curiosity) => curiosity !== ""
        ) && (
          <View style={styles.curiositiesSection}>
            <Text style={styles.sectionTitle}>
              CURIOSIDADES
            </Text>

            <FlatList
              data={album.curiosities}
              keyExtractor={(item, index) => `${index}-${item}`}
              renderItem={({ item: curiosity, index }) =>
                curiosity !== "" ? (
                  <View style={styles.curiosityCard}>
                    <Text style={styles.curiosityNumber}>
                      0{index + 1}
                    </Text>

                    <Text style={styles.curiosityText}>
                      {curiosity}
                    </Text>
                  </View>
                ) : null
              }
              scrollEnabled={false}
            />
          </View>
        )}

        {/* ======================================
            FOOTER
        ====================================== */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            X100PRE
          </Text>

          <Text style={styles.footerText}>
            BAD BUNNY · 2018
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// ==================================================
// COMPONENTE PARA INFORMACIÓN
// ==================================================

function InfoItem({ label, value }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>
        {label}
      </Text>

      <Text style={styles.infoValue}>
        {value}
      </Text>
    </View>
  );
}

// ==================================================
// ESTILOS
// ==================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  // ─────────────────────────────
  // HERO
  // ─────────────────────────────

  hero: {
    height: 500,
    position: "relative",
  },

  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  heroGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "70%",
  },

  backButton: {
    position: "absolute",
    top: 55,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.45)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  backButtonText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "300",
    marginTop: -3,
  },

  heroContent: {
    position: "absolute",
    bottom: 35,
    left: 25,
    right: 25,
  },

  heroYear: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 5,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "900",
    letterSpacing: -1.5,
  },

  heroArtist: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 15,
    marginTop: 5,
  },

  // ─────────────────────────────
  // CARDS
  // ─────────────────────────────

  infoCard: {
    marginHorizontal: 18,
    marginTop: -5,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },

  descriptionCard: {
    marginHorizontal: 18,
    marginTop: 15,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  mostListenedCard: {
    marginHorizontal: 18,
    marginTop: 15,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },

  infoItem: {
    width: "50%",
    marginBottom: 20,
  },

  infoLabel: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 5,
  },

  infoValue: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },

  description: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 15,
  },

  smallLabel: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  mostListened: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 7,
  },

  // ─────────────────────────────
  // TRACKLIST
  // ─────────────────────────────

  tracklistSection: {
    marginTop: 30,
    paddingHorizontal: 18,
  },

  tracklistHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  trackCount: {
    color: "rgba(255,255,255,0.35)",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  songRow: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },

  songNumber: {
    width: 35,
    color: "rgba(255,255,255,0.3)",
    fontSize: 11,
    fontWeight: "700",
  },

  songInfo: {
    flex: 1,
    paddingRight: 10,
  },

  songTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },

  songArtists: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 10,
    marginTop: 4,
  },

  songDuration: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 11,
    marginRight: 12,
  },

  arrow: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 22,
  },

  // ─────────────────────────────
  // ERA
  // ─────────────────────────────

  eraButton: {
    marginHorizontal: 18,
    marginTop: 30,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  eraButtonSmall: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  eraButtonTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 4,
  },

  eraArrow: {
    color: "#fff",
    fontSize: 25,
  },

  // ─────────────────────────────
  // CURIOSIDADES
  // ─────────────────────────────

  curiositiesSection: {
    marginTop: 35,
    paddingHorizontal: 18,
  },

  curiosityCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 12,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },

  curiosityNumber: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 11,
    fontWeight: "900",
    marginRight: 15,
  },

  curiosityText: {
    flex: 1,
    color: "rgba(255,255,255,0.65)",
    fontSize: 13,
    lineHeight: 20,
  },

  // ─────────────────────────────
  // FOOTER
  // ─────────────────────────────

  footer: {
    alignItems: "center",
    marginTop: 55,
  },

  footerTitle: {
    color: "rgba(255,255,255,0.15)",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 3,
  },

  footerText: {
    color: "rgba(255,255,255,0.2)",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginTop: 5,
  },
});