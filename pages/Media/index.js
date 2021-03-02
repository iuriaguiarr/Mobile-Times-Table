import * as React from "react";
import { View, Text } from "react-native";

import { Button, TextInput } from "react-native-paper";

export default function Media() {
  const [valorInput1, setValorInput1] = React.useState("");
  const [valorInput2, setValorInput2] = React.useState("");
  const [valorInput3, setValorInput3] = React.useState("");
  const [valorInput4, setValorInput4] = React.useState("");
  const [color, setColor] = React.useState("transparent");
  const [message, setMessage] = React.useState("");

  function CalcularMDC() {
    if (
      valorInput1 === "" ||
      valorInput2 === "" ||
      valorInput3 === "" ||
      valorInput4 === ""
    ) {
      return;
    }

    var vetorValores = [];

    vetorValores = [
      parseInt(valorInput1),
      parseInt(valorInput2),
      parseInt(valorInput3),
      parseInt(valorInput4),
    ];

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var valorTotal = vetorValores.reduce(reducer);
    var divisor = vetorValores.length;
    var resultado = valorTotal / divisor;

    setColor("#90BE6D");
    setMessage(`A média é = ${resultado.toFixed(2)}`);

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
        Vamos calcular a média entre quatro números!
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
        theme={{ colors: { primary: "#43AA8B" } }}
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
        theme={{ colors: { primary: "#43AA8B" } }}
        onChange={(e) => setValorInput2(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <TextInput // Inserção do número desejado
        style={{
          width: "65%",
          backgroundColor: "transparent",
          outline: "none",
          marginBottom: "4%",
        }}
        label="Terceiro Número"
        maxLength={4}
        value={valorInput3}
        theme={{ colors: { primary: "#43AA8B" } }}
        onChange={(e) => setValorInput3(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <TextInput // Inserção do número desejado
        style={{
          width: "65%",
          backgroundColor: "transparent",
          outline: "none",
          marginBottom: "4%",
        }}
        label="Quarto Número"
        maxLength={4}
        value={valorInput4}
        theme={{ colors: { primary: "#43AA8B" } }}
        onChange={(e) => setValorInput4(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <Button
        onPress={CalcularMDC}
        style={{ width: "65%" }}
        color="#43AA8B"
        mode="contained"
      >
        <Text style={{ color: "#f1faee", fontWeight: "bold" }}>
          Calcular Média
        </Text>
      </Button>
      <Button
        style={{
          width: "65%",
          backgroundColor: color,
          position: "absolute",
          bottom: "10%",
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
