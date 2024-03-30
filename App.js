import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import Header from "./src/components/Header";
import NuevoPresupuesto from "./src/components/NuevoPresupuesto";
import ControlPresupuesto from "./src/components/ControlPresupuesto";

export default function App() {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);

  const handleNuevoPresupuesto = (presupuesto) => {
    //console.log("desde app", presupuesto);
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true);
    } else {
      Alert.alert("Error", "El presupuesto no puede ser 0 o menor");
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        {isValidPresupuesto ? (
          <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
        ) : (
          <NuevoPresupuesto
            setPresupuesto={setPresupuesto}
            presupuesto={presupuesto}
            handleNuevoPresupuesto={handleNuevoPresupuesto}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  header: {
    backgroundColor: "#3b82f6",
  },
});
