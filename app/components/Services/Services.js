import React from 'react';
import { Button, List, ListItem } from 'react-native-elements';
import { View } from 'react-native';
import list from '../../data/Services';
import styles from './styles';

const Services = props => (
  <View>
    <List containerStyle={styles.listContainer}>
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
      titleStyle={styles.title}
      buttonStyle={styles.button}
      containerStyle={styles.buttonContainer}
      onPress={props.onPress}
    />
  </View>
);

export default Services;
