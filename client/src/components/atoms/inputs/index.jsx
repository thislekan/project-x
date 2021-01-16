export const InputTextArea = ({ onChange }) => (
  <textarea onChange={onChange} />
);

export const InputField = ({ onChange, type }) => (
  <input onChange={onChange} type={type} />
);
