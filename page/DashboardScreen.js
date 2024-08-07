import { Image, TextInput, StyleSheet, View, StatusBar, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useContext, useEffect } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Swiper from 'react-native-swiper'

const DashboardScreen = ({ navigation }) =>  {
  const [search, setSearch] = useState('');

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.head}>
        <View style={styles.addressView}>
          <Entypo name="location-pin" size={24} color="#ffffff" />
          <Text style={styles.addressText}>14, Abimbola, str....</Text>
          <FontAwesome5 name="angle-down" size={24} color="#ffffff" />
        </View>
        <View style={styles.addressView}>
            <TouchableOpacity style={styles.headTab}>
              <Text style={styles.headTabText}>Pickup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headTab}>
              <Text style={styles.headTabText}>Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headTab}>
              <Text style={styles.headTabText}>Under 30 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headTab}>
              <Text style={styles.headTabText}>Price</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.addressView}>
          <AntDesign style={styles.iconInputBox} name="search1" size={24} color="#828282" />
          <TextInput
            style={styles.inputBox}
            placeholder="Search"
            placeholderTextColor={"#828282"}
            onChangeText={text => setSearch(text)}
            cursorColor={"#828282"}
          />
        </View>
      </View>
      <View style={styles.foodViewCard}>
        <View style={styles.foodView}>
          <TouchableOpacity style={styles.foodImage}>
              <Image
                source={require('../assets/image/carb.png')} 
              />
              <Text style={styles.foodText}>Carbs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foodImage}>
              <Image
                source={require('../assets/image/drinks.png')} 
              />
              <Text style={styles.foodText}>Drinks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foodImage}>
              <Image
                source={require('../assets/image/africa.png')} 
              />
              <Text style={styles.foodText}>African</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foodImage}>
              <Image
                source={require('../assets/image/snack.png')} 
              />
              <Text style={styles.foodText}>Snacks</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.foodViewCard}>
        <View style={styles.foodView}>
          <TouchableOpacity style={styles.foodImage}>
              <Image
                source={require('../assets/image/protein.png')} 
              />
              <Text style={styles.foodText}>Protein</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foodImage}>
              <Image
                source={require('../assets/image/fruit.png')} 
              />
              <Text style={styles.foodText}>Fruits</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foodImage}>
              <Image
                source={require('../assets/image/shamarma.png')} 
              />
              <Text style={styles.foodText}>Shawarma</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foodImage}>
              <Image
                source={require('../assets/image/icream.png')} 
              />
              <Text style={styles.foodText}>Ice Cream</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.slideWrapper}>
        <Swiper height="100" showsButtons loop={false}>
        <View testID="Hello" style={styles.slide1}>
          <Image
            source={require('../assets/image/foodCard.png')} 
            style={styles.foodBannerImage}
          />
        </View>
        <View testID="Hello" style={styles.slide1}>
          <Image
            source={require('../assets/image/foodPlate.png')} 
            style={styles.foodBannerImage}
          />
        </View>
      </Swiper>
      <Text style={styles.slideText}>Popular Restaurants</Text>
      </View>
      <View style={styles.foodBanner}>
        <Image
            source={require('../assets/image/food.png')} 
            style={styles.foodBannerImage}
          />
          <View style={styles.foodBannerTextBody}>
            <View>
              <Text style={styles.foodBannerTextBold}>The Place</Text>
              <Text style={styles.foodBannerTextFait}>Fries, Chicken. Drinks. Popc....</Text>
              <View style={styles.foodBannerTextWrap}>
                <Text style={styles.foodBannerText}>4.4 </Text>
                <AntDesign name="star" size={14} color="black" />
                <Text style={styles.foodBannerText}> 1,000+ rating</Text>
              </View>
            </View>
            <View style={styles.foodBannerTextLeft}>
              <AntDesign style={styles.foodBannerTextLeft} name="hearto" size={24} color="#2C302E" />
              <Text style={[styles.foodBannerTextFait, styles.foodBannerTextLeft]}>100 ft . 15 min</Text>
              <Text style={[styles.foodBannerText, styles.foodBannerTextLeft]}>₦1,000 delivery fee</Text>
            </View>
          </View>
      </View>
      <View style={styles.foodBanner}>
        <Image
            source={require('../assets/image/pizza.png')} 
            style={styles.foodBannerImage}
          />
          <View style={styles.foodBannerTextBody}>
            <View>
              <Text style={styles.foodBannerTextBold}>Kings of Wings</Text>
              <Text style={styles.foodBannerTextFait}>Fries, Chicken. Drinks. Popc....</Text>
              <View style={styles.foodBannerTextWrap}>
                <Text style={styles.foodBannerText}>4.4 </Text>
                <AntDesign name="star" size={14} color="black" />
                <Text style={styles.foodBannerText}> 1,000+ rating</Text>
              </View>
            </View>
            <View style={styles.foodBannerTextLeft}>
              <AntDesign style={styles.foodBannerTextLeft} name="hearto" size={24} color="#2C302E" />
              <Text style={[styles.foodBannerTextFait, styles.foodBannerTextLeft]}>100 ft . 15 min</Text>
              <Text style={[styles.foodBannerText, styles.foodBannerTextLeft]}>₦1,000 delivery fee</Text>
            </View>
          </View>
      </View>
      <View style={styles.foodBanner}>
        <Image
            source={require('../assets/image/pizza.png')} 
            style={styles.foodBannerImage}
          />
          <View style={styles.foodBannerTextBody}>
            <View>
              <Text style={styles.foodBannerTextBold}>Chicken Republic</Text>
              <Text style={styles.foodBannerTextFait}>Fries, Chicken. Drinks. Popc....</Text>
              <View style={styles.foodBannerTextWrap}>
                <Text style={styles.foodBannerText}>4.4 </Text>
                <AntDesign name="star" size={14} color="black" />
                <Text style={styles.foodBannerText}> 1,000+ rating</Text>
              </View>
            </View>
            <View style={styles.foodBannerTextLeft}>
              <AntDesign style={styles.foodBannerTextLeft} name="hearto" size={24} color="#2C302E" />
              <Text style={[styles.foodBannerTextFait, styles.foodBannerTextLeft]}>100 ft . 15 min</Text>
              <Text style={[styles.foodBannerText, styles.foodBannerTextLeft]}>₦1,000 delivery fee</Text>
            </View>
          </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  head: {
    textAlign: "center",
    backgroundColor: "#1B7A41",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingBottom: 15
  },
  addressText: {
    color: '#ffffff',
    marginHorizontal: 10
  },
  addressView: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10
  },
  headTab: {
    borderRadius: 10,
    backgroundColor: '#429061',
    padding: 10,
    marginRight: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  headTabText: {
    color: '#ffffff',
  },
  iconInputBox: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: 8,
    paddingLeft: 5,
  },
  inputBox: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: '80%',
    height: 40,
  },
  foodViewCard: {
    padding: 1,
  },
  foodView: {
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10
  },
  foodImage: {
    textAlign: 'center'
  },
  foodText: {
    textAlign: 'center'
  },
  foodBanner: {
    padding: 10,
    marginTop: 40
  },
  foodBannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 20
  },
  foodBannerTextBold: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  foodBannerTextWrap: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  foodBannerTextBody: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  foodBannerTextFait: {
    color: '#000',
    fontWeight: '500'
  },
  foodBannerText: {
    color: '#2E3230'
  },
  foodBannerTextLeft: {
    textAlign: 'right'
  },
  slideWrapper: {
    padding: 10,
  },
  slideText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default DashboardScreen