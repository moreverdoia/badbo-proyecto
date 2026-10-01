import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Detalles({ route, navigation }) {
  const foto = route?.params?.foto;
  if (!foto) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>
          DETALLE DE FOTO
        </Text>

        <Text style={styles.emptyText}>
          Esta pantalla recibirá la información de la foto
          cuando esté conectada al Stack.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* FOTO */}

        <View style={styles.imageContainer}>
          <Image
            source={foto.image}
            style={styles.image}
          />

          <LinearGradient
            colors={[
              "transparent",
              "rgba(0,0,0,0.45)",
              "#050505",
            ]}
            style={styles.gradient}
          />

          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>
              ‹
            </Text>
          </Pressable>

          <View style={styles.imageInfo}>
            <Text style={styles.year}>
              {foto.year}
            </Text>

            <Text style={styles.title}>
              {foto.title}
            </Text>
          </View>
        </View>

        {/* INFORMACIÓN */}

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>
            INFORMACIÓN
          </Text>

          <InfoRow
            label="AÑO"
            value={foto.year}
          />

          {foto.location ? (
            <InfoRow
              label="LUGAR"
              value={foto.location}
            />
          ) : null}

          {foto.tour ? (
            <InfoRow
              label="TOUR / ETAPA"
              value={foto.tour}
            />
          ) : null}
        </View>

        {/* DESCRIPCIÓN */}

        {foto.description ? (
          <View style={styles.descriptionCard}>
            <Text style={styles.sectionTitle}>
              SOBRE ESTE MOMENTO
            </Text>

            <Text style={styles.description}>
              {foto.description}
            </Text>
          </View>
        ) : null}

        {/* FOOTER */}

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            BAD BUNNY
          </Text>

          <Text style={styles.footerText}>
            FUERA DEL ESCENARIO
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  /* ESTADO SIN DATOS */

  emptyContainer: {
    flex: 1,
    backgroundColor: "#050505",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  emptyTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 1,
  },

  emptyText: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 10,
  },

  /* FOTO */

  imageContainer: {
    height: 570,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "65%",
  },

  backButton: {
    position: "absolute",
    top: 55,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.45)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  backText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "300",
    marginTop: -3,
  },

  imageInfo: {
    position: "absolute",
    left: 22,
    right: 22,
    bottom: 35,
  },

  year: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
  },

  title: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "900",
    marginTop: 5,
  },

  /* INFORMACIÓN */

  infoCard: {
    marginHorizontal: 18,
    marginTop: -5,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 15,
  },

  infoRow: {
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },

  label: {
    color: "rgba(255,255,255,0.35)",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  value: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
  },

  /* DESCRIPCIÓN */

  descriptionCard: {
    marginHorizontal: 18,
    marginTop: 15,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  description: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 14,
    lineHeight: 22,
  },

  /* FOOTER */

  footer: {
    alignItems: "center",
    marginTop: 50,
  },

  footerTitle: {
    color: "rgba(255,255,255,0.15)",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 3,
  },

  footerText: {
    color: "rgba(255,255,255,0.2)",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginTop: 5,
  },
});