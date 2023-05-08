import React, { useState, useEffect } from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {data} from '../metal'

const StylesScreen = () => {

  const currentStyles = []

  const [bandStyles, setBandStyles] = useState([])

  useEffect(() => {
    collectStyles()
  }, [])

  const collectStyles = () => {
    data.forEach((band) => {
      let currentBandStyle = band.style 
      let splitBandStyle = currentBandStyle.split(',')
      splitBandStyle.length === 1
        ? addSingleStyle(band.style)
        : addMultipleStyles(splitBandStyle)
    })
    console.log(currentStyles)
    setBandStyles(currentStyles)
  }

  const addSingleStyle = (bandStyle) => {
    currentStyles.includes(bandStyle)
      ? null
      : currentStyles.push(bandStyle)
  }

  const addMultipleStyles = (splitBandStyle) => {
    splitBandStyle.map((selectedStyle) => {
      currentStyles.includes(selectedStyle)
        ? null
        : currentStyles.push(selectedStyle)
    })
  }

  return (
    <View>
      {
        bandStyles.map((item, index) => {
          return(
            <View style={styles.section} key={index}>
              <Text>
                {item}
              </Text>
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    'paddingVertical': 8,
    'borderBottomColor': 'black',
    'borderBottomWidth': 2
  }
})

export default StylesScreen