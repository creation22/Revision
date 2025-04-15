import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTodo } from "../contests/index";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    const trimmed = todo.trim();
    if (!trimmed) return;
    addTodo({ todo: trimmed, completed: false });
    setTodo("");
  };

  return (
    <motion.form
      onSubmit={add}
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <input
        type="text"
        placeholder="Write your todo..."
        className="w-full rounded-lg px-4 py-2 bg-white/20 text-white placeholder:text-white/60 border border-white/10 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all duration-300"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <motion.button
        type="submit"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
      >
        Add
      </motion.button>
    </motion.form>
  );
}

export default TodoForm;
