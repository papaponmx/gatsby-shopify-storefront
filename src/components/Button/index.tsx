import "twin.macro";

import React, { ButtonHTMLAttributes, FC } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
  return <button tw="bg-green-500 focus:outline-none font-medium hover:bg-green-600 hover:shadow-lg inline-block leading-6 px-6 py-2 rounded shadow text-center text-white text-sm transition uppercase">
    {/*
    bg-green-500
    focus:outline-none
    font-medium
    hover:bg-green-600
    hover:shadow-lg
    inline-block
    leading-6
    px-6
    py-2
    rounded
    shadow
    text-center
    text-white
    text-xs
    transition
    uppercase
    waves-effect
    */}
    {'Comprar'}
  </button>;
};

export default Button;
