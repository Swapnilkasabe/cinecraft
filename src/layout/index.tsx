import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

interface LayoutProps {
    chidren: ReactNode
}

const Layout = ({chidren}: LayoutProps) => {
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
        overflowY: "hidden",
        height: "100vh",
      }}
    >
    </Box>
  )
}

export default Layout
