import React, { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
  const [text, setText] = useState({
    myText: "",
  });

  // state for todo
  const [todo, setTodo] = useState([]);

  // handle text changes
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      todoItem: text,
    };

    setTodo([...todo, newTodo]);
    setText({
      myText: "",
    });
  };

//   handle delete
const  handleDelete = (e, id) => {
    setTodo(todo.filter((items) =>items.id !== id))

}

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(todo)}</pre> */}
      <div>
        <div className="bg-red-900 h-96 mx-10 rounded-lg mt-10 shadow-lg overflow-hidden sm:mx-20 md:mx-52 lg:mx-80 ">
          {/* header */}
          <div className="bg-blue-900 h-16 flex justify-center items-center">
            <p className="text-3xl text-white font-bold">TODO APP</p>
          </div>

          {/* body */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mt-5 flex justify-center items-center">
                <input
                  name="myText"
                  value={text.myText}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter todos..."
                  className="p-1 rounded-l-lg pl-3 w-9/12 focus:outline-none"
                />

                <button
                  type="submit"
                  className="bg-green-900 rounded-r-lg px-1"
                >
                  <AiOutlineEnter className="text-3xl text-white px-1  " />
                </button>
              </div>
            </form>

            {/* todolist */}
            <div>
              {todo.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="mt-3 flex justify-center">
                      <ul className="bg-green-900 w-9/12 rounded-l-lg">
                        <li className="text-white text-xl pl-3">
                          {item.todoItem.myText}
                        </li>
                      </ul>
                      <div className="bg-red-400 rounded-r-lg px-1">
                        <RiDeleteBin6Line className="text-3xl text-white px-1 "
                        onClick={(e) => handleDelete(e, item.id)} 
                         />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoApp;
