import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import Rowtext from "../components/RowText"
import { Feather } from "@expo/vector-icons"
import { weatherType } from "../utilities/weatherType"

const CurrentWeather = ({ weatherData }) => {
  console.log("this is the weather data", weatherData)
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={styles.tempStyles}>{`${Math.round(temp)}°C`}</Text>
        <Text style={styles.feel}>{`Feels Like ${Math.round(
          feels_like
        )}°C`}</Text>
        <Rowtext
          messageOne={`High: ${Math.round(temp_max)}°C`}
          messageTwo={`Low: ${Math.round(temp_min)}°C`}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
      </View>
      <Rowtext
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={styles.bodyWrapper}
        messageOneStyles={styles.description}
        messageTwoStyles={styles.description}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "hotpink"
  },
  tempStyles: {
    color: "black",
    fontSize: 48
  },
  feel: {
    color: "black",
    fontSize: 30
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather
