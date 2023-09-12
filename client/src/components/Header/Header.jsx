import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import FlexBetween from "../../requiredComponents/flexBetween";
import styled from "@emotion/styled";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <img src={logo} alt="logo" style={{ width: 300 }} />
          </Box>
          <Box>
            <Button color="inherit">
            <Link
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Home
              </Link>
            </Button>
            <Button color="inherit">
            <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

const Container = styled(Box)`
  margin: 0;
  padding: 0;
  margin-bottom: 4rem;
`;

export default Header;
