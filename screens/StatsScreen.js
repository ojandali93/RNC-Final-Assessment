import React, { useState, useEffect } from 'react'
import {View, Text,  StyleSheet} from 'react-native'
import {data} from '../metal'

const StatsScreen = () => {
  let bandFans = []
  let defaultCount = 0

  const count = data.length

  const active = data.filter(band => band.split === "-").length
  const split = count - active

  data.map((band) => {
    bandFans.push(band.fans)
  })

  const totalFans = bandFans.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue * 1000)
  })

  let countriesList = data.reduce((acc, value) =>
    acc.concat(value.origin),
  []);
  const countrySet = new Set(countriesList)
  const countries = Array.from(countrySet).length

  let bandStyleList = data.reduce((acc, value) =>
    acc.concat(value.style),
  [])
  const bandStyleSet = new Set(bandStyleList)
  const bandStyles = Array.from(bandStyleSet).length

  return (
    <View style={styles.section}>
      <Text>METAL</Text>
      <Text>Count: {count}</Text>
      <Text>Fans: {totalFans}</Text>
      <Text>Countries: {countries}</Text>
      <Text>Active: {active}</Text>
      <Text>Split: {split}</Text>
      <Text>Styles: {bandStyles}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    'display': 'flex',
    'width': '100%',
    'height': '100%', 
    'justifyContent': 'center',
    'alignItems': 'center',
  }
})

export default StatsScreen