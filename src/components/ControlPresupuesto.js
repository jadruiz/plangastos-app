import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const controlPresupuesto = () => {
  return (
    <View style={styles.contenedor}>
      <View>
        <Image source={require("../img/grafico.jpg")} />
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  contenedor: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    transform: [{ translateY: 50 }],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default controlPresupuesto;
