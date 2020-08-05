import React, { useState } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Repository from '~/components/Repository';
import { Container, Title, Form, Input, Submit, List } from './styles';

export default function Main() {
 


  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          autocapitalize="none"
          autocorrect={false}
          placeholder="Procurar por repositório"
        ></Input>
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#fff" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'unform',
            description:  'descricao do repositorio',
            stars: 123,
            forks: 1234,
          },
        ]}
        keyExtractor={ item => String(item.id) }
        renderItem={( { item } ) => (
          <Repository data={{item}} />
        )} />
    </Container>
  );
}