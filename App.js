import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import OperatorButton from './components/OperatorButton';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const buttons = [
    'C',
    'DEL',
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];

  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
      maxWidth: '100%',
      minWidth: '35%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      maxHeight: 45,
      color: '#ff6666',
      margin: 15,
      fontSize: 35,
    },
    historyText: {
      color: darkMode ? '#b5b7bb' : '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    themeButton: {
      alignSelf: 'flex-start',
      bottom: '5%',
      margin: 15,
      backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      borderColor: darkMode ? '#3f4d5b' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '24%',
      minHeight: '24%',
      flex: 2,
    },
    textButton: {
      color: darkMode ? '#b5b7bb' : '#7c7c7c',
      fontSize: 28,
    },
  });

  const handleInput = (btnPressed) => {
    if (
      btnPressed === '+' ||
      btnPressed === '-' ||
      btnPressed === '*' ||
      btnPressed === '/'
    ) {
      setCurrentNumber(currentNumber + btnPressed);
      return;
    }
  };

  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Icon
            name={darkMode ? 'light-up' : 'moon'}
            size={24}
            color={darkMode ? 'white' : 'black'}
            onPress={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}
          />
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((btn) => {
          switch (btn) {
            case '=':
            case '/':
            case '*':
            case '-':
            case '+':
              <OperatorButton
                btn={btn}
                handleInput={(btnPressed) => handleInput(btnPressed)}
                styles={[styles.buttons, {backgroundColor: '#ff6666'}]}
                textStyles={[styles.textButton, {color: 'white', fontSize: 28}]}
              />;
              break;
            case '0':
              <OperatorButton
                key={btn}
                styles={[
                  styles.buttons,
                  {
                    backgroundColor:
                      typeof btn === 'number'
                        ? darkMode
                          ? '#303946'
                          : '#fff'
                        : darkMode === true
                        ? '#414853'
                        : '#ededed',
                    minWidth: '36%',
                  },
                ]}
                textStyles={[styles.textButton]}
              />;
              break;
            case '.':
            case 'DEL':
              <OperatorButton
                key={btn}
                styles={[
                  styles.buttons,
                  {
                    backgroundColor:
                      btn === '.'
                        ? darkMode
                          ? '#303946'
                          : '#fff'
                        : darkMode === true
                        ? '#414853'
                        : '#ededed',
                    minWidth: '37%',
                  },
                ]}
                textStyles={[styles.textButton]}
              />;
              break;
            case 'C':
              <OperatorButton
                key={btn}
                styles={[
                  styles.buttons,
                  {
                    backgroundColor:
                      btn === '.'
                        ? darkMode
                          ? '#303946'
                          : '#fff'
                        : darkMode === true
                        ? '#414853'
                        : '#ededed',
                    minWidth: '37%',
                  },
                ]}
                textStyles={[styles.textButton]}
              />;
              break;
            default:
              <OperatorButton
                key={btn}
                styles={[
                  styles.buttons,
                  {
                    backgroundColor:
                      typeof btn === 'number'
                        ? darkMode
                          ? '#303946'
                          : '#fff'
                        : darkMode === true
                        ? '#414853'
                        : '#ededed',
                  },
                ]}
                textStyles={[styles.textButton]}
              />;
              break;
          }
        })}
      </View>
    </View>
  );
}
