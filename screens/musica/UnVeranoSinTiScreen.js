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
import { unVeranoSinTi } from "../../data/data";

const album = unVeranoSinTi;

export default function UnVeranoSinTiScreen({ navigation }) {
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
      <StatusBar barStyle="dark-content" />

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
                "rgba(255,255,255,0.05)",
                "rgba(255,196,91,0.35)",
                "#fff8e8",
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
                  <Text style={styles.title}>UN VERANO</Text>
                  <Text style={styles.title}>SIN TI</Text>

                  <View style={styles.colorLine}>
                    <View style={styles.yellowLine} />
                    <View style={styles.orangeLine} />
                    <View style={styles.greenLine} />
                    <View style={styles.redLine} />
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
            <View style={styles.greenAccent} />

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
                <Text style={styles.featuredLabel}>MÁS ESCUCHADA</Text>

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
            renderItem={({ item: song }) => (
              <Pressable
                style={styles.songRow}
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
            style={styles.eraCard}
            onPress={abrirEra}
          >
            <View style={styles.eraAccent} />

            <View style={styles.eraContent}>
              <Text style={styles.eraEyebrow}>
                EXPLORÁ ESTA ETAPA
              </Text>

              <Text style={styles.eraTitle}>VER ERA</Text>

              <Text style={styles.eraSubtitle}>
                UN VERANO SIN TI
              </Text>

              <Text style={styles.eraDescription}>
                Fotos, momentos y estética de esta era.
              </Text>
            </View>

            <View style={styles.eraArrow}>
              <Text style={styles.eraArrowText}>›</Text>
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
          <View style={styles.footerSun}>
            <Text style={styles.footerSunText}>☀</Text>
          </View>

          <Text style={styles.footerTitle}>UN VERANO SIN TI</Text>

          <View style={styles.footerLines}>
            <View style={styles.footerYellow} />
            <View style={styles.footerOrange} />
            <View style={styles.footerGreen} />
            <View style={styles.footerRed} />
          </View>

          <Text style={styles.footerText}>
            BAD BUNNY · 2022
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8e8",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  /* HERO */
  hero: {
    height: 520,
    overflow: "hidden",
    backgroundColor: "#fff8e8",
  },

  heroImage: {
    flex: 1,
  },

  heroImageStyle: {
    opacity: 0.88,
  },

  heroGradient: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 55,
  },

  backButton: {
    position: "absolute",
    top: 55,
    left: 24,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.82)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.95)",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "#274333",
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

  sunBadge: {
    backgroundColor: "rgba(255,255,255,0.88)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },

  sunBadgeText: {
    color: "#dc7b35",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  year: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 2,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },

  smallTitle: {
    color: "#2e563d",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 3,
    marginBottom: 8,
  },

  title: {
    color: "#fff",
    fontSize: 48,
    lineHeight: 47,
    fontWeight: "900",
    letterSpacing: -1.5,
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },

  subtitle: {
    marginTop: 15,
    color: "#fff",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },

  colorLine: {
    flexDirection: "row",
    width: 155,
    height: 5,
    marginTop: 16,
    borderRadius: 10,
    overflow: "hidden",
  },

  yellowLine: {
    flex: 1,
    backgroundColor: "#f4d96b",
  },

  orangeLine: {
    flex: 1,
    backgroundColor: "#f39a62",
  },

  greenLine: {
    flex: 1,
    backgroundColor: "#57956a",
  },

  redLine: {
    flex: 1,
    backgroundColor: "#d94b42",
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
    color: "#d94b42",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
  },

  sectionTitle: {
    color: "#274333",
    fontSize: 17,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  /* ABOUT */
  aboutCard: {
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.72)",
    borderWidth: 1,
    borderColor: "rgba(46,86,61,0.12)",
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
    backgroundColor: "#57956a",
  },

  aboutText: {
    color: "#607065",
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
    borderTopColor: "rgba(46,86,61,0.10)",
    paddingTop: 17,
  },

  stat: {
    width: "50%",
    marginBottom: 16,
  },

  statLabel: {
    color: "#8a938d",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 5,
  },

  statValue: {
    color: "#274333",
    fontSize: 14,
    fontWeight: "800",
    minHeight: 18,
  },

  /* FEATURED */
  featuredCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(244,217,107,0.20)",
    borderWidth: 1,
    borderColor: "rgba(244,217,107,0.45)",
    borderRadius: 22,
    padding: 15,
  },

  featuredIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d94b42",
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
    color: "#9b8a48",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 4,
  },

  featuredTitle: {
    color: "#274333",
    fontSize: 15,
    fontWeight: "900",
  },

  featuredArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  arrowText: {
    color: "#57956a",
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
    backgroundColor: "#57956a",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 15,
  },

  trackCountText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  tracklist: {
    backgroundColor: "rgba(255,255,255,0.70)",
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(46,86,61,0.10)",
    overflow: "hidden",
  },

  songRow: {
    minHeight: 67,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(46,86,61,0.07)",
  },

  songNumberBox: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: "rgba(244,217,107,0.28)",
    alignItems: "center",
    justifyContent: "center",
  },

  songNumber: {
    color: "#9b8a48",
    fontSize: 10,
    fontWeight: "900",
  },

  songInfo: {
    flex: 1,
    marginLeft: 12,
  },

  songTitle: {
    color: "#274333",
    fontSize: 14,
    fontWeight: "800",
    minHeight: 18,
  },

  songMeta: {
    color: "#8b948e",
    fontSize: 10,
    marginTop: 4,
    minHeight: 13,
  },

  songReproductions: {
    color: "#8b948e",
    fontSize: 9,
    marginRight: 9,
    minWidth: 25,
    textAlign: "right",
  },

  songArrow: {
    color: "#d94b42",
    fontSize: 23,
    fontWeight: "300",
  },

  /* VER ERA */
  eraCard: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 118,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 22,
    backgroundColor: "rgba(244,217,107,0.18)",
    borderWidth: 1,
    borderColor: "rgba(87,149,106,0.25)",
    overflow: "hidden",
  },

  eraAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: "#57956a",
  },

  eraContent: {
    flex: 1,
    paddingLeft: 3,
  },

  eraEyebrow: {
    color: "#d94b42",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  eraTitle: {
    color: "#274333",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: -0.5,
  },

  eraSubtitle: {
    color: "#57956a",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.7,
    marginTop: 3,
  },

  eraDescription: {
    color: "#7b857e",
    fontSize: 11,
    marginTop: 8,
  },

  eraArrow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(87,149,106,0.12)",
    borderWidth: 1,
    borderColor: "rgba(87,149,106,0.22)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },

  eraArrowText: {
    color: "#57956a",
    fontSize: 27,
    fontWeight: "300",
    marginTop: -2,
  },

  /* CURIOSITIES */
  curiosities: {
    gap: 10,
  },

  curiosityCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.72)",
    borderWidth: 1,
    borderColor: "rgba(46,86,61,0.10)",
    borderRadius: 18,
    padding: 15,
  },

  curiosityNumber: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: "rgba(217,75,66,0.10)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  curiosityNumberText: {
    color: "#d94b42",
    fontSize: 10,
    fontWeight: "900",
  },

  curiosityText: {
    flex: 1,
    color: "#536159",
    fontSize: 13,
    lineHeight: 19,
  },

  /* FOOTER */
  footer: {
    alignItems: "center",
    marginTop: 50,
    paddingTop: 30,
    borderTopWidth: 1,
    borderTopColor: "rgba(46,86,61,0.10)",
    marginHorizontal: 20,
  },

  footerSun: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f4d96b",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  footerSunText: {
    color: "#fff",
    fontSize: 23,
  },

  footerTitle: {
    color: "#274333",
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 1,
  },

  footerLines: {
    flexDirection: "row",
    height: 4,
    width: 120,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 12,
  },

  footerYellow: {
    flex: 1,
    backgroundColor: "#f4d96b",
  },

  footerOrange: {
    flex: 1,
    backgroundColor: "#f39a62",
  },

  footerGreen: {
    flex: 1,
    backgroundColor: "#57956a",
  },

  footerRed: {
    flex: 1,
    backgroundColor: "#d94b42",
  },

  footerText: {
    color: "#929a94",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginTop: 12,
  },
});