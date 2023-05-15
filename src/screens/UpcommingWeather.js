import react from "react"
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  FlatList,
  StatusBar
} from "react-native"
import { Feather } from "@expo/vector-icons"
import ListItem from "../components/ListItems"

const UpcommingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/upcomming-background.jpg")}
        style={styles.image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        ></FlatList>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1
  }
})
export default UpcommingWeather
