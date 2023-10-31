import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#ffd700", emoji: "⚡" };
    case "water":
      return { borderColor: "#6493ea", emoji: "💧" };
    case "fire":
      return { borderColor: "#ff5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66cc66", emoji: "🍀" };
    default:
      return { borderColor: "#a0a0a0", emoji: "🐧" };
  }
};

export default function PokenmonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={[style.card, { borderColor }]}>
      <View style={style.nameContainer}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.hp}>❤️{hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
        style={style.image}
        resizeMode="contain"
      />

      <View style={style.typeContainer}>
        <View style={[style.badge, { borderColor }]}>
          <Text style={style.typeEmohi}>{emoji}</Text>
          <Text style={style.typeText}>{type}</Text>
        </View>
      </View>

      <View style={style.movesContainer}>
        <Text style={style.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      <View style={style.weaknessesContainer}>
        <Text style={style.weaknessesText}>
          Weaknesses: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadownColor: "#333",
        shodowOpacity: 0.3,
        showdowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 28,
    fontWeight: "600",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 180,
    marginBottom: 18,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 4,
  },
  typeEmohi: {
    fontSize: 28,
    marginRight: 12,
  },
  typeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  weaknessesContainer: {
    marginBottom: 16,
  },
  weaknessesText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
