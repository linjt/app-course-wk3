import React from "react";
import { View, Text, FlatList, SectionList, StyleSheet } from "react-native";
import BookDetail from "./BookDetail";
import sections from "../json/book_section.json";

const BookList = ({ navigation }) => {
  const renderSectionHeader = ({section}) => (
    <View>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      <FlatList
        horizontal={true}
        data={section.data}
        renderItem={({ item }) => <BookDetail star={section.starRating} book={item} navigation={navigation}/>}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.title }
      />
    </View>
  );
  const renderItem = () => {
      return null;
  };
  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10, }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    textTransform: 'uppercase',
  },
  PopularBooksContainer:{
    flexDirection:"row"
  }
})

export default BookList;
