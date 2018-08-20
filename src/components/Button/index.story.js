import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { ThemeProvider } from "emotion-theming";
import theme from "../../theme/theme"

storiesOf('Button', module)
  .add('with text', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </ThemeProvider>
      
  ))
  .add('with some emoji', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    </ThemeProvider>
  ));   