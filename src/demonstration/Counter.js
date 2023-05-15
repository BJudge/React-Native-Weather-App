import React, { useState, useEffect } from "react"
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`count changed`)
  }, [count])

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={"red"}
        title={"Decrease the count"}
        onPress={() => {
          setCount(count - 1)
        }}
      />
      <Button
        color={"green"}
        title={"Increase the count"}
        onPress={() => {
          setNewCount(count + 1)
        }}
      />
      <Button
        color={"green"}
        title={"Decrease the count"}
        onPress={() => {
          setNewCount(count - 1)
        }}
      />
      {/* </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25
  }
})
export default Counter
