import React from 'react';
import {Link} from "react-router-dom";
import type { Node } from 'react';


type Props = {
  wrapperClass:string,
  className: string,
  labelContent:string,
  route:string,
};


const RouteLink = ({
  wrapperClass,
  className,
  labelContent,
  route,
  ...others
}: Props): Node => {
  const props = {};
  return (
    <div className={wrapperClass}> <Link className={className} to={route} >{labelContent} </Link> </div>
  );
};

RouteLink.defaultProps = {
  wrapperClass:'',
  className:'',
  labelContent:'',
  route:''
};

export default RouteLink;



