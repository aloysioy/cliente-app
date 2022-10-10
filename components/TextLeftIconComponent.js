import React from 'react'
import { Input } from 'native-base';
import Colors from './Colors';
import { Ionicons } from '@expo/vector-icons';

function TextLeftIconComponent({icon, placeholder, type, width}) {
  return (
    <Input  color={Colors.main}
      InputLeftElement={
        <Ionicons name={ icon || "xx"} size={20} color={Colors.main}>
        </Ionicons>
      }
      placeholder= { placeholder || "placeholder"}
      variant="underlined"
      type={ type || "text"}
      borderBottomColor={Colors.underline}
      pl={2} w={ width || "full"} >
    </Input>
  )
}

export default TextLeftIconComponent