import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#10141F",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "white",
        padding: 3,
        gap: 3,
        overflowY: "auto",
        height: "100vh",
        scrollbarWidth: "thin",
        scrollbarColor: "#888 #10141F"
      }}
    >
      <Sidebar />
      <Box sx={{ width: "100%", height: "100vh", overflowY: "auto"}}>{children}</Box>
    </Box>
  );
};

export default Layout;
