import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';

import { Icon } from 'react-native-elements';

export default class NewsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      iconColor: "grey"
    }
  }

  changeColor = () => {
    this.setState({ iconColor: "red" })
  }

    render() {
        return(
          <View style={styles.rowContainer}>
            <View style={styles.rowText}>
            <Text style={styles.id} numberOfLines={2} ellipsizeMode ={'tail'}>
                #{this.props.id}
              </Text>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                {this.props.title}
              </Text>
              <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>
                {this.props.author}
              </Text>
              <Text style={styles.date} numberOfLines={1} ellipsizeMode ={'tail'}>
                {this.props.date}
              </Text>
            </View>
            <View>
              <Icon name="ios-heart" type="ionicon" size={28} color={this.state.iconColor} onPress={this.changeColor}/>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 150,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777'
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  },
  id:{
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 14,
    color: '#777'
  },
  date:{
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 14,
    color: '#777',
    fontWeight: 'bold'
  }
  });
