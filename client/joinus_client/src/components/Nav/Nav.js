import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography, Style } from "@mui/material";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { reactLocalStorage } from "reactjs-localstorage";
import useSharedUser from "../../hooks/useSharedUser";

import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import Login from "./Login";
import NavDisplayUser from "./NavDisplayUser";
import NavDisplayLogin from "./NavDisplayLogin";

export default function Nav(props) {
  const { usersData, login, logout } = props;
  const [userID, setUserID] = useState(); //value taken from submitting a form in the email field

  const { user, setUser } = useSharedUser();

  console.log(`----user in nav ${user.name}`);

  const navigate = useNavigate();

  // for handling user navbar buttons
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    navigate("/user");
  };

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  const handleLogout = async () => {
    logout();
    localStorage.removeItem("currentUser");
    setAnchorElUser(null);
    await wait(500);
    navigate("/");
  };
  // end of user nav

  //for handling the login pop up
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // end

  // log in
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(userID);
    setUserID("");
    await navigate("/user");
  };

  // set user as the id in local store

  const findUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || currentUser === {}) {
      return;
    }
    setUser((prev) => currentUser);
  };

  useEffect(() => {
    findUser();
  }, []);

  //find user end

  return (
    <AppBar
      position="static"
      style={{ background: "inherit", boxShadow: "none" }}
    >
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Avatar sx={{ width: 80, height: 80 }} alt="Logo" src={logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {user && <p>{user.name}</p>}
          </Box>

          <Login
            open={open}
            setUserID={setUserID}
            userID={userID}
            usersData={usersData}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />

          {user.id === null && (
            <NavDisplayLogin handleClickOpen={handleClickOpen} />
          )}

          {user.id !== null && (
            <NavDisplayUser
              user={user}
              handleOpenUserMenu={handleOpenUserMenu}
              handleLogout={handleLogout}
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
