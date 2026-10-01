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
import { oasis } from "../../data/data";

const album = oasis;

function StatItem({ label, value }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value || "—"}</Text>
    </View>
  );
}

export default function AlbumDetailScreen({ navigation }) {
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
              "rgba(10, 24, 20, 0.15)",
              "rgba(10, 24, 20, 0.65)",
              "#07100d",
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
              <View style={styles.oasisTag}>
                <Text style={styles.oasisTagText}>
                  BAD BUNNY × J BALVIN
                </Text>
              </View>

              <Text style={styles.albumTitle}>{album.title}</Text>
              <Text style={styles.albumArtist}>{album.artist}</Text>
              <Text style={styles.albumYear}>{album.year}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* INTRO */}
        <View style={styles.section}>
          <View style={styles.glassCard}>
            <Text style={styles.eyebrow}>SOBRE EL ÁLBUM</Text>

            <Text style={styles.description}>
              {album.description || " "}
            </Text>
          </View>
        </View>

        {/* STATS */}
        <View style={styles.statsSection}>
          <StatItem label="LANZAMIENTO" value={album.releaseDate} />
          <StatItem label="CANCIONES" value={album.totalSongs} />
          <StatItem label="DURACIÓN" value={album.duration} />
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
                VER ERA OASIS
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
          <Text style={styles.footerText}>
            BAD BUNNY × J BALVIN
          </Text>

          <Text style={styles.footerSubtext}>
            OASIS · {album.year}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07100d",
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
    backgroundColor: "rgba(255,255,255,0.13)",
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

  oasisTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "rgba(214, 255, 92, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(214, 255, 92, 0.35)",
    marginBottom: 12,
  },

  oasisTagText: {
    color: "#d6ff5c",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.4,
  },

  albumTitle: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "900",
    letterSpacing: -2,
  },

  albumArtist: {
    color: "#e4e9e5",
    fontSize: 17,
    marginTop: 2,
  },

  albumYear: {
    color: "#b9c2bc",
    fontSize: 14,
    marginTop: 8,
  },

  /* GENERAL */
  section: {
    paddingHorizontal: 18,
    marginTop: 24,
  },

  glassCard: {
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.11)",
    borderRadius: 24,
    padding: 20,
  },

  eyebrow: {
    color: "#d6ff5c",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 12,
  },

  description: {
    color: "#d8ddd9",
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
    color: "#87928b",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 5,
  },

  statValue: {
    color: "#f3f5f3",
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
    backgroundColor: "rgba(214,255,92,0.08)",
    borderWidth: 1,
    borderColor: "rgba(214,255,92,0.20)",
  },

  featuredNumber: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "rgba(214,255,92,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  featuredNumberText: {
    color: "#d6ff5c",
    fontWeight: "800",
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
    color: "#87928b",
    fontSize: 12,
    marginTop: 4,
  },

  /* TRACKLIST */
  tracklistHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  trackCount: {
    color: "#69736d",
    fontSize: 10,
    fontWeight: "700",
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
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.07)",
  },

  songNumber: {
    width: 34,
    color: "#647068",
    fontSize: 12,
    fontWeight: "700",
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
    color: "#68736c",
    fontSize: 11,
    marginTop: 4,
    minHeight: 13,
  },

  songRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  songReproductions: {
    color: "#69736d",
    fontSize: 10,
  },

  arrow: {
    color: "#aab2ad",
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
    backgroundColor: "rgba(214,255,92,0.08)",
    borderWidth: 1,
    borderColor: "rgba(214,255,92,0.22)",
  },

  eraButtonInfo: {
    flex: 1,
    paddingRight: 12,
  },

  eraEyebrow: {
    color: "#d6ff5c",
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
    color: "#87928b",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 5,
  },

  eraArrowContainer: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: "rgba(214,255,92,0.13)",
    alignItems: "center",
    justifyContent: "center",
  },

  eraArrow: {
    color: "#d6ff5c",
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
    color: "#d6ff5c",
    fontSize: 11,
    fontWeight: "800",
    width: 35,
  },

  curiosityText: {
    flex: 1,
    color: "#cbd2cd",
    fontSize: 14,
    lineHeight: 21,
  },

  /* FOOTER */
  footer: {
    alignItems: "center",
    marginTop: 55,
  },

  footerText: {
    color: "#647068",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
  },

  footerSubtext: {
    color: "#3f4843",
    fontSize: 10,
    marginTop: 7,
  },
});