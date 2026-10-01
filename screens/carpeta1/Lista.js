import React from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  Linking,
  ScrollView,
} from "react-native";

import { redes } from "../../data/data";

export default function Lista({
  route,
  navigation,
  fotos: fotosProp = [],
  onPressFoto,
  onVolverAlbum,
}) {
  // ==================================================
  // DATOS RECIBIDOS POR LA NAVEGACIÓN
  // ==================================================

  const era = route?.params?.era;
  const fotosRoute = route?.params?.fotos || [];

  const fotos = fotosRoute.length > 0 ? fotosRoute : fotosProp;

  // ==================================================
  // ABRIR RED SOCIAL
  // ==================================================

  const abrirRed = (url) => {
    Linking.openURL(url);
  };

  // ==================================================
  // ABRIR DETALLE DE FOTO
  // ==================================================

  const abrirFoto = (foto) => {
    if (onPressFoto) {
      onPressFoto(foto);
      return;
    }

    if (navigation) {
      navigation.navigate("DetalleFoto", {
        foto,
      });
    }
  };

  // ==================================================
  // VOLVER AL ÁLBUM
  // ==================================================

  const volverAlbum = () => {
    if (onVolverAlbum) {
      onVolverAlbum();
      return;
    }

    if (navigation) {
      navigation.goBack();
    }
  };

  // ==================================================
  // RENDER DE CADA FOTO
  // ==================================================

  const renderFoto = ({ item }) => (
    <Pressable
      style={styles.photoCard}
      onPress={() => abrirFoto(item)}
    >
      <Image source={item.image} style={styles.photo} />

      <View style={styles.photoInfo}>
        {item.year && (
          <Text style={styles.photoYear}>
            {item.year}
          </Text>
        )}

        <Text
          style={styles.photoTitle}
          numberOfLines={2}
        >
          {item.title}
        </Text>

        {item.location && (
          <Text style={styles.photoLocation}>
            {item.location}
          </Text>
        )}
      </View>
    </Pressable>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
    >
      {/* ==========================================
          TÍTULO
      ========================================== */}

      <View style={styles.header}>
        <Text style={styles.eyebrow}>
          GALERÍA
        </Text>

        <Text style={styles.title}>
          {era
            ? `ERA ${era.toUpperCase()}`
            : "FUERA DE LA MÚSICA"}
        </Text>

        <Text style={styles.subtitle}>
          Momentos, escenarios y etapas de esta era.
        </Text>
      </View>

      {/* ==========================================
          GALERÍA
      ========================================== */}

      {fotos.length > 0 ? (
        <FlatList
          data={fotos}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          renderItem={renderFoto}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.gallery}
          nestedScrollEnabled
        />
      ) : (
        <View style={styles.emptyGallery}>
          <Text style={styles.emptyTitle}>
            GALERÍA EN CONSTRUCCIÓN
          </Text>

          <Text style={styles.emptyText}>
            Las fotos de esta era se agregarán próximamente.
          </Text>
        </View>
      )}

      {/* ==========================================
          INDICADOR
      ========================================== */}

      {fotos.length > 0 && (
        <View style={styles.indicatorContainer}>
          <View style={styles.indicatorLine} />

          <Text style={styles.indicatorText}>
            DESLIZÁ PARA EXPLORAR
          </Text>

          <View style={styles.indicatorLine} />
        </View>
      )}

      {/* ==========================================
          VOLVER AL ÁLBUM
      ========================================== */}

      <Pressable
        style={styles.albumButton}
        onPress={volverAlbum}
      >
        <Text style={styles.albumButtonText}>
          VOLVER AL ÁLBUM
        </Text>
      </Pressable>

      {/* ==========================================
          REDES
      ========================================== */}

      <View style={styles.socialSection}>
        <Text style={styles.socialEyebrow}>
          CONECTÁ CON BENITO
        </Text>

        <Text style={styles.socialTitle}>
          ENCONTRALO EN
        </Text>

        <Text style={styles.socialDescription}>
          Seguí sus plataformas oficiales y escuchá su
          música.
        </Text>

        <FlatList
          data={redes}
          keyExtractor={(item) => item.id}
          renderItem={({ item: red }) => (
            <Pressable
              style={styles.socialCard}
              onPress={() => abrirRed(red.url)}
            >
              <View style={styles.socialIcon}>
                <Text style={styles.socialIconText}>
                  {red.icono}
                </Text>
              </View>

              <View style={styles.socialInfo}>
                <Text style={styles.socialName}>
                  {red.nombre}
                </Text>

                <Text style={styles.socialUser}>
                  {red.usuario}
                </Text>
              </View>

              <Text style={styles.socialArrow}>
                ↗
              </Text>
            </Pressable>
          )}
        />
      </View>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          BAD BUNNY
        </Text>

        <Text style={styles.footerText}>
          FUERA DEL ESCENARIO
        </Text>
      </View>
    </ScrollView>
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

  contentContainer: {
    paddingTop: 25,
    paddingBottom: 30,
  },

  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  eyebrow: {
    color: "#888",
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: "700",
    marginBottom: 8,
  },

  title: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "900",
    letterSpacing: 1,
  },

  subtitle: {
    color: "#999",
    fontSize: 13,
    marginTop: 8,
    lineHeight: 19,
  },

  // ==========================================
  // GALERÍA
  // ==========================================

  gallery: {
    paddingHorizontal: 20,
    gap: 14,
  },

  photoCard: {
    width: 245,
    height: 350,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },

  photo: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  photoInfo: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 18,
    paddingTop: 55,
    backgroundColor: "rgba(0,0,0,0.65)",
  },

  photoYear: {
    color: "#aaa",
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: "700",
    marginBottom: 5,
  },

  photoTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },

  photoLocation: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 5,
  },

  // ==========================================
  // GALERÍA VACÍA
  // ==========================================

  emptyGallery: {
    height: 350,
    marginHorizontal: 20,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    backgroundColor: "rgba(255,255,255,0.03)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 35,
  },

  emptyTitle: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 2,
    textAlign: "center",
  },

  emptyText: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 10,
  },

  // ==========================================
  // INDICADOR
  // ==========================================

  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    paddingHorizontal: 20,
  },

  indicatorLine: {
    height: 1,
    width: 35,
    backgroundColor: "#444",
  },

  indicatorText: {
    color: "#777",
    fontSize: 9,
    letterSpacing: 2,
    marginHorizontal: 10,
  },

  // ==========================================
  // BOTÓN ÁLBUM
  // ==========================================

  albumButton: {
    marginHorizontal: 20,
    marginTop: 28,
    paddingVertical: 17,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.07)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
  },

  albumButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  // ==========================================
  // REDES
  // ==========================================

  socialSection: {
    marginTop: 40,
    paddingHorizontal: 20,
  },

  socialEyebrow: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  socialTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: -0.5,
  },

  socialDescription: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 16,
  },

  socialList: {
    gap: 10,
  },

  socialCard: {
    minHeight: 72,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.055)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    flexDirection: "row",
    alignItems: "center",
  },

  socialIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  socialIconText: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "700",
  },

  socialInfo: {
    flex: 1,
    marginLeft: 14,
  },

  socialName: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
  },

  socialUser: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 11,
    marginTop: 3,
  },

  socialArrow: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 20,
  },

  // ==========================================
  // FOOTER
  // ==========================================

  footer: {
    alignItems: "center",
    marginTop: 50,
    paddingBottom: 20,
  },

  footerTitle: {
    color: "rgba(255,255,255,0.12)",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 4,
  },

  footerText: {
    color: "rgba(255,255,255,0.18)",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginTop: 5,
  },
});