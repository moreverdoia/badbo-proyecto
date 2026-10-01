import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
  StatusBar,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { lasQueNoIbanASalir } from "../../data/data";

function StatItem({ label, value }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value || "—"}</Text>
    </View>
  );
}

export default function LasQueNoIbanASalirScreen({ navigation }) {
  const album = lasQueNoIbanASalir;

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

  const mostrarCuriosidades = album.curiosities.some(
    (curiosity) => curiosity !== ""
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HERO */}
        <ImageBackground
          source={album.image}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <LinearGradient
            colors={[
              "rgba(8, 8, 8, 0.05)",
              "rgba(8, 8, 8, 0.62)",
              "#080808",
            ]}
            style={styles.heroGradient}
          >
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backText}>‹</Text>
            </Pressable>

            <View style={styles.heroContent}>
              <Text style={styles.albumTitle}>LAS QUE</Text>
              <Text style={styles.albumTitle}>NO IBAN</Text>
              <Text style={styles.albumTitle}>A SALIR</Text>

              <View style={styles.divider} />

              <Text style={styles.albumArtist}>
                {album.artist}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* STATS */}
        <View style={styles.statsSection}>
          <StatItem
            label="LANZAMIENTO"
            value={album.releaseDate}
          />

          <StatItem
            label="CANCIONES"
            value={album.totalSongs}
          />

          <StatItem
            label="DURACIÓN"
            value={album.duration}
          />

          <StatItem
            label="REPRODUCCIONES"
            value={album.reproductions}
          />
        </View>

        {/* MÁS ESCUCHADA */}
        {album.mostListened !== "" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              MÁS ESCUCHADA
            </Text>

            <View style={styles.featuredCard}>
              <View style={styles.featuredIcon}>
                <Text style={styles.featuredIconText}>▶</Text>
              </View>

              <View style={styles.featuredInfo}>
                <Text style={styles.featuredTitle}>
                  {album.mostListened}
                </Text>

                <Text style={styles.featuredSubtitle}>
                  Canción más reproducida
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* TRACKLIST */}
        <View style={styles.section}>
          <View style={styles.tracklistHeader}>
            <Text style={styles.sectionTitle}>
              LAS CANCIONES
            </Text>

            <Text style={styles.trackCount}>
              {album.songs.length} TRACKS
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

                <View style={styles.songLine} />

                <View style={styles.songInfo}>
                  <Text style={styles.songTitle}>
                    {song.title || " "}
                  </Text>

                  <Text style={styles.songMeta}>
                    {song.duration || " "}
                  </Text>
                </View>

                <View style={styles.songRight}>
                  <Text style={styles.songReproductions}>
                    {song.reproductions || " "}
                  </Text>

                  <Text style={styles.arrow}>›</Text>
                </View>
              </Pressable>
            )}
            scrollEnabled={false}
          />
        </View>

        {/* VER ERA */}
        <View style={styles.section}>
          <Pressable
            style={styles.eraButton}
            onPress={abrirEra}
          >
            <View style={styles.eraButtonInfo}>
              <Text style={styles.eraEyebrow}>
                EXPLORÁ ESTA ETAPA
              </Text>

              <Text style={styles.eraButtonTitle}>
                VER ERA
              </Text>

              <Text style={styles.eraButtonSubtitle}>
                LAS QUE NO IBAN A SALIR
              </Text>

              <Text style={styles.eraButtonDescription}>
                Fotos, momentos y estética de esta era.
              </Text>
            </View>

            <View style={styles.eraArrowContainer}>
              <Text style={styles.eraArrow}>›</Text>
            </View>
          </Pressable>
        </View>

        {/* CURIOSIDADES */}
        {mostrarCuriosidades && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              CURIOSIDADES
            </Text>

            <View style={styles.glassCard}>
              <FlatList
                data={album.curiosities}
                keyExtractor={(item, index) => `${index}-${item}`}
                renderItem={({ item: curiosity, index }) =>
                  curiosity !== "" ? (
                    <View style={styles.curiosity}>
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
          </View>
        )}

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            LAS QUE NO IBAN A SALIR
          </Text>

          <Text style={styles.footerText}>
            BAD BUNNY · {album.year}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  /* HERO */
  hero: {
    height: 550,
    justifyContent: "flex-end",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroGradient: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 55,
    paddingHorizontal: 22,
    paddingBottom: 35,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.10)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.20)",
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "200",
    lineHeight: 34,
    marginTop: -4,
  },

  heroContent: {
    alignItems: "flex-start",
  },

  albumTitle: {
    color: "#f4f4f4",
    fontSize: 46,
    lineHeight: 45,
    fontWeight: "900",
    letterSpacing: -1.5,
  },

  divider: {
    width: 48,
    height: 2,
    backgroundColor: "#e4c94f",
    marginTop: 17,
    marginBottom: 10,
  },

  albumArtist: {
    color: "#9c9c9c",
    fontSize: 15,
  },

  /* GENERAL */
  section: {
    paddingHorizontal: 18,
    marginTop: 24,
  },

  glassCard: {
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.055)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    borderRadius: 22,
    padding: 20,
    overflow: "hidden",
  },

  /* STATS */
  statsSection: {
    marginTop: 22,
    marginHorizontal: 18,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.035)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.075)",
  },

  statItem: {
    minHeight: 72,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.065)",
  },

  statLabel: {
    color: "#707070",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.3,
    marginBottom: 5,
  },

  statValue: {
    color: "#eeeeee",
    fontSize: 16,
    fontWeight: "600",
  },

  /* TITLES */
  sectionTitle: {
    color: "#eeeeee",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: -0.2,
    marginBottom: 13,
  },

  trackCount: {
    color: "#5e5e5e",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  /* FEATURED */
  featuredCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 19,
    backgroundColor: "rgba(228,201,79,0.08)",
    borderWidth: 1,
    borderColor: "rgba(228,201,79,0.20)",
  },

  featuredIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#e4c94f",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  featuredIconText: {
    color: "#fff",
    fontSize: 13,
  },

  featuredInfo: {
    flex: 1,
  },

  featuredTitle: {
    color: "#eeeeee",
    fontSize: 15,
    fontWeight: "700",
  },

  featuredSubtitle: {
    color: "#6f6f6f",
    fontSize: 11,
    marginTop: 4,
  },

  /* TRACKLIST */
  tracklistHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  tracklist: {
    borderRadius: 21,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.035)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.075)",
  },

  songRow: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },

  songNumber: {
    width: 27,
    color: "#646464",
    fontSize: 11,
    fontWeight: "800",
  },

  songLine: {
    width: 2,
    height: 25,
    backgroundColor: "#e4c94f",
    opacity: 0.65,
    marginRight: 12,
  },

  songInfo: {
    flex: 1,
  },

  songTitle: {
    color: "#eeeeee",
    fontSize: 14,
    fontWeight: "600",
    minHeight: 18,
  },

  songMeta: {
    color: "#606060",
    fontSize: 10,
    marginTop: 4,
    minHeight: 13,
  },

  songRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  songReproductions: {
    color: "#5e5e5e",
    fontSize: 9,
  },

  arrow: {
    color: "#888888",
    fontSize: 24,
    fontWeight: "300",
  },

  /* VER ERA */
  eraButton: {
    minHeight: 120,
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(228,201,79,0.07)",
    borderWidth: 1,
    borderColor: "rgba(228,201,79,0.22)",
  },

  eraButtonInfo: {
    flex: 1,
    paddingRight: 12,
  },

  eraEyebrow: {
    color: "#e4c94f",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  eraButtonTitle: {
    color: "#eeeeee",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  eraButtonSubtitle: {
    color: "#bdbdbd",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
  },

  eraButtonDescription: {
    color: "#6f6f6f",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 6,
  },

  eraArrowContainer: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: "rgba(228,201,79,0.12)",
    alignItems: "center",
    justifyContent: "center",
  },

  eraArrow: {
    color: "#e4c94f",
    fontSize: 30,
    fontWeight: "300",
    marginTop: -3,
  },

  /* CURIOSITIES */
  curiosity: {
    flexDirection: "row",
    marginBottom: 18,
  },

  curiosityNumber: {
    color: "#e4c94f",
    fontSize: 11,
    fontWeight: "900",
    width: 35,
  },

  curiosityText: {
    flex: 1,
    color: "#c1c1c1",
    fontSize: 14,
    lineHeight: 21,
  },

  /* FOOTER */
  footer: {
    alignItems: "center",
    marginTop: 55,
  },

  footerTitle: {
    color: "#505050",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  footerText: {
    color: "#303030",
    fontSize: 9,
    marginTop: 7,
    letterSpacing: 1,
  },
});