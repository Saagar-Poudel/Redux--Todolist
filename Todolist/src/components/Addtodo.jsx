import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // prevent empty submission
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-12 flex flex-col sm:flex-row items-center gap-4"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a Todo..."
        className="w-full sm:w-auto flex-1 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition duration-200"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
