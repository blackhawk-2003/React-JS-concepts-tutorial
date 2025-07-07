import { useEffect } from "react";
import { useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./components";
import TodoDetails from "./components/todo-detail";
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialouge, setOpenDialouge] = useState(false);
  const fetchListOfTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      if (data?.todos && data?.todos?.length > 0) {
        setTodoList(data?.todos);
        setTodoCount(data.total || data.todos.length);
        setLoading(false);
      } else {
        setTodoList([]);
        setTodoCount(0);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDetailsOfCurrentTodo = async (getCurrentId) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/todos/${getCurrentId}`
      );
      const data = await response.json();
      if (data) {
        setTodoDetails(data);
        setOpenDialouge(true);
      } else {
        setTodoDetails(null);
        setOpenDialouge(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchListOfTodos();
  }, []);
  if (loading) {
    return (
      <div className={classes.mainWrapper}>
        <h1 className={classes.headerTitle}>
          Simple TODO App using material UI
        </h1>
        <div className={classes.todoListWrapper}>
          {Array.from(new Array(todoCount > 0 ? todoCount : 12)).map(
            (_, idx) => (
              <div key={idx} style={{ marginBottom: 16 }}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={80}
                  sx={{ borderRadius: 2 }}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  }
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple TODO App using material UI</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => (
              <TodoItem
                fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                todo={todoItem}
              />
            ))
          : null}
      </div>
      <TodoDetails
        todoDetails={todoDetails}
        openDialogue={openDialouge}
        setOpenDialouge={setOpenDialouge}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App;
