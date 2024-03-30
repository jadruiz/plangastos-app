import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.texto}>Planificador de Gastos</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  texto: {
    textAlign: "center",
    fontSize: 24,
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 20,
  },
});
export default Header;
