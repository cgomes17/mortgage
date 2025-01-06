import { FieldError } from 'react-hook-form';
import ControlError from './control-error/control-error';

export const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const phonePattern = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/i;

export const errorValidation = (
  fieldError: FieldError | undefined
): {
  colour: 'error' | undefined;
  helperText: JSX.Element;
} => ({
  colour: fieldError ? 'error' : undefined,
  helperText: <ControlError error={fieldError} />,
});
