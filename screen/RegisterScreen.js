import * as React from 'react';
import { View } from 'react-native';
import { Box, Heading, Image } from 'native-base';
import Colors from '../components/Colors';
import ButtonComponent from '../components/ButtonComponent';
import TextLeftIconComponent from '../components/TextLeftIconComponent';

function RegisterScreeen({ navigation }) {
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
        top="0"
        px="6"
        justifyContent="center">
        <Heading>Criar Conta</Heading>
        <TextLeftIconComponent
          icon="mail"
          placeholder="user@gmail.com"></TextLeftIconComponent>
        <TextLeftIconComponent
          icon="eye"
          placeholder="******"
          type="password"></TextLeftIconComponent>
        <TextLeftIconComponent
          icon="eye"
          placeholder="******"
          type="password"></TextLeftIconComponent>
        <ButtonComponent
          mt={4}
          w="100%"
          onPress={() => navigation.pop()}
          bg={Colors.main}
          color={Colors.white}>
          Salvar
        </ButtonComponent>
        <ButtonComponent
          mt={4}
          w="100%"
          bg={Colors.white}
          onPress={() => navigation.pop()}
          color={Colors.black}>
          Voltar
        </ButtonComponent>
      </Box>
    </Box>
  );
}

export default RegisterScreeen;
