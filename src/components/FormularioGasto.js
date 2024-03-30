import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles";

const FormularioGasto = (setModal) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <View>
        <Pressable style={styles.btnCancelar} onPress={() => setModal(false)}>
          <Text style={styles.btnCancelarText}>Cancelar</Text>
        </Pressable>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>Nuevo Gasto</Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del gasto. Ej. Comida"
          ></TextInput>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad del gasto. Ej. $100.00"
            keyboardType="numeric"
          ></TextInput>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <Picker>
            <Picker.Item label="-- Seleccione --" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Gastos varios" value="gastos" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscripciones" value="suscripciones" />
          </Picker>
        </View>

        <Pressable style={styles.submitBtn}>
          <Text style={styles.submitBtnTexto}>Agregar Gasto</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#1e40af",
    flex: 1,
  },
  formulario: {
    ...globalStyles.contenedor,
  },
  titulo: {
    textAlign: "center",
    fontSize: 26,
    marginBottom: 30,
    color: "#64748b",
  },
  campo: {
    marginVertical: 10,
  },
  label: {
    color: "#64748b",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: "#3b82f6",
    padding: 10,
    marginTop: 20,
  },
  submitBtnTexto: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  btnCancelar: {
    backgroundColor: "#db2777",
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
  },
  btnCancelarText: {
    textAlign: "center",
    textTranform: "uppercase",
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FormularioGasto;
