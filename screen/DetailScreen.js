import * as React from 'react';
import { Box, StyleSheet, Heading, Image, Text, View } from 'native-base';
import Colors from '../components/Colors';
import ButtonComponent from '../components/ButtonComponent';

import prof from '../data/prof';

function DetailScreen({ navigation }, id) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="1920"
        w="full"
        source={require('../assets/images/capa.jpg')}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        justifyContent="center"
        top="0"
        px="0">
        <View justifyContent="center">
          <Image
            source={{ uri: prof.image }}
            alt={prof.name}
            //borderRadius style will help us make the Round Shape Image
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
          />
          <Text color={Colors.white}>About React</Text>
        </View>
        <Text color={Colors.white}>{prof.description}</Text>
        <Text color={Colors.white}>Infraestrutura</Text>
        {prof.facilities.map((lista) => (
          <Text key={lista.toString()} color={Colors.white}>
            {lista}
          </Text>
        ))}
        <Text color={Colors.white}>Horarios Livres</Text>
        {prof.schedule.map((lista) => (
          <Text key={lista.data.toString()} color={Colors.white}>
            {lista.data}
            {lista.time.map((agenda) => (
              <Text key={agenda.toString()} color={Colors.white}>
                &nbsp;{agenda}
              </Text>
            ))}
          </Text>
        ))}
        <ButtonComponent
          mt={4}
          w="100%"
          onPress={() => navigation.pop()}
          bg={Colors.main}
          color={Colors.white}>
          Voltar
        </ButtonComponent>
      </Box>
    </Box>
  );
}

export default DetailScreen;
