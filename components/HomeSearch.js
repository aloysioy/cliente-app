import { HStack, Input, Box } from 'native-base'
import { Pressable } from 'react-native';
import Colors from "./Colors"
import { FontAwesome5 } from '@expo/vector-icons';

function HomeSearch({mt,bg,color,children,onPress}) {
  return (
    <HStack space={3} w="full" px={3}
          bg={Colors.main} py={4} alignItems="center" safeAreaTop >
      <Input placeholder="ioga, massagem, ..." w="90%"
          _focus={{ bg: Colors.white, }} variant="filled"
          bg={Colors.white} type="search" h={12} borderwidth={0} />
      <Pressable ml={3}>
        <FontAwesome5 name="search" size={22} color={Colors.white} />
      </Pressable>
    </HStack>
  )
}

export default HomeSearch