import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import axios from "../plugins/axios";
import { ButtonCreateNewProject } from "./ButtonCreateNewProject";
import { BadgeColor } from "./BadgeColor";
import { ButtonRemoveProject } from "./ButtonRemoveProject";

export function ListsProjects() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  function getProjects() {
    setLoading(true);

    axios
      .get("projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  function handleProjectClick(id) {
    navigate(`/projects/${id}`);
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

      {!loading && (
        <>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5" gutterBottom>
              Mis proyectos
            </Typography>

            <ButtonCreateNewProject onCreated={getProjects} />
          </Stack>

          <List>
            {projects.map((project) => {
              return (
                <ListItem
                  key={project.id}
                  disablePadding
                  secondaryAction={
                    <ButtonRemoveProject
                      id={project.id}
                      onRemoved={getProjects}
                    />
                  }
                >
                  <ListItemButton
                    selected={projectId === project.id}
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <BadgeColor color={project.color} />
                    <ListItemText primary={project.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </>
      )}
    </>
  );
}
