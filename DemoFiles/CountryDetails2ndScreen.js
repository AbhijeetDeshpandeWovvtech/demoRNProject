import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SvgUri} from 'react-native-svg';

const CardComponent = ({name, capital, population, latlng, flag, onPress}) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#FFF',
        marginBottom: 15,
        borderRadius: 10,
        elevation: 15,
        shadowColor: '#000',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          paddingVertical: 5,
        }}>
        <Text>Name</Text>
        <Text>{name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          paddingVertical: 5,
        }}>
        <Text>Capital</Text>
        <Text>{capital}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          paddingVertical: 5,
        }}>
        <Text>population</Text>
        <Text>{population}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          paddingVertical: 5,
        }}>
        <Text>latIng</Text>
        <Text>{latlng}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          paddingVertical: 5,
          alignItems: 'center',
        }}>
        <SvgUri width="100" height="80" uri={flag} />

        <TouchableOpacity
          style={{
            backgroundColor: '#110D8E',
            width: '50%',
            height: 35,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            marginBottom: 10,
          }}
          onPress={() => onPress()}
          activeOpacity={0.4}>
          <Text style={{color: '#FFF', fontWeight: 'bold', letterSpacing: 1.8}}>
            capital weather
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      weatherData: [],
    };
  }

  getWeather = (capital) => {
    this.setState({isLoading: true});
    return fetch(
      'http://api.weatherstack.com/current?access_key=76a9a3cb13371d78f09aa388b93c95fe&QUERY=' +
        capital,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.navigation.navigate('CountryWeather', {
          weatherData: responseJson,
        });
        this.setState({wheaterData: responseJson});
        this.setState({isLoading: false});
        console.log('responseJson==>', responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  renderItem = ({item}) => (
    <CardComponent
      name={item.name}
      capital={item.capital}
      population={item.population}
      latlng={item.latlng[0]}
      flag={item.flag}
      // onPress={() => this.props.navigation.navigate('CountryWeather')

      // }
      onPress={() => this.getWeather(item.capital)}
    />
  );
  render() {
    const countryData = this.props.route.params.countryData;
    return (
      <View style={styles.container}>
        <FlatList
          data={countryData}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{paddingHorizontal: 10, marginTop: 10}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CountryDetails;
