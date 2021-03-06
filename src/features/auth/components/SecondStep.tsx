import { ChangeEvent, ReactNode } from 'react';
import { Box, Input } from '@chakra-ui/react';
import { FileUpload } from 'components/FileUpload';

import { FormData } from '../pages/Register';
import { FormHeader } from './FormHeader';
import { FormInput } from './FormInput';

export type SecondStepProps = {
  form: FormData;
  handleChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  buttons: ReactNode;
  isPrivateAccount: boolean;
};
export const SecondStep = ({ buttons, form, handleChange, isPrivateAccount }: SecondStepProps) => {
  const { street, postCode, city, region, name, email, password, repeatPassword, phone, krs, avatar } = form;

  return (
    <Box m={10}>
      <FormHeader
        textMain="Dane konta"
        textDescription={
          isPrivateAccount
            ? 'Dzięki nim inni będą w stanie odnaleźć Cię na portalu i nawiązać z Tobą kontakt.'
            : 'Dzięki nim inni będą w stanie odnaleźć Twoje schronisko na portalu i nawiązać z nim kontakt.'
        }
      />
      <FormInput
        text={isPrivateAccount ? 'Imię i nazwisko' : 'Nazwa schroniska'}
        input={
          <Input
            placeholder={isPrivateAccount ? 'Imię i nazwisko' : 'Nazwa schroniska'}
            name="name"
            onChange={handleChange}
            value={name}
          />
        }
      />
      {!isPrivateAccount && (
        <FormInput
          text="Numer KRS"
          input={<Input placeholder="Numer KRS" name="krs" onChange={handleChange} value={krs} />}
        />
      )}
      <FormInput
        text="Email"
        input={<Input placeholder="Email" name="email" onChange={handleChange} value={email} />}
      />
      <FormInput
        text="Numer telefonu"
        input={<Input placeholder="Phone" name="phone" onChange={handleChange} value={phone} />}
      />
      <FileUpload
        label={isPrivateAccount ? 'Zdjęcie profilowe' : 'Logo schroniska'}
        onChange={handleChange}
        name="avatar"
      />
      <FormHeader textMain="Dane logowania" textDescription="Hasło zabezpieczające Twoje konto na portalu." />
      <FormInput
        text="Hasło"
        input={<Input type="password" placeholder="Hasło" name="password" onChange={handleChange} value={password} />}
      />
      <FormInput
        text="Powtórz hasło"
        input={
          <Input
            type="password"
            placeholder="Powtórz hasło"
            name="repeatPassword"
            onChange={handleChange}
            value={repeatPassword}
          />
        }
      />

      <FormHeader
        textMain="Dane adresowe"
        textDescription="Dzięki nim będziemy mogli w pierwszej kolejności pokazywać Ci schroniska najbliżej Ciebie."
      />
      <FormInput
        text="Ulica"
        input={<Input placeholder="Ulica" name="street" onChange={handleChange} value={street} />}
      />
      <FormInput
        text="Kod pocztowy"
        input={<Input placeholder="Kod pocztowy" name="postCode" onChange={handleChange} value={postCode} />}
      />
      <FormInput
        text="Miasto"
        input={<Input placeholder="Miasto" name="city" onChange={handleChange} value={city} />}
      />
      <FormInput
        text="Województwo"
        input={<Input placeholder="Województwo" name="region" onChange={handleChange} value={region} />}
      />
      {buttons}
    </Box>
  );
};
