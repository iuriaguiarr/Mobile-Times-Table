import * as React from "react";
// Importando elementos UI
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
// Importando elementos UI

export default function Primos() {
  // Iniciando variáveis
  const [valorInput, setValorInput] = React.useState("");
  const [color, setColor] = React.useState("transparent");
  const [message, setMessage] = React.useState("");
  var divisores = 0;
  // Iniciando variáveis

  function Descobrir() {
    divisores = 0; // Limpando cache

    if (valorInput > 1) {
      // Caso o valor seja maior que 1:
      for (var count = 1; count <= parseInt(valorInput); count++) {
        // Verifica se o número é primo
        if (parseInt(valorInput) % count === 0) {
          divisores++;
        }
      }

      if (divisores != 2) {
        // Caso o resultado seja diferente de 2:
        setColor("#f94144");
        setMessage("Este não é primo. :(");
      } else {
        // Caso o número seja primo
        setColor("#90be6d");
        setMessage("Este é primo! :)");
      }
    } else {
      setColor("#f94144");
      setMessage("Este não é primo. :(");
    }

    setTimeout(() => {
      setColor("#f1faee");
    }, 5000);
  }

  return (
    <View // Container
      style={{
        backgroundColor: "#f1faee",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ opacity: 0.5 }}>Vamos descobrir se o número é primo!</Text>
      <TextInput // Inserção do número desejado
        style={{
          width: "65%",
          backgroundColor: "transparent",
          outline: "none",
          marginBottom: "4%",
        }}
        label="Número"
        maxLength={4}
        value={valorInput}
        theme={{ colors: { primary: "#F3722C" } }}
        onChange={(e) => setValorInput(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <Button
        style={{ width: "65%" }}
        color="#F3722C"
        mode="contained"
        onPress={Descobrir}
      >
        <Text style={{ color: "#f1faee", fontWeight: "bold" }}>Descobrir</Text>
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
