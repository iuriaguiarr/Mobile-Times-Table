import * as React from "react";
import { View, Text } from "react-native";

import { Button, TextInput } from "react-native-paper";

export default function MDC() {
  const [valorInput1, setValorInput1] = React.useState("");
  const [valorInput2, setValorInput2] = React.useState("");
  const [color, setColor] = React.useState("transparent");
  const [message, setMessage] = React.useState("");

  function CalcularMDC() {
    if (valorInput1 === "" || valorInput2 === "") {
      return;
    }
    var resto, num1, num2;
    num1 = valorInput1;
    num2 = valorInput2;
    while (resto !== 0) {
      resto = num1 % num2;

      num1 = num2;
      num2 = resto;
    }

    setColor("#90BE6D");
    setMessage(`O MDC de (${valorInput1},${valorInput2}) é: ${num1}`);

    setTimeout(() => {
      setColor("#f1faee");
    }, 5000);
  }

  return (
    <View
      style={{
        backgroundColor: "#f1faee",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ opacity: 0.5 }}>
        Vamos calcular o MDC de dois números!
      </Text>
      <TextInput // Inserção do número desejado
        style={{
          width: "65%",
          backgroundColor: "transparent",
          outline: "none",
          marginBottom: "4%",
        }}
        label="Primeiro Número"
        maxLength={4}
        value={valorInput1}
        theme={{ colors: { primary: "#90BE6D" } }}
        onChange={(e) => setValorInput1(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <TextInput // Inserção do número desejado
        style={{
          width: "65%",
          backgroundColor: "transparent",
          outline: "none",
          marginBottom: "4%",
        }}
        label="Segundo Número"
        maxLength={4}
        value={valorInput2}
        theme={{ colors: { primary: "#90BE6D" } }}
        onChange={(e) => setValorInput2(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <Button
        onPress={CalcularMDC}
        style={{ width: "65%" }}
        color="#90BE6D"
        mode="contained"
      >
        <Text style={{ color: "#f1faee", fontWeight: "bold" }}>
          Calcular MDC
        </Text>
      </Button>
      <Button
        style={{
          width: "65%",
          backgroundColor: color,
          position: "absolute",
          bottom: "20%",
          transition: "all ease-in-out 0.5s",
        }}
        disabled={true}
        mode="contained"
      >
        <Text style={{ color: "#f1faee", fontWeight: "bold" }}>{message}</Text>
      </Button>
    </View>
  );
}
