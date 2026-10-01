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

import { debiTirarMasFotos as album } from "../../data/data";

export default function DebiTirarMasFotosScreen({ navigation }) {
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
        {/* HERO */}

        <View style={styles.hero}>
          <ImageBackground
            source={album.image}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <LinearGradient
              colors={[
                "rgba(20,31,22,0.05)",
                "rgba(20,31,22,0.55)",
                "#162017",
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
                <View>
                  <Text style={styles.smallTitle}>
                    BAD BUNNY
                  </Text>

                  <Text style={styles.title}>
                    DeBÍ TiRAR
                  </Text>

                  <Text style={styles.title}>
                    MáS FOToS
                  </Text>

                  <View style={styles.colorLine}>
                    <View style={styles.mossLine} />
                    <View style={styles.oliveLine} />
                    <View style={styles.brownLine} />
                    <View style={styles.sageLine} />
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* SOBRE EL ÁLBUM */}

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.eyebrow}>01</Text>

            <Text style={styles.sectionTitle}>
              SOBRE EL ÁLBUM
            </Text>
          </View>

          <View style={styles.aboutCard}>
            <View style={styles.greenAccent} />

            <Text style={styles.aboutText}>
              {album.description || " "}
            </Text>

            <View style={styles.statsGrid}>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>
                  LANZAMIENTO
                </Text>

                <Text style={styles.statValue}>
                  {album.releaseDate || " "}
                </Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statLabel}>
                  CANCIONES
                </Text>

                <Text style={styles.statValue}>
                  {album.totalSongs || " "}
                </Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statLabel}>
                  DURACIÓN
                </Text>

                <Text style={styles.statValue}>
                  {album.duration || " "}
                </Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statLabel}>
                  REPRODUCCIONES
                </Text>

                <Text style={styles.statValue}>
                  {album.reproductions || " "}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* MÁS ESCUCHADA */}

        {album.mostListened && (
          <View style={styles.section}>
            <View style={styles.featuredCard}>
              <View style={styles.featuredIcon}>
                <Text style={styles.featuredIconText}>
                  ▶
                </Text>
              </View>

              <View style={styles.featuredInfo}>
                <Text style={styles.featuredLabel}>
                  MÁS ESCUCHADA
                </Text>

                <Text style={styles.featuredTitle}>
                  {album.mostListened}
                </Text>
              </View>

              <View style={styles.featuredArrow}>
                <Text style={styles.arrowText}>↗</Text>
              </View>
            </View>
          </View>
        )}

        {/* TRACKLIST */}

        <View style={styles.section}>
          <View style={styles.tracklistHeader}>
            <View>
              <Text style={styles.eyebrow}>02</Text>

              <Text style={styles.sectionTitle}>
                TRACKLIST
              </Text>
            </View>

            <View style={styles.trackCountBadge}>
              <Text style={styles.trackCountText}>
                {album.songs.length} TRACKS
              </Text>
            </View>
          </View>

          <FlatList
            data={album.songs}
            keyExtractor={(item) => String(item.number)}
            renderItem={({ item: song, index }) => (
              <Pressable
                style={[
                  styles.songRow,
                  index === album.songs.length - 1 &&
                    styles.lastSongRow,
                ]}
                onPress={() => abrirCancion(song)}
              >
                <View style={styles.songNumberBox}>
                  <Text style={styles.songNumber}>
                    {song.number}
                  </Text>
                </View>

                <View style={styles.songInfo}>
                  <Text style={styles.songTitle}>
                    {song.title || " "}
                  </Text>

                  <Text style={styles.songMeta}>
                    {song.duration || " "}
                  </Text>
                </View>

                <Text style={styles.songReproductions}>
                  {song.reproductions || " "}
                </Text>

                <Text style={styles.songArrow}>›</Text>
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
                DEBÍ TiRAR MáS FOToS
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

        {album.curiosities.some((item) => item) && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.eyebrow}>03</Text>

              <Text style={styles.sectionTitle}>
                CURIOSIDADES
              </Text>
            </View>

            <FlatList
              data={album.curiosities}
              keyExtractor={(item, index) => `${index}-${item}`}
              renderItem={({ item: curiosity, index }) =>
                curiosity ? (
                  <View style={styles.curiosityCard}>
                    <View style={styles.curiosityNumber}>
                      <Text style={styles.curiosityNumberText}>
                        0{index + 1}
                      </Text>
                    </View>

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

        {/* FOOTER */}

        <View style={styles.footer}>
          <View style={styles.footerCamera}>
            <View style={styles.cameraLens}>
              <View style={styles.cameraLensInner} />
            </View>
          </View>

          <Text style={styles.footerTitle}>
            DeBÍ TiRAR MáS FOToS
          </Text>

          <View style={styles.footerLines}>
            <View style={styles.footerMoss} />
            <View style={styles.footerOlive} />
            <View style={styles.footerBrown} />
            <View style={styles.footerSage} />
          </View>

          <Text style={styles.footerText}>
            BAD BUNNY · 2025
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172018",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  /* HERO */

  hero: {
    height: 560,
    overflow: "hidden",
    backgroundColor: "#172018",
  },

  heroImage: {
    flex: 1,
  },

  heroImageStyle: {
    opacity: 0.82,
  },

  heroGradient: {
    flex: 1,
    justifyContent: "flex-end",
  },

  backButton: {
    position: "absolute",
    top: 55,
    left: 24,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(25,37,27,0.72)",
    borderWidth: 1,
    borderColor: "rgba(208,194,157,0.28)",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "#e7ddc8",
    fontSize: 34,
    fontWeight: "300",
    lineHeight: 34,
    marginTop: -4,
  },

  heroContent: {
    paddingHorizontal: 24,
    paddingBottom: 38,
  },

  topRow: {
    position: "absolute",
    top: 55,
    left: 24,
    right: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  photoBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(25,37,27,0.82)",
    borderWidth: 1,
    borderColor: "rgba(208,194,157,0.25)",
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },

  photoDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#9b9d67",
    marginRight: 7,
  },

  photoBadgeText: {
    color: "#d4c9ad",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.1,
  },

  year: {
    color: "#d4c9ad",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 2,
  },

  smallTitle: {
    color: "#9b9d67",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 3,
    marginBottom: 9,
  },

  title: {
    color: "#e7ddc8",
    fontSize: 46,
    lineHeight: 45,
    fontWeight: "900",
    letterSpacing: -1.5,
  },

  subtitle: {
    marginTop: 15,
    color: "#b9b29e",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.7,
  },

  colorLine: {
    flexDirection: "row",
    width: 165,
    height: 5,
    marginTop: 17,
    borderRadius: 10,
    overflow: "hidden",
  },

  mossLine: {
    flex: 1,
    backgroundColor: "#53634b",
  },

  oliveLine: {
    flex: 1,
    backgroundColor: "#85895b",
  },

  brownLine: {
    flex: 1,
    backgroundColor: "#8b6748",
  },

  sageLine: {
    flex: 1,
    backgroundColor: "#a5aa87",
  },

  /* SECTIONS */

  section: {
    paddingHorizontal: 20,
    marginTop: 28,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 13,
  },

  eyebrow: {
    color: "#9b9d67",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
  },

  sectionTitle: {
    color: "#e4dbc7",
    fontSize: 17,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  /* ABOUT */

  aboutCard: {
    position: "relative",
    backgroundColor: "rgba(236,226,204,0.055)",
    borderWidth: 1,
    borderColor: "rgba(208,194,157,0.13)",
    borderRadius: 24,
    padding: 20,
    overflow: "hidden",
  },

  greenAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: "#53634b",
  },

  aboutText: {
    color: "#aaa593",
    fontSize: 14,
    lineHeight: 22,
    minHeight: 30,
    marginLeft: 5,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(208,194,157,0.10)",
    paddingTop: 17,
  },

  stat: {
    width: "50%",
    marginBottom: 16,
  },

  statLabel: {
    color: "#77796d",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 5,
  },

  statValue: {
    color: "#d9cfba",
    fontSize: 14,
    fontWeight: "800",
    minHeight: 18,
  },

  /* FEATURED */

  featuredCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(133,137,91,0.10)",
    borderWidth: 1,
    borderColor: "rgba(133,137,91,0.22)",
    borderRadius: 22,
    padding: 15,
  },

  featuredIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#53634b",
  },

  featuredIconText: {
    color: "#f1e9d7",
    fontSize: 16,
    marginLeft: 2,
  },

  featuredInfo: {
    flex: 1,
    marginLeft: 13,
  },

  featuredLabel: {
    color: "#a5aa87",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 4,
  },

  featuredTitle: {
    color: "#e5dcc8",
    fontSize: 15,
    fontWeight: "900",
  },

  featuredArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#d4c5a7",
    alignItems: "center",
    justifyContent: "center",
  },

  arrowText: {
    color: "#1b241b",
    fontSize: 16,
    fontWeight: "900",
  },

  /* TRACKLIST */

  tracklistHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 14,
  },

  trackCountBadge: {
    backgroundColor: "#53634b",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 15,
  },

  trackCountText: {
    color: "#e9e0cc",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  tracklist: {
    backgroundColor: "rgba(236,226,204,0.045)",
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(208,194,157,0.10)",
    overflow: "hidden",
  },

  songRow: {
    minHeight: 67,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(208,194,157,0.07)",
  },

  lastSongRow: {
    borderBottomWidth: 0,
  },

  songNumberBox: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: "rgba(155,157,103,0.12)",
    borderWidth: 1,
    borderColor: "rgba(155,157,103,0.17)",
    alignItems: "center",
    justifyContent: "center",
  },

  songNumber: {
    color: "#a5aa87",
    fontSize: 10,
    fontWeight: "900",
  },

  songInfo: {
    flex: 1,
    marginLeft: 12,
  },

  songTitle: {
    color: "#e4dbc7",
    fontSize: 14,
    fontWeight: "800",
    minHeight: 18,
  },

  songMeta: {
    color: "#77796f",
    fontSize: 10,
    marginTop: 4,
    minHeight: 13,
  },

  songReproductions: {
    color: "#77796f",
    fontSize: 9,
    marginRight: 9,
    minWidth: 25,
    textAlign: "right",
  },

  songArrow: {
    color: "#d4c5a7",
    fontSize: 23,
    fontWeight: "300",
  },

  /* VER ERA */

  eraButton: {
    minHeight: 120,
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(133,137,91,0.10)",
    borderWidth: 1,
    borderColor: "rgba(155,157,103,0.25)",
  },

  eraButtonInfo: {
    flex: 1,
    paddingRight: 12,
  },

  eraEyebrow: {
    color: "#a5aa87",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  eraButtonTitle: {
    color: "#e4dbc7",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  eraButtonSubtitle: {
    color: "#b9b29e",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
  },

  eraButtonDescription: {
    color: "#77796d",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 6,
  },

  eraArrowContainer: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: "rgba(155,157,103,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },

  eraArrow: {
    color: "#a5aa87",
    fontSize: 30,
    fontWeight: "300",
    marginTop: -3,
  },

  /* CURIOSITIES */

  curiosities: {
    gap: 10,
  },

  curiosityCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(236,226,204,0.045)",
    borderWidth: 1,
    borderColor: "rgba(208,194,157,0.10)",
    borderRadius: 18,
    padding: 15,
  },

  curiosityNumber: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: "rgba(83,99,75,0.20)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  curiosityNumberText: {
    color: "#a5aa87",
    fontSize: 10,
    fontWeight: "900",
  },

  curiosityText: {
    flex: 1,
    color: "#aaa593",
    fontSize: 13,
    lineHeight: 19,
  },

  /* FOOTER */

  footer: {
    alignItems: "center",
    marginTop: 50,
    paddingTop: 30,
    borderTopWidth: 1,
    borderTopColor: "rgba(208,194,157,0.10)",
    marginHorizontal: 20,
  },

  footerCamera: {
    width: 50,
    height: 36,
    borderRadius: 9,
    backgroundColor: "#53634b",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  cameraLens: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#d4c5a7",
    alignItems: "center",
    justifyContent: "center",
  },

  cameraLensInner: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#6f7653",
  },

  footerTitle: {
    color: "#e4dbc7",
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 1,
  },

  footerLines: {
    flexDirection: "row",
    height: 4,
    width: 135,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 12,
  },

  footerMoss: {
    flex: 1,
    backgroundColor: "#53634b",
  },

  footerOlive: {
    flex: 1,
    backgroundColor: "#85895b",
  },

  footerBrown: {
    flex: 1,
    backgroundColor: "#8b6748",
  },

  footerSage: {
    flex: 1,
    backgroundColor: "#a5aa87",
  },

  footerText: {
    color: "#77796d",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginTop: 12,
  },
});