import React from 'react';

import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

function ContactList() {
  const contacts = [
    {
      id: 1,
      name: 'Shaik',
      status: 'Ordinary Student',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Ayesha',
      status: 'Top Performer',
      imageUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      id: 3,
      name: 'Rahul',
      status: 'Class Representative',
      imageUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      id: 4,
      name: 'Sonia',
      status: 'Creative Thinker',
      imageUrl: 'https://randomuser.me/api/portraits/women/55.jpg',
    },
    {
      id: 5,
      name: 'Arjun',
      status: 'Sports Enthusiast',
      imageUrl: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(items => (
          <View key={items.id} style={styles.userCard}>
            <Image
              source={{
                uri: items.imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{items.name}</Text>
              <Text style={styles.userStatus}>{items.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 12,
  },
});

export default ContactList;
