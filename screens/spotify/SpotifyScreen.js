import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
  Modal,
  Image,
  Dimensions,
  StatusBar,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const imagen = require("../../assets/telefonoAppleMusic.jpg");

export default function SpotifyScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");

  const abrirModal = (tipo) => {
    setModalType(tipo);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const contenido = {
    spotify: {
      label: "SPOTIFY",
      titulo: "STREAMING",
      subtitulo: "EL IMPACTO EN LA PLATAFORMA",
      descripcion:
        "Bad Bunny se convirtió en una de las figuras más importantes de la historia de Spotify, liderando el ranking global de artistas en múltiples ocasiones y acumulando miles de millones de reproducciones.",
      stats: [
        {
          numero: "4×",
          texto: "TOP ARTISTA\nGLOBAL",
        },
        {
          numero: "19.8B",
          texto: "STREAMS\nEN 2025",
        },
        {
          numero: "32",
          texto: "CANCIONES EN\nBILLIONS CLUB",
        },
      ],
    },

    records: {
      label: "RECORDS",
      titulo: "MARCANDO\nLA HISTORIA",
      subtitulo: "ALGUNOS DE SUS RÉCORDS",
      descripcion:
        "A lo largo de su carrera, Bad Bunny consiguió marcas históricas que cambiaron la presencia de la música en español dentro de la industria musical internacional.",
      items: [
        "Primer artista latino en terminar cuatro años como el artista más escuchado del mundo en Spotify.",
        "El Último Tour del Mundo fue el primer álbum completamente en español en llegar al Nº1 del Billboard 200.",
        "Un Verano Sin Ti fue el primer álbum en español nominado a Álbum del Año en los Grammy.",
        "DeBÍ TiRAR MáS FOToS se convirtió en el primer álbum en español en ganar Álbum del Año en los Grammy.",
        "En 2022 recibió 23 nominaciones a los Billboard Latin Music Awards.",
      ],
    },

    premios: {
      label: "PREMIOS",
      titulo: "RECONOCIMIENTOS",
      subtitulo: "GRAMMY AWARDS",
      premios: [
        {
          año: "2026",
          premio: "Album of the Year",
          obra: "DeBÍ TiRAR MáS FOToS",
        },
        {
          año: "2026",
          premio: "Best Música Urbana Album",
          obra: "DeBÍ TiRAR MáS FOToS",
        },
        {
          año: "2026",
          premio: "Best Global Music Performance",
          obra: "EoO",
        },
        {
          año: "2023",
          premio: "Best Música Urbana Album",
          obra: "Un Verano Sin Ti",
        },
        {
          año: "2022",
          premio: "Best Música Urbana Album",
          obra: "El Último Tour del Mundo",
        },
        {
          año: "2021",
          premio: "Best Latin Pop or Urban Album",
          obra: "YHLQMDLG",
        },
      ],
    },

    impacto: {
      label: "IMPACTO",
      titulo: "MÁS ALLÁ\nDE LA MÚSICA",
      subtitulo: "ESPAÑOL · PUERTO RICO · CULTURA",
      descripcion:
        "Bad Bunny ayudó a llevar el español, el reggaetón, el trap latino y la cultura puertorriqueña al centro del entretenimiento mainstream estadounidense y mundial.",
      parrafos: [
        "Su éxito demostró que un artista podía alcanzar una audiencia global sin convertir su música al inglés.",
        "Su música convirtió elementos de Puerto Rico —su jerga, estética, gastronomía, referencias históricas y cultura— en componentes centrales de su identidad artística.",
        "Su carrera rompió barreras en streaming, charts, premios y grandes escenarios que históricamente estuvieron dominados por artistas angloparlantes.",
      ],
    },
  };

  const datos = contenido[modalType];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* =========================
            PORTADA
        ========================= */}

        <ImageBackground
          source={imagen}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <LinearGradient
            colors={[
              "rgba(0,0,0,0.05)",
              "rgba(0,0,0,0.35)",
              "#050706",
            ]}
            style={styles.heroGradient}
          >
            <View style={styles.heroContent}>

              <Text style={styles.heroTitle}>BAD BUNNY</Text>

              <Text style={styles.heroSubtitle}>
                RECORDS · PREMIOS · IMPACTO
              </Text>

              <View style={styles.greenLine} />
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* =========================
            INTRO
        ========================= */}

        <View style={styles.introSection}>
          <Text style={styles.sectionLabel}>SU LEGADO</Text>

          <Text style={styles.introTitle}>
            UNA CARRERA{"\n"}QUE ROMPIÓ RÉCORDS.
          </Text>

          <Text style={styles.introText}>
            Spotify, premios, charts y momentos históricos que marcaron
            la trayectoria de Bad Bunny.
          </Text>
        </View>

        {/* =========================
            BOTONES
        ========================= */}

        <View style={styles.buttonsSection}>
          {/* SPOTIFY */}

          <Pressable
            style={styles.glassButton}
            onPress={() => abrirModal("spotify")}
          >
            <View style={styles.buttonIcon}>
              <Text style={styles.spotifyIcon}>●</Text>
            </View>

            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTitle}>SPOTIFY</Text>
              <Text style={styles.buttonSubtitle}>
                STREAMING & REPRODUCCIONES
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          {/* RECORDS */}

          <Pressable
            style={styles.glassButton}
            onPress={() => abrirModal("records")}
          >
            <View style={styles.buttonIcon}>
              <Text style={styles.buttonIconText}>01</Text>
            </View>

            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTitle}>RECORDS</Text>
              <Text style={styles.buttonSubtitle}>
                MARCAS HISTÓRICAS
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          {/* PREMIOS */}

          <Pressable
            style={styles.glassButton}
            onPress={() => abrirModal("premios")}
          >
            <View style={styles.buttonIcon}>
              <Text style={styles.buttonIconText}>★</Text>
            </View>

            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTitle}>PREMIOS</Text>
              <Text style={styles.buttonSubtitle}>
                GRAMMY AWARDS
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          {/* IMPACTO */}

          <Pressable
            style={styles.glassButton}
            onPress={() => abrirModal("impacto")}
          >
            <View style={styles.buttonIcon}>
              <Text style={styles.buttonIconText}>∞</Text>
            </View>

            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTitle}>IMPACTO</Text>
              <Text style={styles.buttonSubtitle}>
                CULTURA & LEGADO
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>
        </View>

        {/* =========================
            GALERÍA
        ========================= */}

        <View style={styles.gallerySection}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionLabel}>ARCHIVO</Text>
              <Text style={styles.galleryTitle}>MOMENTOS</Text>
            </View>

            <Text style={styles.galleryCount}>01 — 06</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.galleryScroll}
          >
            <Pressable
              style={styles.galleryCard}
              onPress={() => abrirModal("spotify")}
            >
              <Image source={imagen} style={styles.galleryImage} />

              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.92)"]}
                style={styles.galleryGradient}
              />

              <View style={styles.galleryText}>
                <Text style={styles.galleryNumber}>01</Text>

                <Text style={styles.galleryCardTitle}>
                  SPOTIFY
                </Text>

                <Text style={styles.galleryCardSubtitle}>
                  TOP ARTISTA GLOBAL
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.galleryCard}
              onPress={() => abrirModal("records")}
            >
              <Image source={imagen} style={styles.galleryImage} />

              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.92)"]}
                style={styles.galleryGradient}
              />

              <View style={styles.galleryText}>
                <Text style={styles.galleryNumber}>02</Text>

                <Text style={styles.galleryCardTitle}>
                  BILLBOARD
                </Text>

                <Text style={styles.galleryCardSubtitle}>
                  Nº1 EN LA HISTORIA
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.galleryCard}
              onPress={() => abrirModal("premios")}
            >
              <Image source={imagen} style={styles.galleryImage} />

              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.92)"]}
                style={styles.galleryGradient}
              />

              <View style={styles.galleryText}>
                <Text style={styles.galleryNumber}>03</Text>

                <Text style={styles.galleryCardTitle}>
                  GRAMMY
                </Text>

                <Text style={styles.galleryCardSubtitle}>
                  ALBUM OF THE YEAR
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.galleryCard}
              onPress={() => abrirModal("impacto")}
            >
              <Image source={imagen} style={styles.galleryImage} />

              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.92)"]}
                style={styles.galleryGradient}
              />

              <View style={styles.galleryText}>
                <Text style={styles.galleryNumber}>04</Text>

                <Text style={styles.galleryCardTitle}>
                  PUERTO RICO
                </Text>

                <Text style={styles.galleryCardSubtitle}>
                  CULTURA & IDENTIDAD
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.galleryCard}
              onPress={() => abrirModal("records")}
            >
              <Image source={imagen} style={styles.galleryImage} />

              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.92)"]}
                style={styles.galleryGradient}
              />

              <View style={styles.galleryText}>
                <Text style={styles.galleryNumber}>05</Text>

                <Text style={styles.galleryCardTitle}>
                  23 NOMINACIONES
                </Text>

                <Text style={styles.galleryCardSubtitle}>
                  BILLBOARD LATIN MUSIC AWARDS
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.galleryCard}
              onPress={() => abrirModal("impacto")}
            >
              <Image source={imagen} style={styles.galleryImage} />

              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.92)"]}
                style={styles.galleryGradient}
              />

              <View style={styles.galleryText}>
                <Text style={styles.galleryNumber}>06</Text>

                <Text style={styles.galleryCardTitle}>
                  LEGADO
                </Text>

                <Text style={styles.galleryCardSubtitle}>
                  UNA NUEVA ERA LATINA
                </Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>

        {/* =========================
            FRASE FINAL
        ========================= */}

        <View style={styles.finalSection}>
          <View style={styles.finalLine} />

          <Text style={styles.finalQuote}>
            "EL ESPAÑOL TAMBIÉN{"\n"}PUEDE DOMINAR EL MUNDO."
          </Text>
        </View>

        {/* FOOTER */}

        <View style={styles.footer}>
          <Text style={styles.footerSymbol}>●</Text>

          <Text style={styles.footerTitle}>
            BAD BUNNY
          </Text>

          <Text style={styles.footerText}>
            MÚSICA · CULTURA · HISTORIA
          </Text>
        </View>
      </ScrollView>

      {/* =================================================
          MODAL
      ================================================= */}

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={cerrarModal}
      >
        <View style={styles.modalOverlay}>
          <Pressable
            style={styles.modalBackground}
            onPress={cerrarModal}
          />

          <View style={styles.modalContainer}>
            <LinearGradient
              colors={[
                "rgba(30,215,96,0.10)",
                "rgba(255,255,255,0.045)",
                "rgba(0,0,0,0.25)",
              ]}
              style={styles.modalGradient}
            >
              {/* MODAL HEADER */}

              <View style={styles.modalTop}>
                <View style={styles.modalSmallLine} />

                <Pressable
                  style={styles.closeButton}
                  onPress={cerrarModal}
                >
                  <Text style={styles.closeText}>×</Text>
                </Pressable>
              </View>

              {datos && (
                <>
                  <Text style={styles.modalLabel}>
                    {datos.label}
                  </Text>

                  <Text style={styles.modalTitle}>
                    {datos.titulo}
                  </Text>

                  <Text style={styles.modalSubtitle}>
                    {datos.subtitulo}
                  </Text>

                  <View style={styles.modalDivider} />

                  {/* =========================
                      SPOTIFY
                  ========================= */}

                  {modalType === "spotify" && (
                    <>
                      <Text style={styles.modalContent}>
                        {datos.descripcion}
                      </Text>

                      <FlatList
                        data={datos.stats}
                        keyExtractor={(item, index) => `${index}-${item.texto}`}
                        renderItem={({ item: stat }) => (
                          <View style={styles.modalStat}>
                            <Text style={styles.modalStatNumber}>
                              {stat.numero}
                            </Text>

                            <Text style={styles.modalStatLabel}>
                              {stat.texto}
                            </Text>
                          </View>
                        )}
                        scrollEnabled={false}
                      />
                    </>
                  )}

                  {/* =========================
                      RECORDS
                  ========================= */}

                  {modalType === "records" && (
                    <FlatList
                      data={datos.items}
                      keyExtractor={(item, index) => `${index}-${item}`}
                      renderItem={({ item: record, index }) => (
                        <View style={styles.recordItem}>
                          <View style={styles.recordNumber}>
                            <Text style={styles.recordNumberText}>
                              {String(index + 1).padStart(2, "0")}
                            </Text>
                          </View>

                          <Text style={styles.recordText}>
                            {record}
                          </Text>
                        </View>
                      )}
                      scrollEnabled={false}
                    />
                  )}

                  {/* =========================
                      PREMIOS
                  ========================= */}

                  {modalType === "premios" && (
                    <FlatList
                      data={datos.premios}
                      keyExtractor={(item, index) => `${index}-${item.premio}`}
                      renderItem={({ item: premio }) => (
                        <View style={styles.awardItem}>
                          <View style={styles.awardIcon}>
                            <Text style={styles.awardIconText}>
                              ★
                            </Text>
                          </View>

                          <View style={styles.awardInfo}>
                            <Text style={styles.awardYear}>
                              {premio.año}
                            </Text>

                            <Text style={styles.awardTitle}>
                              {premio.premio}
                            </Text>

                            <Text style={styles.awardWork}>
                              {premio.obra}
                            </Text>
                          </View>
                        </View>
                      )}
                      scrollEnabled={false}
                    />
                  )}

                  {/* =========================
                      IMPACTO
                  ========================= */}

                  {modalType === "impacto" && (
                    <View>
                      <Text style={styles.modalContent}>
                        {datos.descripcion}
                      </Text>

                      <View style={styles.impactContainer}>
                        <FlatList
                          data={datos.parrafos}
                          keyExtractor={(item, index) => `${index}-${item}`}
                          renderItem={({ item: parrafo }) => (
                            <View style={styles.impactItem}>
                              <View style={styles.impactDot} />

                              <Text style={styles.impactText}>
                                {parrafo}
                              </Text>
                            </View>
                          )}
                          scrollEnabled={false}
                        />
                      </View>
                    </View>
                  )}

                  {/* CERRAR */}

                  <Pressable
                    style={styles.modalButton}
                    onPress={cerrarModal}
                  >
                    <Text style={styles.modalButtonText}>
                      CERRAR
                    </Text>
                  </Pressable>
                </>
              )}
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050706",
  },

  scrollContent: {
    paddingBottom: 45,
  },

  // =================================================
  // HERO
  // =================================================

  hero: {
    height: 470,
    width: "100%",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroGradient: {
    flex: 1,
    justifyContent: "flex-end",
  },

  heroContent: {
    paddingHorizontal: 24,
    paddingBottom: 34,
  },

  heroBadge: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    marginBottom: 15,
  },

  heroBadgeText: {
    color: "#d8ffdf",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 48,
    fontWeight: "900",
    letterSpacing: -1,
  },

  heroSubtitle: {
    color: "#b8ffca",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 5,
  },

  greenLine: {
    width: 55,
    height: 3,
    backgroundColor: "#1ed760",
    marginTop: 18,
    borderRadius: 10,
  },

  // =================================================
  // INTRO
  // =================================================

  introSection: {
    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 20,
  },

  sectionLabel: {
    color: "#1ed760",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 8,
  },

  introTitle: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 31,
    letterSpacing: -0.5,
  },

  introText: {
    color: "#929792",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 14,
    maxWidth: 350,
  },

  // =================================================
  // BOTONES
  // =================================================

  buttonsSection: {
    paddingHorizontal: 20,
    gap: 10,
    marginTop: 5,
  },

  glassButton: {
    minHeight: 76,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.055)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  buttonIcon: {
    width: 47,
    height: 47,
    borderRadius: 15,
    backgroundColor: "rgba(30,215,96,0.12)",
    borderWidth: 1,
    borderColor: "rgba(30,215,96,0.22)",
    justifyContent: "center",
    alignItems: "center",
  },

  spotifyIcon: {
    color: "#1ed760",
    fontSize: 22,
  },

  buttonIconText: {
    color: "#b7ffc9",
    fontSize: 14,
    fontWeight: "800",
  },

  buttonTextContainer: {
    flex: 1,
    marginLeft: 13,
  },

  buttonTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 1,
  },

  buttonSubtitle: {
    color: "#777d79",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 4,
  },

  arrow: {
    color: "#1ed760",
    fontSize: 27,
    fontWeight: "300",
    marginRight: 4,
  },

  // =================================================
  // GALERÍA
  // =================================================

  gallerySection: {
    marginTop: 42,
  },

  sectionHeader: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 15,
  },

  galleryTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
  },

  galleryCount: {
    color: "#656b67",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
  },

  galleryScroll: {
    paddingLeft: 20,
    paddingRight: 5,
  },

  galleryCard: {
    width: width * 0.72,
    height: 330,
    marginRight: 14,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#111411",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  galleryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  galleryGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "65%",
  },

  galleryText: {
    position: "absolute",
    bottom: 22,
    left: 20,
    right: 20,
  },

  galleryNumber: {
    color: "#1ed760",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 5,
  },

  galleryCardTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
  },

  galleryCardSubtitle: {
    color: "#c1c5c2",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 4,
  },

  // =================================================
  // FRASE FINAL
  // =================================================

  finalSection: {
    paddingHorizontal: 24,
    marginTop: 55,
  },

  finalLine: {
    width: 40,
    height: 2,
    backgroundColor: "#1ed760",
    marginBottom: 20,
  },

  finalQuote: {
    color: "#ffffff",
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "900",
  },

  finalSmall: {
    color: "#626963",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 12,
  },

  // =================================================
  // FOOTER
  // =================================================

  footer: {
    alignItems: "center",
    marginTop: 45,
  },

  footerSymbol: {
    color: "#1ed760",
    fontSize: 14,
  },

  footerTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 2,
    marginTop: 8,
  },

  footerText: {
    color: "#565c58",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 6,
  },

  // =================================================
  // MODAL
  // =================================================

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.76)",
  },

  modalContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    maxHeight: "88%",
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
    backgroundColor: "rgba(15,18,16,0.97)",
  },

  modalGradient: {
    paddingHorizontal: 23,
    paddingTop: 14,
    paddingBottom: 24,
  },

  modalTop: {
    alignItems: "center",
    position: "relative",
    minHeight: 30,
  },

  modalSmallLine: {
    width: 40,
    height: 4,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
  },

  closeButton: {
    position: "absolute",
    right: 0,
    top: -3,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.07)",
    justifyContent: "center",
    alignItems: "center",
  },

  closeText: {
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "300",
    lineHeight: 25,
  },

  modalLabel: {
    color: "#1ed760",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
    marginTop: 18,
  },

  modalTitle: {
    color: "#ffffff",
    fontSize: 31,
    lineHeight: 32,
    fontWeight: "900",
    marginTop: 5,
  },

  modalSubtitle: {
    color: "#8e9690",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 6,
  },

  modalDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.08)",
    marginVertical: 19,
  },

  modalContent: {
    color: "#c3c8c4",
    fontSize: 14,
    lineHeight: 22,
  },

  // =================================================
  // SPOTIFY STATS
  // =================================================

  modalStats: {
    flexDirection: "row",
    gap: 7,
    marginTop: 22,
  },

  modalStat: {
    flex: 1,
    minHeight: 84,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.045)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },

  modalStatNumber: {
    color: "#1ed760",
    fontSize: 19,
    fontWeight: "900",
  },

  modalStatLabel: {
    color: "#737a75",
    fontSize: 7,
    lineHeight: 10,
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 0.7,
    marginTop: 5,
  },

  // =================================================
  // RECORDS
  // =================================================

  recordsContainer: {
    gap: 10,
  },

  recordItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "rgba(255,255,255,0.035)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.065)",
    borderRadius: 17,
    padding: 12,
  },

  recordNumber: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "rgba(30,215,96,0.10)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },

  recordNumberText: {
    color: "#1ed760",
    fontSize: 9,
    fontWeight: "900",
  },

  recordText: {
    flex: 1,
    color: "#c3c8c4",
    fontSize: 12,
    lineHeight: 18,
    paddingTop: 1,
  },

  // =================================================
  // PREMIOS
  // =================================================

  awardsContainer: {
    gap: 9,
  },

  awardItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.035)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.065)",
  },

  awardIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "rgba(30,215,96,0.10)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  awardIconText: {
    color: "#1ed760",
    fontSize: 17,
  },

  awardInfo: {
    flex: 1,
  },

  awardYear: {
    color: "#1ed760",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
  },

  awardTitle: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 2,
  },

  awardWork: {
    color: "#777e79",
    fontSize: 10,
    marginTop: 2,
  },

  // =================================================
  // IMPACTO
  // =================================================

  impactContainer: {
    marginTop: 20,
    gap: 13,
  },

  impactItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  impactDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#1ed760",
    marginTop: 7,
    marginRight: 10,
  },

  impactText: {
    flex: 1,
    color: "#bfc5c1",
    fontSize: 12,
    lineHeight: 19,
  },

  // =================================================
  // BOTÓN MODAL
  // =================================================

  modalButton: {
    height: 48,
    borderRadius: 18,
    backgroundColor: "rgba(30,215,96,0.12)",
    borderWidth: 1,
    borderColor: "rgba(30,215,96,0.25)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  modalButtonText: {
    color: "#b8ffc9",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
  },
});