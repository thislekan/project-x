import React from 'react';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const InputTextArea = ({ onChange }: Props) => <textarea onChange={onChange} />;

export const InputField = ({ onChange }: Props) => <input onChange={onChange} />;
