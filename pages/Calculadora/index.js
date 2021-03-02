import * as React from "react";
import { View, Text } from "react-native";

import { IconButton, Button, TextInput } from "react-native-paper";

export default function Calculadora() {
  const [valorInput1, setValorInput1] = React.useState("");
  const [valorInput2, setValorInput2] = React.useState("");
  const [result, setResult] = React.useState("");
  const [soma, setSoma] = React.useState(false);
  const [subtracao, setSubtracao] = React.useState(false);
  const [multiplicacao, setMultiplicacao] = React.useState(false);
  const [divisao, setDivisao] = React.useState(false);
  var operacao;

  function Calcular() {
    if (valorInput1 === "" || valorInput2 === "") {
      return;
    } else if (soma === true) {
      setResult(parseInt(valorInput1) + parseInt(valorInput2));
    } else if (subtracao === true) {
      setResult(valorInput1 - valorInput2);
    } else if (multiplicacao === true) {
      setResult(valorInput1 * valorInput2);
    } else if (divisao === true) {
      setResult(valorInput1 / valorInput2);
    } else {
      return;
    }
  }

  function toggleOperation(operacao) {
    switch (operacao) {
      case "soma":
        setSoma(true);
        setSubtracao(false);
        setMultiplicacao(false);
        setDivisao(false);
        break;
      case "subtracao":
        setSoma(false);
        setSubtracao(true);
        setMultiplicacao(false);
        setDivisao(false);
        break;
      case "multiplicacao":
        setSoma(false);
        setSubtracao(false);
        setMultiplicacao(true);
        setDivisao(false);
        break;
      case "divisao":
        setSoma(false);
        setSubtracao(false);
        setMultiplicacao(false);
        setDivisao(true);
        break;
      default:
        break;
    }
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
      <Text style={{ opacity: 0.5 }}>Vamos fazer uma continha!</Text>
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
        theme={{ colors: { primary: "#577590" } }}
        onChange={(e) => setValorInput1(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <View // Agrupamento de botões
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "65%",
        }}
      >
        <IconButton // Soma
          icon="https://image.flaticon.com/icons/svg/1828/1828921.svg"
          color="#577590"
          disabled={soma}
          onPress={() => toggleOperation((operacao = "soma"))}
        />
        <IconButton // Subtração
          icon="https://image.flaticon.com/icons/svg/25/25232.svg"
          color="#577590"
          disabled={subtracao}
          onPress={() => toggleOperation((operacao = "subtracao"))}
        />
        <IconButton // Multiplicação
          icon="https://image.flaticon.com/icons/svg/74/74341.svg"
          color="#577590"
          disabled={multiplicacao}
          onPress={() => toggleOperation((operacao = "multiplicacao"))}
        />
        <IconButton // Divisão
          icon="https://image.flaticon.com/icons/svg/149/149709.svg"
          color="#577590"
          disabled={divisao}
          onPress={() => toggleOperation((operacao = "divisao"))}
        />
      </View>

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
        theme={{ colors: { primary: "#577590" } }}
        onChange={(e) => setValorInput2(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <TextInput // Inserção do número desejado
        style={{
          width: "65%",
          backgroundColor: "transparent",
          outline: "none",
          marginBottom: "4%",
        }}
        label="Resultado"
        disabled={true}
        value={result}
        theme={{ colors: { primary: "#577590" } }}
      />

      <Button
        onPress={Calcular}
        style={{ width: "65%" }}
        color="#577590"
        mode="contained"
      >
        <Text style={{ color: "#f1faee", fontWeight: "bold" }}>Calcular</Text>
      </Button>
    </View>
  );
}
