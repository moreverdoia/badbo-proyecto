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

import { elUltimoTour } from "../../data/data";

function StatItem({ label, value }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value || "—"}</Text>
    </View>
  );
}

export default function ElUltimoTourScreen({ navigation }) {
  const album = elUltimoTour;

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
              "rgba(15, 8, 5, 0.05)",
              "rgba(15, 8, 5, 0.55)",
              "#0d0806",
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
              <Text style={styles.albumTitle}>EL ÚLTIMO</Text>
              <Text style={styles.albumTitle}>TOUR DEL</Text>
              <Text style={styles.albumTitle}>MUNDO</Text>

              <View style={styles.fireLine}>
                <View style={styles.fireLineMain} />
                <View style={styles.fireLineSmall} />
              </View>

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
            <Text style={styles.sectionTitle}>MÁS ESCUCHADA</Text>

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
            <Text style={styles.sectionTitle}>TRACKLIST</Text>

            <View style={styles.warningBadge}>
              <View style={styles.warningBadgeDot} />

              <Text style={styles.trackCount}>
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
            style={styles.eraCard}
            onPress={abrirEra}
          >
            <View style={styles.eraAccent} />

            <View style={styles.eraContent}>
              <Text style={styles.eraEyebrow}>
                EXPLORÁ ESTA ETAPA
              </Text>

              <Text style={styles.eraTitle}>
                VER ERA
              </Text>

              <Text style={styles.eraSubtitle}>
                EL ÚLTIMO TOUR DEL MUNDO
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
        {mostrarCuriosidades && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              DATOS DEL TOUR
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
          <View style={styles.footerLine} />

          <Text style={styles.footerTitle}>
            EL ÚLTIMO TOUR DEL MUNDO
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
    backgroundColor: "#0d0806",
  },

  scrollContent: {
    paddingBottom: 55,
  },

  /* HERO */
  hero: {
    height: 560,
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
    borderColor: "rgba(255,255,255,0.18)",
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

  warning: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "rgba(232, 93, 36, 0.45)",
    backgroundColor: "rgba(232, 93, 36, 0.10)",
    marginBottom: 15,
  },

  warningDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#f06a32",
    marginRight: 8,
  },

  warningText: {
    color: "#f0783d",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.7,
  },

  albumTitle: {
    color: "#f4eee9",
    fontSize: 43,
    lineHeight: 42,
    fontWeight: "900",
    letterSpacing: -1.5,
  },

  fireLine: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 10,
  },

  fireLineMain: {
    width: 58,
    height: 3,
    backgroundColor: "#e85d24",
  },

  fireLineSmall: {
    width: 18,
    height: 3,
    backgroundColor: "#8f1d14",
    marginLeft: 5,
  },

  albumArtist: {
    color: "#9e9189",
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
    borderColor: "rgba(255,255,255,0.09)",
    borderRadius: 22,
    padding: 20,
    overflow: "hidden",
  },

  orangeAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: "#e85d24",
  },

  eyebrow: {
    color: "#e85d24",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.7,
    marginBottom: 12,
  },

  description: {
    color: "#ccc1ba",
    fontSize: 15,
    lineHeight: 23,
    minHeight: 23,
  },

  /* STATS */
  statsSection: {
    marginTop: 22,
    marginHorizontal: 18,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.035)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },

  statItem: {
    minHeight: 72,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },

  statLabel: {
    color: "#6f625b",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.3,
    marginBottom: 5,
  },

  statValue: {
    color: "#eee8e3",
    fontSize: 16,
    fontWeight: "600",
  },

  /* TITLES */
  sectionTitle: {
    color: "#eee8e3",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: -0.2,
    marginBottom: 13,
  },

  /* FEATURED */
  featuredCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 19,
    backgroundColor: "rgba(232,93,36,0.08)",
    borderWidth: 1,
    borderColor: "rgba(232,93,36,0.22)",
  },

  featuredIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: "#9f2818",
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
    color: "#eee8e3",
    fontSize: 15,
    fontWeight: "700",
  },

  featuredSubtitle: {
    color: "#746860",
    fontSize: 11,
    marginTop: 4,
  },

  /* TRACKLIST */
  tracklistHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  warningBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "rgba(159,40,24,0.10)",
    borderWidth: 1,
    borderColor: "rgba(159,40,24,0.20)",
  },

  warningBadgeDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#d94b26",
    marginRight: 6,
  },

  trackCount: {
    color: "#c75b38",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  tracklist: {
    borderRadius: 21,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.035)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },

  songRow: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.055)",
  },

  songNumberBox: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: "rgba(159,40,24,0.10)",
    borderWidth: 1,
    borderColor: "rgba(159,40,24,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  songNumber: {
    color: "#b9573b",
    fontSize: 11,
    fontWeight: "800",
  },

  songInfo: {
    flex: 1,
  },

  songTitle: {
    color: "#eee8e3",
    fontSize: 14,
    fontWeight: "600",
    minHeight: 18,
  },

  songMeta: {
    color: "#665b55",
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
    color: "#625852",
    fontSize: 9,
  },

  arrow: {
    color: "#82756d",
    fontSize: 24,
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
    backgroundColor: "rgba(232,93,36,0.07)",
    borderWidth: 1,
    borderColor: "rgba(232,93,36,0.22)",
    overflow: "hidden",
  },

  eraAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: "#e85d24",
  },

  eraContent: {
    flex: 1,
    paddingLeft: 3,
  },

  eraEyebrow: {
    color: "#e85d24",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  eraTitle: {
    color: "#eee8e3",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: -0.5,
  },

  eraSubtitle: {
    color: "#b9573b",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.7,
    marginTop: 3,
  },

  eraDescription: {
    color: "#766a63",
    fontSize: 11,
    marginTop: 8,
  },

  eraArrow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(232,93,36,0.12)",
    borderWidth: 1,
    borderColor: "rgba(232,93,36,0.22)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },

  eraArrowText: {
    color: "#e85d24",
    fontSize: 27,
    fontWeight: "300",
    marginTop: -2,
  },

  /* CURIOSITIES */
  curiosity: {
    flexDirection: "row",
    marginBottom: 18,
  },

  curiosityNumber: {
    color: "#d0522d",
    fontSize: 11,
    fontWeight: "900",
    width: 35,
  },

  curiosityText: {
    flex: 1,
    color: "#c1b6af",
    fontSize: 14,
    lineHeight: 21,
  },

  /* FOOTER */
  footer: {
    alignItems: "center",
    marginTop: 55,
  },

  footerLine: {
    width: 45,
    height: 2,
    backgroundColor: "#9f2818",
    marginBottom: 14,
  },

  footerTitle: {
    color: "#554b46",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  footerText: {
    color: "#332d2a",
    fontSize: 9,
    marginTop: 7,
    letterSpacing: 1,
  },
});