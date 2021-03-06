import React from 'react';
import { ThemeProvider, ButtonGroup } from 'react-native-elements';

export default function buttonGroup() {


  const buttons = ['Food', 'List', 'Pay!'];
  const selectedIndex = 0;

  return (
    <ThemeProvider>
      <ButtonGroup
        underlayColor='#FFCCCC'
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 50 }}
      />
    </ThemeProvider>
  );

}