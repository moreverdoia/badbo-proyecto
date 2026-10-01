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
import { yhlqmdlg } from "../../data/data";

const album = yhlqmdlg;

function StatItem({ label, value }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value || "—"}</Text>
    </View>
  );
}

export default function YHLQMDLGScreen({ navigation }) {
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
              "rgba(20, 10, 25, 0.05)",
              "rgba(20, 10, 25, 0.55)",
              "#120916",
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
              <View style={styles.sticker}>
                <Text style={styles.stickerText}>2020</Text>
              </View>

              <Text style={styles.albumTitle}>{album.title}</Text>

              <Text style={styles.albumSubtitle}>
                YO HAGO LO QUE ME DA LA GANA
              </Text>

              <Text style={styles.albumArtist}>{album.artist}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* STATS */}
        <View style={styles.statsSection}>
          <StatItem label="LANZAMIENTO" value={album.releaseDate} />
          <StatItem label="CANCIONES" value={album.totalSongs} />
          <StatItem label="DURACIÓN" value={album.duration} />
          <StatItem label="REPRODUCCIONES" value={album.reproductions} />
        </View>

        {/* MÁS ESCUCHADA */}
        {album.mostListened !== "" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>MÁS ESCUCHADA</Text>

            <View style={styles.featuredCard}>
              <View style={styles.featuredNumber}>
                <Text style={styles.featuredNumberText}>01</Text>
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

            <View style={styles.trackBadge}>
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
            style={styles.eraButton}
            onPress={abrirEra}
          >
            <View style={styles.eraButtonInfo}>
              <Text style={styles.eraEyebrow}>
                EXPLORÁ ESTA ETAPA
              </Text>

              <Text style={styles.eraButtonTitle}>
                VER ERA YHLQMDLG
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
            <Text style={styles.sectionTitle}>CURIOSIDADES</Text>

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
          <Text style={styles.footerText}>YHLQMDLG</Text>

          <Text style={styles.footerSubtext}>
            YO HAGO LO QUE ME DA LA GANA · {album.year}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120916",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  /* HERO */

  hero: {
    height: 520,
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
    backgroundColor: "rgba(255,255,255,0.14)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
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

  sticker: {
    paddingHorizontal: 13,
    paddingVertical: 7,
    backgroundColor: "#8B5CF6",
    transform: [{ rotate: "-4deg" }],
    marginBottom: 14,
  },

  stickerText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
  },

  albumTitle: {
    color: "#fff",
    fontSize: 61,
    fontWeight: "900",
    letterSpacing: -3,
  },

  albumSubtitle: {
    color: "#4F8CFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginTop: 4,
  },

  albumArtist: {
    color: "#d8d1da",
    fontSize: 16,
    marginTop: 9,
  },

  /* GENERAL */

  section: {
    paddingHorizontal: 18,
    marginTop: 24,
  },

  glassCard: {
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.11)",
    borderRadius: 24,
    padding: 20,
    overflow: "hidden",
  },

  /* STATS */

  statsSection: {
    marginTop: 22,
    marginHorizontal: 18,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.045)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  statItem: {
    minHeight: 72,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.07)",
  },

  statLabel: {
    color: "#857b89",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 5,
  },

  statValue: {
    color: "#f5f2f5",
    fontSize: 16,
    fontWeight: "600",
  },

  /* TITLES */

  sectionTitle: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: -0.3,
    marginBottom: 13,
  },

  /* FEATURED */

  featuredCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 17,
    borderRadius: 20,
    backgroundColor: "rgba(139,92,246,0.10)",
    borderWidth: 1,
    borderColor: "rgba(139,92,246,0.25)",
  },

  featuredNumber: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: "#8B5CF6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  featuredNumberText: {
    color: "#171019",
    fontWeight: "900",
    fontSize: 13,
  },

  featuredInfo: {
    flex: 1,
  },

  featuredTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  featuredSubtitle: {
    color: "#857b89",
    fontSize: 12,
    marginTop: 4,
  },

  /* TRACKLIST */

  tracklistHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  trackBadge: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "rgba(245,230,66,0.09)",
    borderWidth: 1,
    borderColor: "rgba(245,230,66,0.18)",
  },

  trackCount: {
    color: "#f5e642",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  tracklist: {
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.045)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  songRow: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.07)",
  },

  songNumberBox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "rgba(79,140,255,0.10)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  songNumber: {
    color: "#8B5CF6",
    fontSize: 11,
    fontWeight: "800",
  },

  songInfo: {
    flex: 1,
  },

  songTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    minHeight: 18,
  },

  songMeta: {
    color: "#6f6673",
    fontSize: 11,
    marginTop: 4,
    minHeight: 13,
  },

  songRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  songReproductions: {
    color: "#6f6673",
    fontSize: 10,
  },

  arrow: {
    color: "#a9a0ae",
    fontSize: 25,
    fontWeight: "300",
  },

  /* VER ERA */

  eraButton: {
    minHeight: 105,
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(139,92,246,0.10)",
    borderWidth: 1,
    borderColor: "rgba(139,92,246,0.28)",
  },

  eraButtonInfo: {
    flex: 1,
    paddingRight: 12,
  },

  eraEyebrow: {
    color: "#8B5CF6",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  eraButtonTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.2,
  },

  eraButtonDescription: {
    color: "#857b89",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 5,
  },

  eraArrowContainer: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: "rgba(139,92,246,0.16)",
    alignItems: "center",
    justifyContent: "center",
  },

  eraArrow: {
    color: "#8B5CF6",
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
    color: "#f5e642",
    fontSize: 11,
    fontWeight: "800",
    width: 35,
  },

  curiosityText: {
    flex: 1,
    color: "#c9c1cc",
    fontSize: 14,
    lineHeight: 21,
  },

  /* FOOTER */

  footer: {
    alignItems: "center",
    marginTop: 55,
  },

  footerText: {
    color: "#655d68",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 2,
  },

  footerSubtext: {
    color: "#403944",
    fontSize: 9,
    marginTop: 7,
    letterSpacing: 0.7,
  },
});