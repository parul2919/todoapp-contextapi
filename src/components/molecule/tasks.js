import React from 'react';
import type { Node } from 'react';
import {ToDoContext} from '../../config/toDoContext';


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
    console.log("labelContent", labelContent);
  return (
        <ToDoContext.Consumer>
        {({ list}) =>
          list.map((item, key) => {
            return (
                <div className={className} key={key} >{labelContent === item.status ? item.todo : ""}</div>
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



