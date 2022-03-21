import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";

const BookDetail = ( { book }) => {
   return (
     <View style={styles.ContainerStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{uri: book.image}}
          />
        </View>
      </View>  
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}>{book.title}</Text>
        <Text style={styles.headerContentStyle}>{book.author}</Text>
      </View>   
    </View>

  )};

const styles = StyleSheet.create({
  ContainerStyle:{
    padding: 5,
    flexDirection: 'column',
  },
  cardContainerStyle: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
  },
  headerContainerStyle: {
      flexDirection: "column",
      justifyContent: "space-around",
      paddingTop:10,
      paddingLeft: 8,
      width: 150,
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap:"nowrap",
    color: "#131313",
    width: '100%'
  },
  headerContentStyle: {
      fontSize: 15,
      fontWeight: '600',
      color: "#666666",
      width: '100%'
  },
  cardSectionStyle: {
      // padding: 5,
  },
  imageStyle: {
    height: 270,
    width: 190,
  }
});

export default BookDetail;
