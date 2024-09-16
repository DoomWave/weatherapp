import React from "react"
import { SafeAreaView,StyleSheet, Text, FlatList, View, StatusBar, ImageBackground } from "react-native"
import { Feather } from "@expo/vector-icons"

  
const DATA = [
    {
        dt_txt: "2024-05-10 12:00:00",
        main: {
            temp_max:  8.55,
            temp_min: 7.55,
        },
        weather: [
            {
                main: 'clear'
            }
        ]
    },
    {
        dt_txt: "2024-05-10 15:00:00",
        main: {
            temp_max:  8.55,
            temp_min: 7.55,
        },
        weather: [
            {
                main: 'clouds'
            }
        ]
    },
    {
    dt_txt: "2024-05-10 18:00:00",
    main: {
        temp_max:  8.55,
        temp_min: 7.55,
    },
    weather: [
        {
            main: 'rains'
        }
    ]
    }
]

const Item = ({props}: "any") => {
    const { dt_txt, min, max, condition } = props
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}
const UpcomingWeather = () => {
    const renderItem = ({Item}) => (
        <Item 
          condition={Item.weather[0].main}
          dt_txt={Item.dt_txt} 
          min={Item.main.temp_min}
          max={Item.temp_max}
         />
    )
    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <ImageBackground source={require('../assets/images/cloudy.jpg')} style={styles.image}>
            <FlatList
            data={DATA}
             renderItem={renderItem} 
             keyExtractor={(item) => item.dt_txt}
            />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue"
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20,
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    image: {
       flex: 1
    }
})

export default UpcomingWeather