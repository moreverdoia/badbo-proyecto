import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Pressable,
  Modal,
  Dimensions,
  StatusBar,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { colaboradores } from "../../data/data";

const { width } = Dimensions.get("window");

const imagen = require("../../assets/x100pre.jpg");

export default function ColaboradoresScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [colaboradorSeleccionado, setColaboradorSeleccionado] =
    useState(null);

  const abrirColaborador = (colaborador) => {
    setColaboradorSeleccionado(colaborador);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setColaboradorSeleccionado(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* =========================================
            PORTADA
        ========================================= */}

        <ImageBackground
          source={imagen}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <LinearGradient
            colors={[
              "rgba(0,0,0,0.05)",
              "rgba(0,0,0,0.35)",
              "#070707",
            ]}
            style={styles.heroGradient}
          >
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                COLABORADORES
              </Text>

              <Text style={styles.heroSubtitle}>
                VOCES · PRODUCTORES · HISTORIAS
              </Text>

              <View style={styles.heroLine} />
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* =========================================
            INTRO
        ========================================= */}

        <View style={styles.introSection}>
          <Text style={styles.sectionLabel}>
            EL UNIVERSO
          </Text>

          <Text style={styles.introTitle}>
            CON QUIÉN{"\n"}HIZO HISTORIA.
          </Text>
        </View>

        {/* =========================================
            COLABORADORES
        ========================================= */}

        <View style={styles.collaboratorsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.counter}>
              {String(colaboradores.length).padStart(2, "0")}
            </Text>
          </View>

          <FlatList
            data={colaboradores}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item: colaborador, index }) => (
              <Pressable
                style={[
                  styles.collaboratorCard,
                  index === colaboradores.length - 1 &&
                  colaboradores.length % 2 !== 0
                    ? styles.lastCard
                    : null,
                ]}
                onPress={() => abrirColaborador(colaborador)}
              >
                <Image
                  source={imagen}
                  style={styles.collaboratorImage}
                />

                <LinearGradient
                  colors={[
                    "transparent",
                    "rgba(0,0,0,0.90)",
                  ]}
                  style={styles.cardGradient}
                />

                <View style={styles.cardTop}>
                  <Text style={styles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </Text>

                  <View style={styles.openIcon}>
                    <Text style={styles.openIconText}>
                      ↗
                    </Text>
                  </View>
                </View>

                <View style={styles.cardInfo}>
                  <Text style={styles.cardName}>
                    {colaborador.nombre}
                  </Text>

                  <Text style={styles.cardSongs}>
                    {colaborador.canciones.length}{" "}
                    {colaborador.canciones.length === 1
                      ? "COLABORACIÓN"
                      : "COLABORACIONES"}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        {/* =========================================
            FOOTER
        ========================================= */}

        <View style={styles.footer}>
          <Text style={styles.footerSymbol}>
            ✦
          </Text>

          <Text style={styles.footerTitle}>
            BAD BUNNY
          </Text>

          <Text style={styles.footerText}>
            MÚSICA · CULTURA · HISTORIA
          </Text>
        </View>
      </ScrollView>

      {/* =========================================
          MODAL
      ========================================= */}

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

          {colaboradorSeleccionado && (
            <View style={styles.modalContainer}>
              <LinearGradient
                colors={[
                  "rgba(255,255,255,0.09)",
                  "rgba(255,255,255,0.035)",
                  "rgba(0,0,0,0.25)",
                ]}
                style={styles.modalGradient}
              >
                {/* MODAL HEADER */}

                <View style={styles.modalTop}>
                  <View style={styles.modalHandle} />

                  <Pressable
                    style={styles.closeButton}
                    onPress={cerrarModal}
                  >
                    <Text style={styles.closeText}>
                      ×
                    </Text>
                  </Pressable>
                </View>

                {/* FOTO */}

                <View style={styles.modalImageContainer}>
                  <Image
                    source={imagen}
                    style={styles.modalImage}
                  />

                  <LinearGradient
                    colors={[
                      "transparent",
                      "rgba(0,0,0,0.85)",
                    ]}
                    style={styles.modalImageGradient}
                  />

                  <View style={styles.modalImageText}>
                    <Text style={styles.modalLabel}>
                      COLABORADOR
                    </Text>

                    <Text style={styles.modalName}>
                      {colaboradorSeleccionado.nombre}
                    </Text>
                  </View>
                </View>

                {/* INFORMACIÓN */}

                <Text style={styles.fullName}>
                  {colaboradorSeleccionado.nombreCompleto}
                </Text>

                <Text style={styles.description}>
                  {colaboradorSeleccionado.descripcion}
                </Text>

                <View style={styles.divider} />

                {/* CANCIONES */}

                <View style={styles.modalSectionHeader}>
                  <View>
                    <Text style={styles.modalSectionLabel}>
                      COLABORACIONES
                    </Text>

                    <Text style={styles.modalSectionTitle}>
                      CANCIONES
                    </Text>
                  </View>

                  <Text style={styles.modalCount}>
                    {String(
                      colaboradorSeleccionado.canciones.length
                    ).padStart(2, "0")}
                  </Text>
                </View>

                <FlatList
                  data={colaboradorSeleccionado.canciones}
                  keyExtractor={(item, index) => `${item.nombre}-${index}`}
                  renderItem={({ item: cancion, index }) => (
                    <View style={styles.songCard}>
                      <View style={styles.songNumber}>
                        <Text style={styles.songNumberText}>
                          {String(index + 1).padStart(2, "0")}
                        </Text>
                      </View>

                      <View style={styles.songInfo}>
                        <Text style={styles.songName}>
                          {cancion.nombre}
                        </Text>

                        <Text style={styles.songAlbum}>
                          {cancion.album}
                        </Text>

                        <View style={styles.songDetails}>
                          <Text style={styles.songYear}>
                            {cancion.año}
                          </Text>

                          <View style={styles.detailDot} />

                          <Text style={styles.songStreams}>
                            {cancion.reproducciones} REPRODUCCIONES
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}
                  scrollEnabled={false}
                />

                {/* CERRAR */}

                <Pressable
                  style={styles.modalButton}
                  onPress={cerrarModal}
                >
                  <Text style={styles.modalButtonText}>
                    CERRAR
                  </Text>
                </Pressable>
              </LinearGradient>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070707",
  },

  scrollContent: {
    paddingBottom: 45,
  },

  // =========================================
  // HERO
  // =========================================

  hero: {
    width: "100%",
    height: 450,
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
    paddingBottom: 35,
  },

  heroBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: "rgba(0,0,0,0.35)",
    marginBottom: 15,
  },

  heroBadgeText: {
    color: "#eeeeee",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.8,
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: -1,
  },

  heroSubtitle: {
    color: "#999999",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.8,
    marginTop: 6,
  },

  heroLine: {
    width: 50,
    height: 3,
    backgroundColor: "#ffffff",
    marginTop: 18,
    borderRadius: 10,
  },

  // =========================================
  // INTRO
  // =========================================

  introSection: {
    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 25,
  },

  sectionLabel: {
    color: "#a8a8a8",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 8,
  },

  introTitle: {
    color: "#ffffff",
    fontSize: 30,
    lineHeight: 31,
    fontWeight: "900",
  },

  introText: {
    color: "#898989",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 14,
    maxWidth: 350,
  },

  // =========================================
  // COLABORADORES
  // =========================================

  collaboratorsSection: {
    paddingHorizontal: 20,
    marginTop: 5,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 16,
    paddingHorizontal: 4,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
  },

  counter: {
    color: "#606060",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 13,
  },

  collaboratorCard: {
    width: (width - 53) / 2,
    height: 250,
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "#111111",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },

  lastCard: {
    marginRight: (width - 53) / 2 + 13,
  },

  collaboratorImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  cardGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "70%",
  },

  cardTop: {
    position: "absolute",
    top: 13,
    left: 13,
    right: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardNumber: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    opacity: 0.8,
  },

  openIcon: {
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.20)",
    justifyContent: "center",
    alignItems: "center",
  },

  openIconText: {
    color: "#ffffff",
    fontSize: 15,
  },

  cardInfo: {
    position: "absolute",
    bottom: 17,
    left: 16,
    right: 12,
  },

  cardName: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: -0.3,
  },

  cardSongs: {
    color: "#999999",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1,
    marginTop: 4,
  },

  // =========================================
  // QUOTE
  // =========================================

  quoteSection: {
    paddingHorizontal: 24,
    marginTop: 55,
  },

  quoteLine: {
    width: 40,
    height: 2,
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },

  quote: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 27,
    fontWeight: "900",
  },

  quoteSmall: {
    color: "#5f5f5f",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1.8,
    marginTop: 13,
  },

  // =========================================
  // FOOTER
  // =========================================

  footer: {
    alignItems: "center",
    marginTop: 48,
  },

  footerSymbol: {
    color: "#ffffff",
    fontSize: 16,
  },

  footerTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 2,
    marginTop: 8,
  },

  footerText: {
    color: "#555555",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 6,
  },

  // =========================================
  // MODAL
  // =========================================

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
    backgroundColor: "rgba(0,0,0,0.78)",
  },

  modalContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    maxHeight: "90%",
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
    backgroundColor: "rgba(15,15,15,0.98)",
  },

  modalGradient: {
    paddingHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 22,
  },

  modalTop: {
    height: 28,
    alignItems: "center",
    position: "relative",
  },

  modalHandle: {
    width: 40,
    height: 4,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.20)",
  },

  closeButton: {
    position: "absolute",
    right: 0,
    top: -2,
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

  // =========================================
  // MODAL IMAGE
  // =========================================

  modalImageContainer: {
    width: "100%",
    height: 190,
    borderRadius: 21,
    overflow: "hidden",
    marginTop: 5,
  },

  modalImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  modalImageGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "70%",
  },

  modalImageText: {
    position: "absolute",
    bottom: 16,
    left: 17,
  },

  modalLabel: {
    color: "#aaaaaa",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 4,
  },

  modalName: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
  },

  fullName: {
    color: "#737373",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.5,
    marginTop: 13,
  },

  description: {
    color: "#bdbdbd",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 9,
  },

  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.08)",
    marginVertical: 18,
  },

  // =========================================
  // SONGS
  // =========================================

  modalSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 12,
  },

  modalSectionLabel: {
    color: "#777777",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1.8,
  },

  modalSectionTitle: {
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "900",
    marginTop: 3,
  },

  modalCount: {
    color: "#666666",
    fontSize: 10,
    fontWeight: "800",
  },

  songsContainer: {
    gap: 8,
  },

  songCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 11,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.045)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },

  songNumber: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.07)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },

  songNumberText: {
    color: "#aaaaaa",
    fontSize: 9,
    fontWeight: "900",
  },

  songInfo: {
    flex: 1,
  },

  songName: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "800",
  },

  songAlbum: {
    color: "#777777",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 0.7,
    marginTop: 3,
  },

  songDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  songYear: {
    color: "#aaaaaa",
    fontSize: 8,
    fontWeight: "800",
  },

  detailDot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#666666",
    marginHorizontal: 6,
  },

  songStreams: {
    color: "#888888",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  // =========================================
  // MODAL BUTTON
  // =========================================

  modalButton: {
    height: 47,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
  },

  modalButtonText: {
    color: "#dddddd",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
  },
});