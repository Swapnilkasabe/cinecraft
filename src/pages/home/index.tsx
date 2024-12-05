import React, { useState } from 'react'
import Layout from '../../layout'
import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material'
import MovieList from '../../components/movie-list';
import MovieTrendList from '../../components/movie-list/movieTrendList';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const [search, setSearch] = useState("");
  
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Movies
            </Typography>
            <MovieTrendList/>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found 
            </Typography>
            <MovieList />
          </Box>
        )}
      </Box>
    </Layout>
  )
}

export default Home
