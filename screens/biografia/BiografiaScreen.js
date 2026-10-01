import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { biografiaTimeline } from "../../data/data";

const imagenBiografia = require("../../assets/x100pre.jpg");

export default function BiografiaScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ======================================
            HERO
        ====================================== */}

        <View style={styles.hero}>
          <ImageBackground
            source={imagenBiografia}
            style={styles.heroImage}
            resizeMode="cover"
          >
            <LinearGradient
              colors={[
                "rgba(0,0,0,0.05)",
                "rgba(0,0,0,0.25)",
                "#090909",
              ]}
              locations={[0, 0.45, 1]}
              style={styles.heroGradient}
            >
              <View style={styles.heroContent}>
                <Text style={styles.heroTitle}>
                  SU HISTORIA
                </Text>

                <Text style={styles.heroSubtitle}>
                  De Bayamón al mundo.
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* ======================================
            INTRODUCCIÓN
        ====================================== */}

        <View style={styles.introSection}>
          <View style={styles.glassCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardDot} />

              <Text style={styles.cardLabel}>
                BAD BUNNY
              </Text>
            </View>

            <Text style={styles.introText}>
              Benito Antonio Martínez Ocasio nació el 10 de marzo de 1994
              en Bayamón, Puerto Rico.
            </Text>

            <Text style={styles.bodyText}>
              Es un cantante, compositor y productor puertorriqueño. Su
              carrera comenzó de manera independiente y con el tiempo,
              se convirtió en una de las figuras más importantes de la
              música urbana latina.
            </Text>

            <View style={styles.birthInfo}>
              <View style={styles.birthData}>
                <Text style={styles.birthLabel}>
                  NACIMIENTO
                </Text>

                <Text style={styles.birthText}>
                  10.03.1994
                </Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={styles.birthData}>
                <Text style={styles.birthLabel}>
                  LUGAR
                </Text>

                <Text style={styles.birthText}>
                  Bayamón, PR
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* ======================================
            TIMELINE
        ====================================== */}

        <View style={styles.timelineSection}>
          <Text style={styles.sectionEyebrow}>
            LÍNEA DE TIEMPO
          </Text>

          <Text style={styles.sectionTitle}>
            Una carrera{"\n"}en movimiento.
          </Text>

          <FlatList
            data={biografiaTimeline}
            keyExtractor={(item) => item.year}
            renderItem={({ item }) => (
              <TimelineItem
                year={item.year}
                title={item.title}
                text={item.text}
                image={item.image}
                first={item.first}
                highlighted={item.highlighted}
                last={item.last}
              />
            )}
            scrollEnabled={false}
          />
        </View>

        {/* ======================================
            ACTUALIDAD
        ====================================== */}

        <View style={styles.currentSection}>
          <View style={styles.currentCard}>
            <Text style={styles.currentEyebrow}>
              HOY
            </Text>

            <Text style={styles.currentTitle}>
              Una historia que{"\n"}
              todavía continúa.
            </Text>

            <Text style={styles.currentText}>
              Más de una década después de sus primeros lanzamientos en
              SoundCloud, Bad Bunny continúa reinventando su sonido,
              estética e identidad artística.
            </Text>
          </View>
        </View>

        {/* ======================================
            FINAL
        ====================================== */}

        <View style={styles.finalSection}>
          <Text style={styles.finalText}>
            No hay una sola versión de Bad Bunny.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// ==================================================
// COMPONENTE TIMELINE
// ==================================================

