import * as React from "react";
import { StatusBar } from "react-native";
import { BottomNavigation } from "react-native-paper";
import Media from "./pages/Media";
import Primos from "./pages/Primos";
import Calculadora from "./pages/Calculadora";
import Tabuada from "./pages/Tabuada";
import MMC from "./pages/MMC";
import MDC from "./pages/MDC";

StatusBar.setHidden(true);

const TabuadaRoute = () => <Tabuada />;
const PrimosRoute = () => <Primos />;
const MMCRoute = () => <MMC />;
const MDCRoute = () => <MDC />;
const MediaRoute = () => <Media />;
const CalculadoraRoute = () => <Calculadora />;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: "tabuada",
        accessibilityLabel: "Tabuada",
        title: "Tabuada",
        icon: "https://image.flaticon.com/icons/svg/3074/3074033.svg",
        color: "#F94144",
      },
      {
        key: "primos",
        accessibilityLabel: "Números Primos",
        title: "Primos",
        icon: "https://image.flaticon.com/icons/svg/66/66116.svg",
        color: "#F3722C",
      },
      {
        key: "mmc",
        accessibilityLabel: "MMC",
        title: "MMC",
        icon: "https://image.flaticon.com/icons/svg/74/74341.svg",
        color: "#F8961E",
      },
      {
        key: "mdc",
        accessibilityLabel: "MDC",
        title: "MDC",
        icon: "https://image.flaticon.com/icons/svg/149/149709.svg",
        color: "#90BE6D",
      },
      {
        key: "media",
        accessibilityLabel: "Média",
        title: "Média",
        icon: "https://image.flaticon.com/icons/svg/43/43062.svg",
        color: "#43AA8B",
      },
      {
        key: "calculadora",
        accessibilityLabel: "Calculadora",
        title: "Calculadora",
        icon: "calculator",
        color: "#577590",
      },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    tabuada: TabuadaRoute,
    primos: PrimosRoute,
    mmc: MMCRoute,
    mdc: MDCRoute,
    media: MediaRoute,
    calculadora: CalculadoraRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        inactiveColor="#fff"
      />
    );
  }
}
