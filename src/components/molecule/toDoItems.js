import React, { Component } from "react";
import {ToDoContext} from '../../config/toDoContext';
import Button from'../atom/button.js';



class ToDoItems extends Component {
  render() {
    return (
        <div className="col-6 offset-3  text-left">
              <ToDoContext.Consumer>
                {({ list, deleteItem,startItem, completeItem }) =>
                  list.map((item, key) => {
                    return (
                      <div key={key}>
                        <div className={item.status === 'completed' ? 'completed d-inline-block col-7' : (item.status === 'started') ? 'started d-inline-block col-7' : 'd-inline-block col-7'}>{item.todo}</div>
                        <Button
                                className="button todo-inprogress"
                                labelContent="IN PROGRESS"
                                onClick={startItem.bind(this, key, item)}
                            />
                            <Button
                                className="button todo-complete"
                                labelContent="COMPLETE"
                                onClick={completeItem.bind(this, key, item)}
                            />
                            <Button
                                className="button todo-delete"
                                labelContent="REMOVE"
                                onClick={deleteItem.bind(this, key)}
                            />     
                      </div>
                    );
                  })
                }

              </ToDoContext.Consumer>
              <div 
                  className="btn btn-info d-inline-block"
                  onClick={this.props.openModal}
              >New Task</div>
          </div>
    );
  }
}

export default ToDoItems;


