import { Box, BoxProps, Grid, Typography } from "@mui/material";
import PageSectionContainer from "../styles/PageSectionContainer";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { colors } from "../utils/colors";
import styled from "styled-components";

interface DashboardItemContainerProps extends BoxProps {
  color?: string;
}

const DashboardItemContainer = styled((props: DashboardItemContainerProps) => (
  <Box {...props} />
))`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid ${(props) => props.color};
  colors: ${(props) => props.color};
  padding: 2rem;
  box-sizing: border-box;
`;

const SpacedBetweenFlexbox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dashboard = () => {
  return (
    <PageSectionContainer marginBottom="10rem">
      <Grid container spacing={6}>
        <Grid item md={4} sm={6} xs={12}>
          <DashboardItemContainer color={colors.darkred}>
            <SpacedBetweenFlexbox>
              <FavoriteBorderOutlinedIcon />
              <Typography>Blood pressure</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox marginTop="1rem">
              <Typography>Current:</Typography>
              <Typography>83 • 119</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox>
              <Typography>Morning average:</Typography>
              <Typography>70 • 125</Typography>
            </SpacedBetweenFlexbox>
          </DashboardItemContainer>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <DashboardItemContainer color={colors.lightred}>
            <SpacedBetweenFlexbox>
              <MonitorHeartOutlinedIcon />
              <Typography>ECG</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox marginTop="1rem">
              <Typography>Current:</Typography>
              <Typography>76 bpm</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox>
              <Typography>Resting average:</Typography>
              <Typography>68 bpm</Typography>
            </SpacedBetweenFlexbox>
          </DashboardItemContainer>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <DashboardItemContainer color={colors.purple}>
            <SpacedBetweenFlexbox>
              <DarkModeOutlinedIcon />
              <Typography>Sleep</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox marginTop="1rem">
              <Typography>Last night:</Typography>
              <Typography>7h 32min</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox>
              <Typography>Last month average:</Typography>
              <Typography>6h 53min</Typography>
            </SpacedBetweenFlexbox>
          </DashboardItemContainer>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <DashboardItemContainer color={colors.lightblue}>
            <SpacedBetweenFlexbox>
              <Typography>
                O<sub>2</sub>
              </Typography>
              <Typography>Blood oxygen</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox marginTop="1rem">
              <Typography>Current:</Typography>
              <Typography>97 %</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox>
              <Typography>Last {"<"} 95 %:</Typography>
              <Typography>yesterday</Typography>
            </SpacedBetweenFlexbox>
          </DashboardItemContainer>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <DashboardItemContainer color={colors.orange}>
            <SpacedBetweenFlexbox>
              <Typography>
                VO<sub>2</sub> Max
              </Typography>
              <Typography>Fitness</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox marginTop="1rem">
              <Typography>Current:</Typography>
              <Typography>37 mL/kg·min</Typography>
            </SpacedBetweenFlexbox>
            <SpacedBetweenFlexbox>
              <Typography>Last week:</Typography>
              <Typography>35 mL/kg·min</Typography>
            </SpacedBetweenFlexbox>
          </DashboardItemContainer>
        </Grid>
      </Grid>
    </PageSectionContainer>
  );
};

export default Dashboard;
