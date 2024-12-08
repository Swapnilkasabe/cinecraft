import React, { useContext } from 'react';
import { MovieDataType } from '../../assets/data';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { MovieContext } from '../../context/movie-context';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

interface MovieTrendCardProps {
  movie: MovieDataType;
}

const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
  const { dispatch } = useContext(MovieContext);

  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };

  return (
    <Card key={movie.id} elevation={0} style={{ backgroundColor: "transparent" }}>
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          display: "flex",
        }}
      >
        <img src={movie.thumbnail.regular.large} alt="" style={{ width: "300px", height: "100%", borderRadius: "8px" }} />
        <Box position="absolute" top={0} left={0} right={0} bottom={0} bgcolor="rgba(0, 0, 0, 0.6)" borderRadius="8px" />
        <Stack mt={6} spacing={0} position="absolute" bottom={0} left={0} right={0} p={4}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography fontSize={10} color="#E0E0E0" aria-label="year of movie">
                {movie.year}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: "#E0E0E0",
                  borderRadius: "50%",
                }}
              />
            </Grid>
            <Grid item>
              {movie.category === "Movies" ? (
                <LocalMoviesIcon sx={{ fontSize: 16, color: "#E0E0E0" }} />
              ) : (
                <OndemandVideoIcon sx={{ fontSize: 16, color: "#E0E0E0" }} />
              )}
            </Grid>
            <Grid item>
              <Typography fontSize={10} color="#E0E0E0" aria-label="movie category">
                {movie.category}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: "#E0E0E0",
                  borderRadius: "50%",
                }}
              />
            </Grid>
            <Grid item>
              <Typography fontSize={10} color="#E0E0E0" aria-label="movie rating">
                {movie.rating}
              </Typography>
            </Grid>
          </Grid>
          <Typography aria-label="movie title" color="#E0E0E0" padding={0}>
            {movie.title}
          </Typography>
        </Stack>
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              p: "0.2rem",
              backgroundColor: "black",
              borderRadius: "100%",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={() => handleToggleBookmark(movie.id)}
          >
            {movie.isBookmarked ? <BookmarkIcon sx={{ color: "#E0E0E0" }} /> : <BookmarkBorderIcon sx={{ color: "#E0E0E0" }} />}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;
