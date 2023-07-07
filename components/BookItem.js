import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BookItem = ({containerStyle, book}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 16,
        }}
      >
        <View style={styles.leftView}>
          <Text style={styles.name}>
            {book.name}
          </Text>
          <Text>{book.author}</Text>
          <Text>{"status: " + book.status}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftView: {},
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
