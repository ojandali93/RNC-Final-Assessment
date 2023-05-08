import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {data} from '../metal'

const BandsScreen = () => {
  return (
    <View>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.ID}
          renderItem={(item) => {
            return(
              <View style={styles.section}>
                <View style={styles.bandSection}>
                  {
                    item.item.split === "-"
                      ? <Text style={styles.split}>{item.item.band_name}</Text>
                      : <Text>{item.item.band_name}</Text>
                  }
                  <Text>{item.item.origin}</Text>
                </View>
                <View style={styles.bandSection}>
                  <Text>{item.item.formed}</Text>
                  <Text>{item.item.fans * 1000}</Text>
                </View>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    'paddingVertical': 8,
    'borderBottomColor': 'black',
    'borderBottomWidth': 2
  },
  bandSection: {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'space-between',
  },
  split: {
    'color': '#666',
    'textDecorationLine': 'line-through'
  }
})

export default BandsScreen