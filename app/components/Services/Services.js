import React, { Component } from 'react';
import { Button, List, ListItem } from 'react-native-elements';
import { Dimensions, View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const list = [
  {
    name: 'Muscle Recovery',
    avatar_url:
      'data:image/jpeg;base64,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',
    subtitle: '$35.99',
  },
  {
    name: 'Migraine',
    avatar_url:
      'data:image/jpeg;base64,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',
    subtitle: '$42.99',
  },
  {
    name: 'Flu',
    avatar_url:
      'data:image/jpeg;base64,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',
    subtitle: '$109.99',
  },
  {
    name: 'Weight Loss',
    avatar_url:
      'data:image/jpeg;base64,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',
    subtitle: '$23.99',
  },
];

class Services extends Component {
  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {list.map((listItem, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: listItem.avatar_url }}
              key={i}
              title={listItem.name}
              subtitle={listItem.subtitle}
            />
          ))}
        </List>
        <Button
          title="Confirm Service"
          titleStyle={{ fontWeight: '900', color: '#371B92' }}
          buttonStyle={{
            backgroundColor: 'white',
            width: width / 1.75,
            height: height / 15,
            borderColor: '#371B92',
            borderWidth: 2,
            borderRadius: 25,
          }}
          containerStyle={{ marginTop: 20 }}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

export default Services;
