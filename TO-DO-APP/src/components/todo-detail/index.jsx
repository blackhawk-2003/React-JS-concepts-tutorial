import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import { Fragment } from "react";

const TodoDetails = ({
  todoDetails,
  openDialogue,
  setOpenDialouge,
  setTodoDetails,
}) => {
  return (
    <Fragment>
      <Dialog onClose={() => setOpenDialouge(false)} open={openDialogue}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setTodoDetails(null), setOpenDialouge(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default TodoDetails;
