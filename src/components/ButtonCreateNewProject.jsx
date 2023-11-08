import { useState } from "react";
import { PlaylistAdd } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import axios from "../plugins/axios";
import { colors } from "../constants/colors";
import { BadgeColor } from "./BadgeColor";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
};

function ButtonCreateNewProject(props) {
  const { onCreated } = props;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    axios
      .post("projects", { name, color })
      .then(() => {
        setOpen(false);
        onCreated();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <PlaylistAdd />
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box style={style} p={4}>
          <Typography variant="h6" component="h2">
            Crear nuevo proyecto
          </Typography>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth variant="standard">
              <TextField
                label="Nombre"
                variant="standard"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormControl>

            <FormControl fullWidth variant="standard">
              <InputLabel>Color</InputLabel>
              <Select
                label="Color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              >
                {colors.map((color) => {
                  return (
                    <MenuItem key={color.id} value={color.id}>
                      <Stack direction="row" alignItems="center">
                        <BadgeColor color={color.id} />
                        <span>{color.name}</span>
                      </Stack>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <Button variant="contained" type="submit" disabled={loading}>
              {loading && "Loading..."}
              {!loading && "Create"}
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

ButtonCreateNewProject.propTypes = {
  onCreated: PropTypes.func,
};

ButtonCreateNewProject.defaultProps = {
  onCreated: () => {},
};

export { ButtonCreateNewProject };
