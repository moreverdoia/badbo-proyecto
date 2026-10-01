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
import { nadieSabe } from "../../data/data";

const album = nadieSabe;

export default function NadieSabeScreen({ navigation }) {
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
                "rgba(7,9,13,0.15)",
                "rgba(7,9,13,0.55)",
                "#080a0f",
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
                  <Text style={styles.smallTitle}>BAD BUNNY</Text>
                  <Text style={styles.title}>NADIE SABE</Text>
                  <Text style={styles.title}>LO QUE VA A</Text>
                  <Text style={styles.title}>PASAR MAÑANA</Text>

                  <View style={styles.colorLine}>
                    <View style={styles.beigeLine} />
                    <View style={styles.blueLine} />
                    <View style={styles.blackLine} />
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
            <Text style={styles.sectionTitle}>SOBRE EL ÁLBUM</Text>
          </View>

          <View style={styles.aboutCard}>
            <View style={styles.blueAccent} />

            <Text style={styles.aboutText}>
              {album.description || " "}
            </Text>

            <View style={styles.statsGrid}>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>LANZAMIENTO</Text>
                <Text style={styles.statValue}>
                  {album.releaseDate || " "}
                </Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statLabel}>CANCIONES</Text>
                <Text style={styles.statValue}>
                  {album.totalSongs || " "}
                </Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statLabel}>DURACIÓN</Text>
                <Text style={styles.statValue}>
                  {album.duration || " "}
                </Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statLabel}>REPRODUCCIONES</Text>
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
                <Text style={styles.featuredIconText}>▶</Text>
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
              <Text style={styles.sectionTitle}>TRACKLIST</Text>
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
                NADIE SABE LO QUE VA A PASAR MAÑANA
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
              <Text style={styles.sectionTitle}>CURIOSIDADES</Text>
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
          <View style={styles.footerSymbol}>
            <Text style={styles.footerQuestion}>?</Text>
          </View>

          <Text style={styles.footerTitle}>
            NADIE SABE LO QUE VA A PASAR MAÑANA
          </Text>

          <View style={styles.footerLines}>
            <View style={styles.footerBeige} />
            <View style={styles.footerBlue} />
            <View style={styles.footerBlack} />
          </View>

          <Text style={styles.footerText}>
            BAD BUNNY · 2023
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0d11",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  /* HERO */
  hero: {
    height: 560,
    overflow: "hidden",
    backgroundColor: "#080a0f",
  },

  heroImage: {
    flex: 1,
  },

  heroImageStyle: {
    opacity: 0.82,
  },

  heroGradient: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 55,
  },

  backButton: {
    marginLeft: 24,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(10,12,17,0.72)",
    borderWidth: 1,
    borderColor: "rgba(214,204,177,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "#e8e0cf",
    fontSize: 34,
    fontWeight: "300",
    lineHeight: 34,
    marginTop: -4,
  },

  heroContent: {
    paddingHorizontal: 24,
    paddingBottom: 38,
  },

  smallTitle: {
    color: "#6d94c9",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 3,
    marginBottom: 9,
  },

  title: {
    color: "#f0e9d9",
    fontSize: 43,
    lineHeight: 42,
    fontWeight: "900",
    letterSpacing: -1.5,
  },

  colorLine: {
    flexDirection: "row",
    width: 155,
    height: 5,
    marginTop: 17,
    borderRadius: 10,
    overflow: "hidden",
  },

  beigeLine: {
    flex: 1,
    backgroundColor: "#d6ccb5",
  },

  blueLine: {
    flex: 1,
    backgroundColor: "#4b83d8",
  },

  blackLine: {
    flex: 1,
    backgroundColor: "#181b22",
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
    color: "#5d8dd0",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
  },

  sectionTitle: {
    color: "#eee8db",
    fontSize: 17,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  /* ABOUT */
  aboutCard: {
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.055)",
    borderWidth: 1,
    borderColor: "rgba(214,204,181,0.13)",
    borderRadius: 24,
    padding: 20,
    overflow: "hidden",
  },

  blueAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: "#4b83d8",
  },

  aboutText: {
    color: "#a9a397",
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
    borderTopColor: "rgba(214,204,181,0.10)",
    paddingTop: 17,
  },

  stat: {
    width: "50%",
    marginBottom: 16,
  },

  statLabel: {
    color: "#77766f",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 5,
  },

  statValue: {
    color: "#e5dece",
    fontSize: 14,
    fontWeight: "800",
    minHeight: 18,
  },

  /* FEATURED */
  featuredCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(75,131,216,0.09)",
    borderWidth: 1,
    borderColor: "rgba(75,131,216,0.22)",
    borderRadius: 22,
    padding: 15,
  },

  featuredIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4b83d8",
  },

  featuredIconText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 2,
  },

  featuredInfo: {
    flex: 1,
    marginLeft: 13,
  },

  featuredLabel: {
    color: "#6d94c9",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 4,
  },

  featuredTitle: {
    color: "#e9e2d3",
    fontSize: 15,
    fontWeight: "900",
  },

  featuredArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#d6ccb5",
    alignItems: "center",
    justifyContent: "center",
  },

  arrowText: {
    color: "#101218",
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
    backgroundColor: "#d6ccb5",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 15,
  },

  trackCountText: {
    color: "#101218",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  tracklist: {
    backgroundColor: "rgba(255,255,255,0.045)",
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(214,204,181,0.10)",
    overflow: "hidden",
  },

  songRow: {
    minHeight: 67,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(214,204,181,0.07)",
  },

  lastSongRow: {
    borderBottomWidth: 0,
  },

  songNumberBox: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: "rgba(75,131,216,0.11)",
    borderWidth: 1,
    borderColor: "rgba(75,131,216,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },

  songNumber: {
    color: "#6d94c9",
    fontSize: 10,
    fontWeight: "900",
  },

  songInfo: {
    flex: 1,
    marginLeft: 12,
  },

  songTitle: {
    color: "#e8e1d3",
    fontSize: 14,
    fontWeight: "800",
    minHeight: 18,
  },

  songMeta: {
    color: "#777872",
    fontSize: 10,
    marginTop: 4,
    minHeight: 13,
  },

  songReproductions: {
    color: "#777872",
    fontSize: 9,
    marginRight: 9,
    minWidth: 25,
    textAlign: "right",
  },

  songArrow: {
    color: "#d6ccb5",
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
    backgroundColor: "rgba(75,131,216,0.08)",
    borderWidth: 1,
    borderColor: "rgba(75,131,216,0.25)",
  },

  eraButtonInfo: {
    flex: 1,
    paddingRight: 12,
  },

  eraEyebrow: {
    color: "#6d94c9",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  eraButtonTitle: {
    color: "#eee8db",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  eraButtonSubtitle: {
    color: "#d6ccb5",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
  },

  eraButtonDescription: {
    color: "#777872",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 6,
  },

  eraArrowContainer: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: "rgba(75,131,216,0.14)",
    borderWidth: 1,
    borderColor: "rgba(75,131,216,0.20)",
    alignItems: "center",
    justifyContent: "center",
  },

  eraArrow: {
    color: "#6d94c9",
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
    backgroundColor: "rgba(255,255,255,0.045)",
    borderWidth: 1,
    borderColor: "rgba(214,204,181,0.10)",
    borderRadius: 18,
    padding: 15,
  },

  curiosityNumber: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: "rgba(75,131,216,0.12)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  curiosityNumberText: {
    color: "#6d94c9",
    fontSize: 10,
    fontWeight: "900",
  },

  curiosityText: {
    flex: 1,
    color: "#aaa69d",
    fontSize: 13,
    lineHeight: 19,
  },

  /* FOOTER */
  footer: {
    alignItems: "center",
    marginTop: 50,
    paddingTop: 30,
    borderTopWidth: 1,
    borderTopColor: "rgba(214,204,181,0.10)",
    marginHorizontal: 20,
  },

  footerSymbol: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#d6ccb5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  footerQuestion: {
    color: "#111319",
    fontSize: 25,
    fontWeight: "900",
  },

  footerTitle: {
    color: "#e8e1d3",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.8,
    textAlign: "center",
  },

  footerLines: {
    flexDirection: "row",
    height: 4,
    width: 120,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 12,
  },

  footerBeige: {
    flex: 1,
    backgroundColor: "#d6ccb5",
  },

  footerBlue: {
    flex: 1,
    backgroundColor: "#4b83d8",
  },

  footerBlack: {
    flex: 1,
    backgroundColor: "#181b22",
  },

  footerText: {
    color: "#6f706c",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginTop: 12,
  },
});