import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
const TodoItem = ({ todo, fetchDetailsOfCurrentTodo }) => {
  console.log(todo);

  return (
    <Card
      sx={{
        minWidth: 350,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "#E6E6FA",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
          sx={{
            backgroundColor: "black",
            color: "white",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
              opacity: "1",
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
export default TodoItem;
