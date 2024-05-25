import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { colors } from "../utils/colors";

const MobileNavbarContainer = styled(Grid)`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem 0.5rem 1rem 0.5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileNavbarLink = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MobileNavbar = () => {
  const isExtraSmallScreen = useMediaQuery("(max-width: 450px)");
  return (
    <>
      <Typography
        variant="h5"
        color={colors.blue}
        fontWeight={600}
        align="center"
        marginTop="2rem"
      >
        LifeBracelet
      </Typography>
      <MobileNavbarContainer container spacing={4}>
        <Grid item xs={2}>
          <MobileNavbarLink>
            <SpaceDashboardOutlinedIcon />
            {!isExtraSmallScreen ? <p>Dashboard</p> : null}
          </MobileNavbarLink>
        </Grid>
        <Grid item xs={2}>
          <MobileNavbarLink>
            <HistoryOutlinedIcon />
            {!isExtraSmallScreen ? <p>History</p> : null}
          </MobileNavbarLink>
        </Grid>
        <Grid item xs={2}>
          <MobileNavbarLink>
            <NotificationsNoneOutlinedIcon />
            {!isExtraSmallScreen ? <p>Reminders</p> : null}
          </MobileNavbarLink>
        </Grid>
        <Grid item xs={2}>
          <MobileNavbarLink>
            <EmojiEventsOutlinedIcon />
            {!isExtraSmallScreen ? <p>Rewards</p> : null}
          </MobileNavbarLink>
        </Grid>
        <Grid item xs={2}>
          <MobileNavbarLink>
            <MoreHorizOutlinedIcon />
            {!isExtraSmallScreen ? <p>More</p> : null}
          </MobileNavbarLink>
        </Grid>
      </MobileNavbarContainer>
    </>
  );
};

export default MobileNavbar;
