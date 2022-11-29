import React from 'react';
import Input from '../../components/Input';
import {
  CheckoutFormContainer,
  FieldWrapper,
  CheckoutWrapper,
} from './styled.js';
import { useForm, Controller } from 'react-hook-form';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import InputMask from 'react-input-mask';
import CheckoutItemCard from '../../containers/CheckoutItemCard';

function Checkout() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {};

  return (
    <div>
      <PageTitle>Checkout collection item</PageTitle>
      <CheckoutWrapper>
        <CheckoutItemCard />
        <CheckoutFormContainer onSubmit={handleSubmit(onSubmit)}>
          <FieldWrapper>
            <Input
              fromForm
              placeholder={'email'}
              {...register('email', {
                required: 'Email is required',
                minLength: {
                  value: 4,
                  message: 'Min length is 4',
                },
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email must be in format 'example@mail.com' ",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage text={errors.email?.message}></ErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Input
              fromForm
              placeholder={'card holder'}
              {...register('cardholder', {
                required: 'Card holder name is required',
                minLength: {
                  value: 4,
                  message: 'Min length is 4',
                },
              })}
            />
            {errors.cardholder && (
              <ErrorMessage text={errors.cardholder?.message}></ErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Controller
              defaultValue={''}
              rules={{
                required: 'Card number is required',
                minLength: {
                  value: 19,
                  message: 'Min length is 16 numbers',
                },
              }}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  value={value}
                  onChange={onChange}
                  mask="9999 9999 9999 9999"
                  maskChar={null}
                >
                  {(inputProps) => (
                    <Input
                      placeholder={'0000 0000 0000 0000'}
                      type={'text'}
                      {...inputProps}
                    />
                  )}
                </InputMask>
              )}
              control={control}
              name="card"
            />
            {errors.card && (
              <ErrorMessage text={errors.card?.message}></ErrorMessage>
            )}
          </FieldWrapper>

          <Button disabled={!isValid} success>
            Checkout
          </Button>
        </CheckoutFormContainer>
      </CheckoutWrapper>
    </div>
  );
}

export default Checkout;
