import React from 'react';

import {  ScrollView, View } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList(){

  const user1 = {
    id: '1',
    text: 'Texto de teste',
    user: {
      name: 'Andre',
      avatar_url: '',
    }
  }
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
      >
      <Message data={user1} />
      <Message data={user1} />
      <Message data={user1} />
    </ScrollView>
     
  );
}