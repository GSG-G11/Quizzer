import React, {
  MouseEvent, SyntheticEvent, useEffect, useState,
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Skeleton, Stack } from '@mui/material';
import {
  Autocomplete, Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography,
} from '../../../mui';
import { categories, autoCompleteOptions } from './categories';
import { ICategory, IQuestions } from './interfaces';
import { useSnackBar } from '../../../Hooks';

function PublicQuizzes() {
  const [categoriesList, setCategoriesList] = useState<ICategory[]>(categories);
  const [searchTerm, setSearchTerm] = useState<string| null>(null);
  const navigate = useNavigate();
  const { showSnackBar } = useSnackBar();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSearchTermChange = (_e:SyntheticEvent<Element>, newValue:string|null) => {
    setSearchTerm(newValue);
  };

  const handleButtonClick = async ({ target }:MouseEvent) => {
    setLoading(true);
    const selectedCategory = (target as Element).id;
    const description = categoriesList
      .find(({ category }) => category === selectedCategory)?.description;

    //* replace spaces with _ and & with and
    const StringsToReplace = new Map([['&', 'and'], [' ', '_']]);
    const formattedCategoryString = selectedCategory.replace(/\s|&/g, (match:string) => StringsToReplace.get(match) || match);

    try {
      const quizUrl = `https://the-trivia-api.com/api/questions?categories=${formattedCategoryString}&limit=10&region=PS&difficulty=easy`;
      const { data } = await axios.get(quizUrl);

      const getQuestions = ({ correctAnswer, incorrectAnswers, question }:IQuestions) => ({
        correctAnswer, incorrectAnswers, question,
      });
      const questions = data.map(getQuestions);

      const quiz = { title: selectedCategory, description, questions };

      navigate('/student/quiz-details', { state: { quiz } });
      setLoading(false);
    } catch (error:any) {
      showSnackBar(error.response.data.message, 'error');
    }
  };

  useEffect(() => {
    const filteredCategories = categories.filter(({ category }) => (
      searchTerm ? category.includes(searchTerm) : category
    ));

    setCategoriesList(filteredCategories);
  }, [searchTerm]);

  return (
    <Container maxWidth="lg" sx={{ marginBlock: '3rem' }}>
      {isLoading && (
      <Stack width="100%" alignItems="center">
        <Skeleton animation="wave" width="150px" height={50} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" width="150px" height={30} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" width="100%" height={180} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" width="150px" height={30} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" width="160px" height={70} style={{ marginBottom: 6 }} />
      </Stack>
      )}

      {
  !isLoading && (
  <>
    <Typography color="primary.dark" variant="h5" fontWeight="bold" textAlign="center">Test Your Knowledge in many fields</Typography>

    <Grid container justifyContent="center" mt={4}>
      <Grid item xs={12} md={6}>
        <Autocomplete
          fullWidth
          options={autoCompleteOptions}
          onChange={handleSearchTermChange}
          freeSolo
          renderInput={(params:any) => <TextField {...params} label="Search a Quiz by name" />}
        />
      </Grid>
    </Grid>

    <Grid container alignContent="center" justifyContent="center" spacing={4} sx={{ marginBlock: '1rem' }}>
      {!categoriesList.length && <Typography variant="h6" component="p" color="secondary.dark">No Quiz Found!</Typography>}

      {categoriesList.map(({ category, miniDescription }, i) => (
        <Grid item key={category} xs={11} sm={7} md={4}>
          <Card elevation={5} sx={{ borderRadius: '10px' }}>
            <CardContent>
              <Typography color="#344955" fontWeight="bold" textAlign="center" gutterBottom variant="h5">{category}</Typography>
              <Typography variant="body2" color="primary">{miniDescription}</Typography>
            </CardContent>
            <CardActions sx={{ marginBottom: '0.5rem', justifyContent: 'center' }}>
              <Button id={category} variant="contained" sx={{ color: 'secondary.main' }} onClick={handleButtonClick}>Details</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
  )
}
    </Container>
  );
}

export default PublicQuizzes;
