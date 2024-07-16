import React, { useEffect, useState } from "react";
import Axios from "axios";

const ShowTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:8080/get/items");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Render todos
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h3>{todo.Task}</h3>
          <p>{todo.Current_date} - {todo.Due_date}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowTodos;
