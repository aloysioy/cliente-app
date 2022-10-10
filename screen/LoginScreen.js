import * as React from 'react';
import { Box, Heading, Image } from 'native-base';
import Colors from '../components/Colors';
import ButtonComponent from '../components/ButtonComponent';
import TextLeftIconComponent from '../components/TextLeftIconComponent';

function LoginScreen({ navigation }) {
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
        <Heading>LOGIN</Heading>
          <TextLeftIconComponent
            icon="mail"
            placeholder="user@gmail.com"></TextLeftIconComponent>
          <TextLeftIconComponent
            icon="eye"
            placeholder="******"
            type="password"></TextLeftIconComponent>
        <ButtonComponent
          mt={4}
          w="100%"
          onPress={() => navigation.push('Home')}
          bg={Colors.main}
          color={Colors.white}>
          Entrar
        </ButtonComponent>
        <ButtonComponent
          mt={4}
          w="100%"
          bg={Colors.white}
          onPress={() => navigation.push('Register')}
          color={Colors.black}>
          Registrar
        </ButtonComponent>
      </Box>
    </Box>
  );
}

export default LoginScreen;
