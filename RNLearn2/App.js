import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokenmonCard from "./components/PokenmonCard";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/poken4.png"),
    type: "fire",
    hp: 79,
    moves: ["scratch", "ember", "growl", "leer"],
    weaknesses: ["water", "rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/poken2.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/poken1.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/poken3.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokenmonCard {...charmanderData} />
        <PokenmonCard {...pikachuData} />
        <PokenmonCard {...bulbasaurData} />
        <PokenmonCard {...squirtleData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 35 : 20,
  },
});
