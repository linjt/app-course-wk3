import React from 'react';
import { StyleSheet, Pressable, ScrollView, Text, View, Image, Button } from 'react-native';

import StarRating from 'react-native-star-rating';

const DetailScreen = ({ route }) => {
  const { title, 
    author,
    image,
    star,
    price,
    description
  } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
        <View style={styles.cardContainerStyle}>
          <Text style={{fontWeight:'bold',paddingTop:20,fontSize:30,textAlign:'center'}}> {title} </Text>
          <Text style={{fontWeight:'600',fontSize:18, textAlign:'center',color:"#666",paddingTop:5}}> {author} </Text>         
        </View>
        { star ?(
          <View style={styles.starcontainerStyle}>
            <StarRating
                disabled={true}
                maxStars={5}
                rating={star}
                fullStarColor="#FFC41F"
                starSize={25}
                letterSpacing={20}
                containerStyle = {{width: 150 ,marginRight:10}}
            />
            <Text style={{fontWeight:'600',fontSize:18, textAlign:'center',color:"#131313",paddingTop:10}}> {star}.0 </Text>         
            <Text style={{fontWeight:'600',fontSize:18, textAlign:'center',color:"#666",paddingTop:10}}> /5.0 </Text>   
          </View>
        ):null}
        <Text style={{lineHeight: 18,fontSize:15, textAlign:'center',marginTop:20, lineHeight:25 }}>{'\t'}{description}</Text>
        <View style={styles.cardContainerStyle}>
          <Pressable style={styles.button}>
            <Text style={{color:"#fff",letterSpacing:2,fontWeight:'bold',fontSize: 15}}>BUY NOW FOR ${price}</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20
  },  
  starcontainerStyle:{
    flex: 1,
    flexDirection:"row",
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 320,
    width: 220
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#6200EE',
    width:'100%',
  }
});

export default DetailScreen;
