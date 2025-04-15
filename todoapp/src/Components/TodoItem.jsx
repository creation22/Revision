import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTodo } from "../contests/TodoContext";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [isTodoEdit, setTodoEdit] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setTodoEdit(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      layout
      className={`flex items-center border border-white/10 rounded-lg px-4 py-2 gap-3 shadow-md duration-300 transition-all ${
        todo.completed ? "bg-green-900/30" : "bg-white/10"
      }`}
    >
      <input
        type="checkbox"
        className="w-5 h-5 accent-green-500 cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`w-full font-medium text-white bg-transparent outline-none rounded-lg ${
          isTodoEdit ? "border border-white/20 px-2 py-1" : "border-none"
        } ${todo.completed ? "line-through text-white/40" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEdit}
      />

      {/* Edit/Save Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-white bg-blue-500 hover:bg-blue-600 transition-colors rounded-md px-2 py-1 text-xs"
        onClick={() => {
          if (todo.completed) return;
          isTodoEdit ? editTodo() : setTodoEdit((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEdit ? "Save" : "Edit"}
      </motion.button>

      {/* Delete Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-white bg-red-500 hover:bg-red-600 transition-colors rounded-md px-2 py-1 text-xs"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </motion.button>
    </motion.div>
  );
}

export default TodoItem;
