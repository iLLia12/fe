import { ChangeEvent, useEffect, useState } from 'react';

export interface InputProps {
  name?: string;
  value?: string | null | undefined;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input = ({
  name = '',
  value: valueProp = '',
  placeholder = '',
  label = '',
  onChange,
}: InputProps) => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  useEffect(() => {
    if (valueProp === null || valueProp === undefined) setValue('');
    else setValue(valueProp);
  }, [valueProp]);

  return (
    <div className="relative inline-block w-52">
      {Boolean(label) && (
        <label className={'text-sm'} htmlFor={`input-id-${name}`}>
          {label}
        </label>
      )}
      <input
        id={`input-id-${name}`}
        name={name}
        className="border border-gray-200 cursor-pointer rounded transition ease-in-out duration-200 py-1 px-2 text-sm focus:border-blue-200 w-full hover:border-gray-300 outline-0"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
