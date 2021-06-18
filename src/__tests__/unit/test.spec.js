import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import WelcomeScreen from '../../screens/WelcomeScreen';

describe('Test', () => {
  it('should get increment', async () => {
    const { getByText } = render(<WelcomeScreen />);
    const button = getByText('Increment');
    await act(() => {
      fireEvent.press(button);
    });
    const numberText = getByText('1');
    // const getIncrement = () => {};
    expect(numberText).not.toBeFalsy();
  });
});
