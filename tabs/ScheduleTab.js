import * as React from 'react';
import { Box, ScrollView, Image, VStack } from 'native-base';

import Colors from '../components/Colors';
import HomeSearch from '../components/HomeSearch';
import CardProfessional from '../components/CardProfessional';

import schedules from '../data/schedules';

function ScheduleTab({ navigation }) {
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
      <Box w="full" h="full" position="absolute" top="0" px="0">
        <HomeSearch />
        <ScrollView flex={1}>
          {schedules.map((lista) => (
            <CardProfessional key={lista._id.toString()}
              navigation={navigation}
              id={lista._id}
              name={lista.name}
              image={lista.image}
              description={lista.schedule}
            />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ScheduleTab;
