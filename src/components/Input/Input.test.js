import { getByPlaceholderText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Input from './Input';

describe('Input', () => {
  it('should be in the document after render', () => {
    const { getByRole } = render(<Input />);
    expect(getByRole('textbox')).toBeInTheDocument();
  });
  it('should have right placeholder message after render', () => {
    const { getByPlaceholderText } = render(<Input placeholder={'Title'} />);
    expect(getByPlaceholderText('Title')).toBeInTheDocument();
  });

  it('Rendered input should have valid value', () => {
    const { getByRole } = render(<Input value={'Test value'} />);
    expect(getByRole('textbox')).toHaveValue('Test value');
  });
});
