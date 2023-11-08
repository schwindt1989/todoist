import { Delete } from "@mui/icons-material";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

import axios from "../plugins/axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
};

function ButtonRemoveProject({ id, onRemoved }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  function handleRemove() {
    setLoading(true);

    axios
      .delete(`projects/${id}`)
      .then(() => {
        setOpen(false);
        onRemoved();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <Button
        variant="text"
        size="small"
        color="warning"
        onClick={() => setOpen(true)}
      >
        <Delete />
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box style={style} p={4}>
          <Typography variant="h6" component="h2">
            Esta seguro de eliminar el proyecto?
          </Typography>

          <Stack direction="row" justifyContent="center" spacing={2} mt={4}>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancelar
            </Button>

            <Button
              variant="contained"
              color="error"
              disabled={loading}
              onClick={handleRemove}
            >
              {loading && "Eliminando..."}
              {!loading && "Eliminar"}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

ButtonRemoveProject.propTypes = {
  id: PropTypes.string.isRequired,
  onRemoved: PropTypes.func,
};

ButtonRemoveProject.defaultProps = {
  onRemoved: () => {},
};

export { ButtonRemoveProject };
