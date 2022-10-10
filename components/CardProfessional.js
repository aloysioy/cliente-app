import { Pressable } from 'react-native';
import { Box, HStack, Center, Image, VStack, Text, View } from 'native-base';
import Colors from "./Colors";

const CardProfessional = props => {
  return (
    <View key={props.id.toString()}>
      <Pressable
        onPress={() => props.navigation.navigate('Detail')}
      >
        <Box ml={2} mt={1} mr={2}>
          <HStack alignItems="center" bg={Colors.white}
            shadow={1} rounded={10} overflow="hidden">
            <VStack w="70%" px={2}>
              <Text isTruncated color={Colors.black} bold fontSize={14}>
                {props.name}
              </Text>
              <Text isTruncated color={Colors.black} fontSize={12}>
                {props.description}
              </Text>
            </VStack>
            <Center w="30%" bg={Colors.white}>
              <Image source={{ uri: props.image }} w="full" ml={2} mr={4}
                rounded={10} alt={props.name} h="100" resizeMode="contain" />
            </Center>
          </HStack>
        </Box>
      </Pressable>
    </View>

  )
}

export default CardProfessional