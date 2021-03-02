import * as React from "react";

// Importações de UI
import { View, Text } from "react-native";
import { IconButton, DataTable, TextInput } from "react-native-paper";
// Importações de UI

export default function Tabuada() {
  // Iniciando Variáveis
  const [valorInput, setValorInput] = React.useState(""); // Valor inserido pelo usuário
  const [result, setResult] = React.useState([]); // Resultado exibido em tela
  var aux = []; // Auxiliar para armazenar resultado no loop
  // Iniciando Variáveis
  function calcularSoma() {
    if (valorInput === "") {
      // Impedindo valores vazios
      return;
    }
    // Função da tabuada de soma
    aux = []; // Limpando cache
    for (let index = 1; index <= 10; index++) {
      aux.push({
        // Inserindo resultado na auxiliar
        valor: valorInput,
        operacao: "+",
        sequencia: index,
        resultado: parseInt(valorInput) + index,
      });
      setResult(aux); // Passando o valor da auxiliar para o resultado
    }
  }
  function calcularSubtracao() {
    if (valorInput === "") {
      // Impedindo valores vazios
      return;
    }
    // Função da tabuada de subtração
    aux = []; // Limpando cache
    for (
      let index = parseInt(valorInput) + 1;
      index <= parseInt(valorInput) + 10;
      index++
    ) {
      aux.push({
        // Inserindo resultado na auxiliar
        valor: index,
        operacao: "-",
        sequencia: valorInput,
        resultado: index - parseInt(valorInput),
      });
      setResult(aux); // Passando o valor da auxiliar para o resultado
    }
  }
  function calcularMultiplicacao() {
    if (valorInput === "") {
      // Impedindo valores vazios
      return;
    }
    // Função da tabuada de multiplicação
    aux = []; // Limpando cache
    for (let index = 1; index <= 10; index++) {
      aux.push({
        // Inserindo resultado na auxiliar
        valor: valorInput,
        operacao: "x",
        sequencia: index,
        resultado: parseInt(valorInput) * index,
      });
      setResult(aux); // Passando o valor da auxiliar para o resultado
    }
  }
  function calcularDivisao() {
    if (valorInput === "") {
      // Impedindo valores vazios
      return;
    }
    // Função da tabuada de divisão
    aux = []; // Limpando cache
    for (
      let index = parseInt(valorInput);
      index <= parseInt(valorInput) * 10;
      index++
    ) {
      if (index % valorInput === 0) {
        aux.push({
          // Inserindo resultado na auxiliar
          valor: index,
          operacao: "÷",
          sequencia: valorInput,
          resultado: index / parseInt(valorInput),
        });
        setResult(aux); // Passando o valor da auxiliar para o resultado
      }
    }
  }

  return (
    <View // Container principal
      style={{
        backgroundColor: "#f1faee",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ opacity: 0.5 }}>
        Digite um número e selecione a operação.
      </Text>
      <TextInput // Inserção do número desejado
        style={{
          width: "65%",
          backgroundColor: "transparent",
          outline: "none",
        }}
        label="Número"
        maxLength={4}
        value={valorInput}
        theme={{ colors: { primary: "#F94144" } }}
        onChange={(e) => setValorInput(e.target.value.replace(/[^0-9]/g, ""))}
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
          color="#F94144"
          onPress={calcularSoma}
        />
        <IconButton // Subtração
          icon="https://image.flaticon.com/icons/svg/25/25232.svg"
          color="#F94144"
          onPress={calcularSubtracao}
        />
        <IconButton // Multiplicação
          icon="https://image.flaticon.com/icons/svg/74/74341.svg"
          color="#F94144"
          onPress={calcularMultiplicacao}
        />
        <IconButton // Divisão
          icon="https://image.flaticon.com/icons/svg/149/149709.svg"
          color="#F94144"
          onPress={calcularDivisao}
        />
      </View>
      <DataTable /*Tabela de resultado*/>
        {result.map((
          tabuada // Mapeamento de valores para distribuição
        ) => (
          <DataTable.Row key={tabuada.resultado}>
            <DataTable.Cell>{tabuada.valor}</DataTable.Cell>
            <DataTable.Cell>{tabuada.operacao}</DataTable.Cell>
            <DataTable.Cell>{tabuada.sequencia}</DataTable.Cell>
            <DataTable.Cell>{tabuada.resultado}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}
