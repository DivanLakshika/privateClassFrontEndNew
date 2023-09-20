import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  background-color: #ffb3ff;
  box-shadow: none;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 600;
  color: #f0f0f0; /* Slightly off-white color for all links */
  transition: color 0.2s; /* Add a smooth color transition */
  &:hover {
    color: #4d4dff; /* Blue for the hover color */
  }
`;

const StyledBars = styled(FaBars)`
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Private Tutors
          </Typography>
          <Box flexGrow={1} />
          <StyledNavLink to="/registrationForm">Registration Form</StyledNavLink>
          <StyledNavLink to="/loginForm">Login Page</StyledNavLink>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <StyledBars />
          </IconButton>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default NavBar;
