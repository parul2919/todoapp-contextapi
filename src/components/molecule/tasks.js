import React from 'react';
import type { Node } from 'react';
import {ToDoContext} from '../../toDoContext.js';
import "../../style.css";

type Props = {
    className: string,
    labelContent:string,
    list?: Array,
};


const Tasks = ({
    className,
    labelContent,
    list,
    ...others
}: Props): Node => {
  const props = {};
  return (
        <ToDoContext.Consumer>
        {({ list}) =>
          list.map((item, key) => {
            return (
                <div className={className}>{labelContent}</div>
            );
          })
        }
      </ToDoContext.Consumer>
  );
};

Tasks.defaultProps = {
    className:'',
    labelContent:'',
    list: [],
};

export default Tasks;



