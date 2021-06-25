import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import WelcomeScreen from '../../screens/WelcomeScreen';

describe('Test', () => {
  it('should get increment', async () => {
    const { getByText, getByTestId } = render(<WelcomeScreen />);
    const input = getByTestId('input');
    const counter = getByTestId('counter');
    const initialValue = Number(counter.children[0]);

    const button = getByText('Increment');
    const stepValue = 2;

    act(() => {
      fireEvent.changeText(
        input,
        `${stepValue}` /** String(stepValue); stepValue.toString(); stepValue + '' */,
      );
    });
    act(() => {
      fireEvent.press(button);
    });

    const finalValue = Number(counter.children[0]);

    expect(finalValue).toBe(initialValue + stepValue);
  });
});
