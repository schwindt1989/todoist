import Grid from "@mui/material/Unstable_Grid2";
import { ListsProjects } from "../components/ListsProjects";
import { ListsTasks } from "../components/ListsTasks";


export function PageProjectsDetails() {
  return (
    <Grid container spacing={2}>
      <Grid xs={3}>
        <ListsProjects />
      </Grid>

      <Grid xs={9}>
        <ListsTasks />
      </Grid>
    </Grid>
  );
}
