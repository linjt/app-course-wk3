import React from "react";
import { View, Text, FlatList, SectionList, StyleSheet } from "react-native";
import PopularBooksDetail from "./PopularBooksDetail";
import NewestDetail from "./NewestDetail";
import sections from "../json/book_section.json";

const BookList = ({ navigation }) => {
  const renderItem = ({ item, section }) => {
    if (section.starRating) {
      return null;
    }
    return (
      <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <PopularBooksDetail style={styles.PopularBooksContainer} book={item}/>}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      
    )
  };
  const renderSectionHeader = ({section}) => (
    <View>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.starRating ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <NewestDetail book={item} navigation={navigation}/>}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </View>
  );
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
