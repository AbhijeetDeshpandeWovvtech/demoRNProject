import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button} from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View >
        <Text>You have {this.props.subject.current.length} subjects.</Text>
        <Button
          title="Select more subjects"
          onPress={() => this.props.navigation.navigate('Subject')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {subject} = state;
  return {subject};
};

export default connect(mapStateToProps)(Home);
