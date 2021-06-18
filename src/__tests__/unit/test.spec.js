import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import WelcomeScreen from '../../screens/WelcomeScreen';

describe('Test', () => {
  it('should get increment', async () => {
    const { getByText, getByTestId } = render(<WelcomeScreen />);
    const counter = getByTestId('counter'); 
    console.log(counter)
    const button = getByText('Increment');
    await act(() => {
      fireEvent.press(button);
    });
    const numberText = getByText('1');
   
    expect(numberText).not.toBeFalsy();
  });
});
