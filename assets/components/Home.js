import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card from './Card'

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View>
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
      <Card title="Home Card" content="This is the home screen." />
    </View>
    </ScrollView>
  )
}

export default Home