import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Container, Content} from 'native-base';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      countryData: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.getData(this.state.textValue);
  }
  getData(countryName) {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson', responseJson);
        this.setState({countryData: responseJson});
        if(this.state.countryData.length>0){
          this.props.navigation.navigate('CountryDetails', {
            countryData: this.state.countryData.filter(item=> item.name.includes(countryName)),
          });
        } 
        else{
          alert('no data found')
        }
        // this.setState({isLoading:true})
      })

      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log('countryDatarender', this.state.countryData);
    return (
      <Container>
        <Content>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <TextInput
              style={{
                height: 50,
                width: '70%',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#e2e2e2',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 17,
              }}
              placeholder="Enter Country Name"
              onChangeText={(text) => this.setState({textValue: text})}
              value={this.state.textValue}
            />
            {this.state.textValue.length > 0 ? (
              <TouchableOpacity
                style={{
                  backgroundColor: '#a3c01f',
                  width: '55%',
                  height: 45,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 30,
                }}
                onPress={() => {
                  this.getData(this.state.textValue);
                  // setTimeout(() => {
                  //   this.props.navigation.navigate('CountryDetails', {
                  //     countryData: this.state.countryData,
                  //   });
                  // }, 2000);
                }}
                activeOpacity={0.4}>
                <Text
                  style={{
                    color: '#FFF',
                    fontWeight: 'bold',
                    fontSize: 20,
                    letterSpacing: 1.8,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  backgroundColor: '#a3c08f',
                  width: '55%',
                  height: 45,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 30,
                }}
                activeOpacity={0.4}>
                <Text
                  style={{
                    color: '#FFF',
                    fontWeight: 'bold',
                    fontSize: 20,
                    letterSpacing: 1.8,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
