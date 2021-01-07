import React from 'react';
import {connect} from 'react-redux';
import {Text, View, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import {addSubject} from './SubjectsActions';

class Subject extends React.Component {
  render() {
    return (
      <View>
        <Text>Select Subjects Below!</Text>

        {this.props.subject.all_subjects.map((subject, index) => (
          <Button
            key={subject}
            title={`Add ${subject}`}
            onPress={() => this.props.addSubject(index)}
          />
        ))}

        <Button
          title="Back to home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {subject} = state;
  return {subject};
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addSubject,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Subject);

//export default connect(mapStateToProps)(Subject);
