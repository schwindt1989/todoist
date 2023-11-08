import { Card, CardContent, Checkbox, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CardTask({ task }) {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Checkbox defaultChecked={task.is_completed} />

          <div>
            <Typography>{task.content}</Typography>
            <Typography color="text.secondary">{task.description}</Typography>
          </div>

          <Typography color="text.secondary">{task.due_date}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

CardTask.propTypes = {
  task: PropTypes.object.isRequired,
};

export { CardTask };
