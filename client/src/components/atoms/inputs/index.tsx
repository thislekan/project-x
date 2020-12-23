import React from 'react';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type: string;
}

export const InputTextArea = ({ onChange }: Props) => <textarea onChange={onChange} />;

export const InputField = ({ onChange, type }: Props) => (
  <input
    onChange={onChange}
    type={type}
  />
);
