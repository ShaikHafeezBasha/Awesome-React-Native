import React from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';

import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import AppPro from './AppPro';

function App() {
  return (
    <View>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({});

export default App;
