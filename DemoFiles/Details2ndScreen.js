import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Container, Content, Body, CardItem, Card} from 'native-base';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  render() {
    const astroidDataUpdated = this.props.route.params.astroidDetail;
    console.log(astroidDataUpdated, 'astroidDataUpdated');
    return (
      <View style={styles.cardItem}>
        <Text style={{fontSize: 16, marginRight: 95}}>
          <Text style={{fontWeight: 'bold'}}>Name:</Text>{' '}
          {astroidDataUpdated.name}
        </Text>
        <Text style={{fontSize: 16}}>
          <Text style={{fontWeight: 'bold'}}>Nasa_jpl_url:</Text>{' '}
          {astroidDataUpdated.nasa_jpl_url}
        </Text>
        <Text style={{fontSize: 16}}>
          <Text style={{fontWeight: 'bold'}}>
            Is_potentially_hazardous_asteroid:
          </Text>{' '}
          {astroidDataUpdated.is_potentially_hazardous_asteroid.toString()}
        </Text>
      </View>
    );
  }
}
export default Details;

const styles = StyleSheet.create({
  cardItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
