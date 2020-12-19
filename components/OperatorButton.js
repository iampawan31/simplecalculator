import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

function OperatorButton({btn, styles, textstyles, handleInput}) {
  return (
    <TouchableOpacity key={btn} style={styles} onPress={() => handleInput(btn)}>
      <Text style={textstyles}>{btn}</Text>
    </TouchableOpacity>
  );
}

export default OperatorButton;
