import { AppBar, Box, Link, Paper } from "@mui/material";
import PageSectionContainer from "../styles/PageSectionContainer";
import { useEffect, useState } from "react";
import { colors } from "../utils/colors";

const Navbar = () => {
  const [elevation, setElevation] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const newElevation = window.scrollY > 0 ? 1 : 0;
      setElevation(newElevation);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AppBar
      elevation={elevation === 0 ? 0 : 1}
      sx={{
        backgroundColor: elevation === 0 ? "white" : "rgb(51, 111, 251)",
        position: "sticky",
        top: "0px",
        left: "0px",
      }}
    >
      <PageSectionContainer width="100%" height="100%" marginTop={0}>
        <Box
          boxSizing="border-box"
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
          margin="0"
        >
          <Box
            sx={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "600",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            LifeBracelet
          </Box>
          <Box display="flex" alignItems="center">
            <Box marginRight="2rem">
              <Link
                href="/"
                underline="none"
                color={elevation === 0 ? colors.blue : "white"}
              >
                Dashboard
              </Link>
            </Box>
            <Box marginRight="2rem">
              <Link
                href="/history"
                underline="none"
                color={elevation === 0 ? "rgb(51, 111, 251)" : "white"}
              >
                History
              </Link>
            </Box>
            <Box marginRight="2rem">
              <Link
                href="/reminders"
                underline="none"
                color={elevation === 0 ? "rgb(51, 111, 251)" : "white"}
              >
                My Reminders
              </Link>
            </Box>
            <Box marginRight="2rem">
              <Link
                href="/rewards"
                underline="none"
                color={elevation === 0 ? "rgb(51, 111, 251)" : "white"}
              >
                Rewards
              </Link>
            </Box>
            <Box>
              <Link
                href="/my-account"
                underline="none"
                color={elevation === 0 ? "rgb(51, 111, 251)" : "white"}
              >
                My Account
              </Link>
            </Box>
          </Box>
        </Box>
      </PageSectionContainer>
    </AppBar>
  );
};

export default Navbar;
