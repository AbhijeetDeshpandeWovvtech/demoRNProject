import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

class CountryWeather extends Component {
  render() {
    const weatherData = this.props.route.params.weatherData;
    console.log('weaterData==>', weatherData);
    return (
      <View style={styles.listContainer}>
        <View style={styles.listInnerContainer}>
          <Text style={styles.infoText}>
            <Text style={styles.titleText}>Capital Name:</Text>{' '}
            {weatherData.location != undefined
              ? weatherData.location.name
              : null}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.titleText}>Temperature:</Text>{' '}
            {weatherData.current != undefined
              ? weatherData.current.temperature
              : null}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.titleText}>Wind_speed:</Text>{' '}
            {weatherData.current != undefined
              ? weatherData.current.wind_speed
              : null}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.titleText}>Precip:</Text>{' '}
            {weatherData.current != undefined
              ? weatherData.current.precip
              : null}
          </Text>
        </View>

        <View style={styles.svgFlag}>
          <Image
            source={{
              uri:
                weatherData.current != undefined
                  ? weatherData.current.weather_icons[0]
                  : null,
            }}
            style={{height: 88, width: 88}}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    padding: 15,
    margin: 15,
    elevation: 15,
    shadowColor: '#000',
    backgroundColor: '#ffffff',
  },
  infoText: {
    fontSize: 16,
  },
  titleText: {
    color: '#444',
    fontWeight: 'bold',
  },
  svgFlag: {
    height: 100,
    width: 100,
    position: 'absolute',
    right: 0,
    top: 15,
  },
  listInnerContainer: {
    marginRight: 100,
    paddingRight: 10,
  },
});
export default CountryWeather;
