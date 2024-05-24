import { Box } from "@mui/material";
import { styled } from "styled-components";

const PageSectionContainer = styled(Box)`
  box-sizing: border-box !important;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  @media (min-width: 600px) {
    max-width: 720px;
  }
  @media (min-width: 900px) {
    max-width: 1236px;
  }
`;

export default PageSectionContainer;
