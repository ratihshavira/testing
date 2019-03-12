import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert
} from 'react-native';
import { getNewsDetail, getNewsId } from '../services/apiConfig'
import NewsList from './NewsList';
import {Header} from 'react-native-elements'

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      books: [
        {
          id: 19367850,
          title: 'Firefox Send: Free encrypted file transfer service',
          author: 'dnlserrano',
          date: '2019-03-12'
        },
        {
          id: 19367850,
          title: 'Firefox Send: Free encrypted file transfer service',
          author: 'dnlserrano',
          date: '2019-03-12'
        },
        {
          id: 19367850,
          title: 'Firefox Send: Free encrypted file transfer service',
          author: 'dnlserrano',
          date: '2019-03-12'
        }
      ]
    }
  }

  componentDidMount() {
    this.fetchNews()
  }

  fetchNews() {
    getNewsId()
      .then((res) => {
        let news = res.slice(0, 50)
        this.setState({ news })
        console.debug('sasasa', news)
      })
      .catch((e) => {
        Alert.alert('hahaha', news)
      })
  }

  renderItem = ({ item }) => (
    <NewsList
      id={item.id}
      title={item.title}
      author={item.author}
      date={item.date}
    />
  );

  keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'FAVORITES', style: { color: '#fff' } }}
        />
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <FlatList
          data={this.state.books}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
        <Text> {this.state.news}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
