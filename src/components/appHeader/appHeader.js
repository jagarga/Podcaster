import * as React from "react";
import { Suspense } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import WaitSpinner from "../waitSpinner/waitSpinner";

/**
 * Component with app header in responsive design
 */
const AppHeader = () => {
  return (
    <>
      <Suspense fallback={<WaitSpinner />}>
        <AppBar position="static" sx={{ bgcolor: "white" }}>
          <Container maxWidth={false}>
            <Toolbar disableGutters>
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                sx={{
                  color: "cornflowerblue",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => (window.location = "/")}
              >
                Podcaster
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Suspense>
    </>
  );
};
export default AppHeader;
