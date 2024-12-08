import { Box, Hidden, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const navLinks = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    name: "Movies",
    icon: <LocalMoviesIcon />,
    link: "/movies",
  },
  {
    name: "TV Series",
    icon: <OndemandVideoIcon />,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: <BookmarkIcon />,
    link: "/bookmarks",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Link to="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src={require('../../assets/images/video.png')}
              alt="Movie Icon"
              style={{ width: "24px", height: "24px", filter: "invert(1)" }}
            />
            <Typography
              variant="h5"
              component="h1"
              my={2}
              fontWeight={400}
              fontSize={18}
            >
              CineCraft
            </Typography>
          </Link>
        </Hidden>

        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: pathname === item.link ? "#1e90ff" : "white",
                  textDecoration: "none",
                }}
              >
                {item.icon}
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