function TimelineItem({
  year,
  title,
  text,
  image,
  last,
  highlighted,
}) {
  return (
    <View style={styles.timelineItem}>
      {!last && <View style={styles.timelineLine} />}

      <View
        style={[
          styles.timelineDot,
          highlighted && styles.timelineDotHighlighted,
        ]}
      />

      <View style={styles.timelineContent}>
        <Text style={styles.timelineYear}>
          {year}
        </Text>

        <Text style={styles.timelineTitle}>
          {title}
        </Text>

        <Text style={styles.timelineDescription}>
          {text}
        </Text>

        {image ? (
          <ImageBackground
            source={image}
            style={styles.timelineImage}
            imageStyle={styles.timelineImageRadius}
          >
            <LinearGradient
              colors={[
                "transparent",
                "rgba(0,0,0,0.55)",
              ]}
              style={styles.timelineImageGradient}
            />
          </ImageBackground>
        ) : null}

        {highlighted && (
          <View style={styles.highlightBadge}>
            <Text style={styles.highlightText}>
              ERA ICÓNICA
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

// ==================================================
// ESTILOS
// ==================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  // ─────────────────────────────
  // HERO
  // ─────────────────────────────

  hero: {
    height: 560,
  },

  heroImage: {
    flex: 1,
  },

  heroGradient: {
    flex: 1,
    justifyContent: "flex-end",
  },

  heroContent: {
    paddingHorizontal: 24,
    paddingBottom: 38,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 54,
    fontWeight: "900",
    letterSpacing: -2,
    lineHeight: 58,
  },

  heroSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 17,
    marginTop: 8,
    fontWeight: "500",
  },

  // ─────────────────────────────
  // INTRO
  // ─────────────────────────────

  introSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  glassCard: {
    backgroundColor: "rgba(255,255,255,0.07)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    borderRadius: 26,
    padding: 22,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  cardDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginRight: 8,
  },

  cardLabel: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
  },

  introText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 12,
    fontWeight: "600",
  },

  bodyText: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
  },

  birthInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
  },

  birthData: {
    flex: 1,
  },

  birthLabel: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 3,
  },

  birthText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },

  verticalLine: {
    width: 1,
    height: 32,
    backgroundColor: "rgba(255,255,255,0.12)",
    marginHorizontal: 14,
  },

  // ─────────────────────────────
  // TIMELINE
  // ─────────────────────────────

  timelineSection: {
    paddingHorizontal: 20,
    paddingTop: 42,
  },

  sectionEyebrow: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 6,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: -0.8,
    marginBottom: 26,
  },

  timeline: {
    position: "relative",
  },

  timelineItem: {
    flexDirection: "row",
    minHeight: 150,
    position: "relative",
  },

  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
    marginTop: 6,
    marginRight: 18,
    zIndex: 2,
  },

  timelineDotHighlighted: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginLeft: -1,
    marginRight: 17,
  },

  timelineLine: {
    position: "absolute",
    left: 5,
    top: 18,
    bottom: -10,
    width: 1,
    backgroundColor: "rgba(255,255,255,0.18)",
  },

  timelineContent: {
    flex: 1,
    paddingBottom: 32,
  },

  timelineYear: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  timelineTitle: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "800",
    marginBottom: 7,
  },

  timelineDescription: {
    color: "rgba(255,255,255,0.68)",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 12,
  },

  timelineImage: {
    width: "100%",
    height: 180,
    marginTop: 4,
    overflow: "hidden",
  },

  timelineImageRadius: {
    borderRadius: 20,
  },

  timelineImageGradient: {
    flex: 1,
  },

  highlightBadge: {
    alignSelf: "flex-start",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  highlightText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  // ─────────────────────────────
  // ACTUALIDAD
  // ─────────────────────────────

  currentSection: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  currentCard: {
    borderRadius: 28,
    padding: 24,
    backgroundColor: "rgba(255,255,255,0.09)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
    overflow: "hidden",
  },

  currentEyebrow: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 8,
  },

  currentTitle: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "900",
    letterSpacing: -0.8,
    marginBottom: 10,
  },

  currentText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 15,
    lineHeight: 23,
  },

  currentFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
  },

  footerText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  footerBunny: {
    fontSize: 20,
  },

  // ─────────────────────────────
  // FINAL
  // ─────────────────────────────

  finalSection: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: "center",
  },

  finalText: {
    color: "#fff",
    fontSize: 27,
    lineHeight: 34,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.5,
  },
});