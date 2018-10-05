import React from 'react';
import type { Node } from 'react';


type Props = {
    className: string,
    labelContent:string,
    onClick?: Function,
};


const Button = ({
    className,
    labelContent,
    onClick,
    ...others
}: Props): Node => {
  const props = {};
  return (
        <button className={className} onClick={onClick}>{labelContent}</button>
  );
};

Button.defaultProps = {
    className:'',
    labelContent:'',
    onClick: () => {},
};

export default Button;
