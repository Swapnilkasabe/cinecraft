import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/movie-context';
import Layout from '../../layout';
import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material';
import MovieList from '../../components/movie-list';
import { MovieDataType } from '../../assets/data';
import SearchIcon from '@mui/icons-material/Search';

const Movie = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchList(newList);
  };

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
            backgroundColor: "#10141F",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{ ml: 1, flex: 1, color: "white", border: "none" }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon width={20} height={20} />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={2} fontWeight={300}>
              Movies
            </Typography>
            <MovieList recommendList={movies} />
          </Box>
        ) : (
          <Box>
            <Typography variant="h6">
              Found {searchList.length} results for "{search}"
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Movie;
