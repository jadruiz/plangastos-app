import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import globalStyles from "../styles";
import { formatearCantidad } from "../helpers";

const controlPresupuesto = ({ presupuesto }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image style={styles.imagen} source={require("../img/grafico.jpg")} />
      </View>
      <View style={styles.contenedorTexto}>
        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: </Text>{" "}
          {formatearCantidad(presupuesto)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: </Text>
          {formatearCantidad(disponible)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: </Text>{" "}
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  contenedor: { ...globalStyles.contenedor },
  centrarGrafica: {
    alignItems: "center",
  },
  imagen: {
    width: 250,
    height: 250,
  },
  contenedorTexto: {
    marginTop: 50,
    marginBottom: 10,
  },
  valor: {
    fontSize: 24,
    textAlign: "center",
  },
  label: {
    fontWeight: "900",
    color: "#3b82f6",
  },
});

export default controlPresupuesto;
