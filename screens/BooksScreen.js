import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Books from '../assets/Books'
import BookItem from '../components/BookItem'

const BooksScreen = ({navigation}) => {
  return (
    <View>
    <ScrollView>
        {Books
          .map((book) => (
            <BookItem
              key={book.id.toString()}
              book={book}
              containerStyle={styles.listItem}
            />
          ))}
    </ScrollView>
    </View>
  )
}

export default BooksScreen

const styles = StyleSheet.create({
    listItem: {
        marginHorizontal: 16,
        marginTop: 16,
      },
    
})