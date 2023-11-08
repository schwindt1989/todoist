import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "../plugins/axios";
import { Box, Skeleton, Stack } from "@mui/material";
import { CardTask } from "./CardTask";

export function ListsTasks() {
  const { projectId } = useParams();

  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  function getTasks() {
    setLoading(true);

    axios
      .get("tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  return (
    <>
      {loading && (
        <Box>
          <Skeleton height={60} />
          <Skeleton height={60} />
          <Skeleton height={60} />
          <Skeleton height={60} />
          <Skeleton height={60} />
        </Box>
      )}

      <Stack spacing={2}>
        {tasks
          .filter((task) => task.project_id === projectId)
          .map((task) => {
            return <CardTask key={task.id} task={task} />;
          })}
      </Stack>
    </>
  );
}
