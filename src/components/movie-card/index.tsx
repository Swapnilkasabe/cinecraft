import React, { useContext } from 'react';
import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

interface MovieCardProps {
  movie: MovieDataType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);

  const handleToggleBookmark = (id: string) => {
    dispatch({ type: 'TOOGLE BOOKMARK', id });
  };

  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: 'transparent',
        color: '#E0E0E0',
        my: 3,
        border: 'none',
      }}
    >
      <CardContent sx={{ p: 0, position: 'relative' }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              alt={movie.title}
              style={{
                width: '400px',
                height: '180px',
                borderRadius: '8px',
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography fontSize={10} color="#E0E0E0">
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: '4px',
                    height: '4px',
                    background: '#BDBDBD',
                    borderRadius: '50%',
                  }}
                />
              </Grid>
              <Grid item>
                {movie.category === 'Movies' ? (
                  <LocalMoviesIcon sx={{ fontSize: 16, color: '#E0E0E0' }} />
                ) : (
                  <OndemandVideoIcon sx={{ fontSize: 16, color: '#E0E0E0' }} />
                )}
              </Grid>
              <Grid item>
                <Typography fontSize={10} color="#E0E0E0">
                  {movie.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: '4px',
                    height: '4px',
                    background: '#BDBDBD',
                    borderRadius: '50%',
                  }}
                />
              </Grid>
              <Grid item>
                <Typography fontSize={10} color="#E0E0E0">
                  {movie.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography
              fontSize={14}
              fontWeight={500}
              color="#FFFFFF"
              mt={1}
              aria-label="movie title"
            >
              {movie.title}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ position: 'absolute', top: 0, right: 0 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                p: '1rem',
              }}
            >
              <Box
                sx={{
                  p: '1rem',
                  backgroundColor: 'black',
                  borderRadius: '100%',
                  cursor: 'pointer',
                  '&:hover': { opacity: 0.8 },
                }}
                onClick={() => handleToggleBookmark(movie.id)}
              >
                {movie.isBookmarked ? (
                  <BookmarkIcon sx={{ color: '#E0E0E0' }} />
                ) : (
                  <BookmarkBorderIcon />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
