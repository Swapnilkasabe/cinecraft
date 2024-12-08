import React, { useContext, SetStateAction, useState } from 'react'
import Layout from '../../layout'
import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material'
import MovieList from '../../components/movie-list';
import MovieTrendList from '../../components/movie-list/movieTrendList';
import SearchIcon from '@mui/icons-material/Search';
import { MovieContext } from '../../context/movie-context';
import { MovieDataType } from '../../assets/data';


const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true);
  
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
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
          onChange={handleSearch}
          startAdornment={
            <InputAdornment position="start">
             <SearchIcon sx={{ color: "white" }}/>
            </InputAdornment>
          }
        />
      </Paper>
    </Box>
    <Box py={2} px={4}>
      {search === "" ? (
        <Box width="100%">
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Trending
            </Typography>
            <MovieTrendList trendingList={trendingList} />
          </Box>
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Recommended For You
            </Typography>
            <MovieList recommendList={recommendList} />
          </Box>
        </Box>
      ) : (
        <Box width="100%">
          <Typography>
            Found {searchList.length} results for "{search}"{""}
          </Typography>
          <MovieList recommendList={searchList} />
        </Box>
      )}
    </Box>
  </Layout>
  )
}

export default Home
