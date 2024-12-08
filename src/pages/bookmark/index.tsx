import React, { SetStateAction, useContext, useState } from "react";
import { Typography, InputAdornment, InputBase, Paper, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MovieContext } from "../../context/movie-context";
import { MovieDataType } from "../../assets/data";
import Layout from "../../layout";
import MovieList from "../../components/movie-list";

const Bookmarks = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const bookmarks = movies.filter((item: MovieDataType) => item.isBookmarked);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie: MovieDataType) =>
      movie.title.toLowerCase().includes((e.target.value as string).toLowerCase())
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
          <Box>
            <Typography variant="h5" component="h1" my={2} fontWeight={300}>
              Bookmarks
            </Typography>
            <MovieList recommendList={bookmarks} />
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

export default Bookmarks;
