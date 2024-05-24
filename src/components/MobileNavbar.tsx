import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";

const MobileNavbarContainer = styled(Box)`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const MobileNavbarLink = styled(Box)`
  display: flex;
  flex
`;

const MobileNavbar = () => {
  return (
    <MobileNavbarContainer>
      <Grid container xs={2}>
        <Grid item xs={5.4}>
          <MobileNavbarLink>
            <p>Dashboard</p>
          </MobileNavbarLink>
        </Grid>
      </Grid>
      <Grid container xs={2}>
        <Grid item xs={5.4}>
          <MobileNavbarLink>
            <p>History</p>
          </MobileNavbarLink>
        </Grid>
      </Grid>
      <Grid container xs={2}>
        <Grid item xs={5.4}>
          <MobileNavbarLink>
            <p>Reminders</p>
          </MobileNavbarLink>
        </Grid>
      </Grid>
      <Grid container xs={2}>
        <Grid item xs={5.4}>
          <MobileNavbarLink>
            <p>Rewards</p>
          </MobileNavbarLink>
        </Grid>
      </Grid>
      <Grid container xs={2}>
        <Grid item xs={5.4}>
          <MobileNavbarLink>
            <p>More</p>
          </MobileNavbarLink>
        </Grid>
      </Grid>
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;
