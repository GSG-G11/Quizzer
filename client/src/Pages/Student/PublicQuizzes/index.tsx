import React, {
  MouseEvent, SyntheticEvent, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, autoCompleteOptions } from './categories';
import { ICategory } from './interfaces';
import {
  Autocomplete,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  CardActionArea,
} from '../../../mui';

function PublicQuizzes() {
  const [categoriesList, setCategoriesList] = useState<ICategory[]>(categories);
  const [searchTerm, setSearchTerm] = useState<string| null>(null);
  const navigate = useNavigate();

  const handleSearchTermChange = (_e:SyntheticEvent<Element>, newValue:string|null) => {
    setSearchTerm(newValue);
  };

  const handleButtonClick = ({ currentTarget }: MouseEvent) => {
    const selectedCategory = (currentTarget as Element).id;
    navigate(`/student/quiz-details?type=public&id=${selectedCategory.split('&').join('_')}`);
  };

  useEffect(() => {
    const filteredCategories = categories.filter(({ category }) => (
      searchTerm ? category.includes(searchTerm) : category
    ));

    setCategoriesList(filteredCategories);
  }, [searchTerm]);

  return (
    <Container maxWidth="lg" sx={{ marginBlock: '3rem' }}>
      <>
        <Typography color="primary.dark" variant="h4" textAlign="center">Test Your Knowledge in many fields</Typography>
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

        <Grid container alignContent="center" justifyContent="center" alignItems="stretch" spacing={4} sx={{ marginBlock: '1rem' }}>
          {!categoriesList.length && <Typography variant="h6" component="p" color="secondary.dark">No Quiz Found!</Typography>}

          {categoriesList.map(({ category, miniDescription }, i) => (
            <Grid item key={category} xs={11} sm={7} md={4}>
              <CardActionArea id={category} onClick={handleButtonClick}>
                <Card style={{ boxShadow: 'rgb(52 73 85 / 20%) 0px 10px 15px, rgb(52 73 85 / 5%) 0px -1px 10px' }} sx={{ borderRadius: '10px' }}>
                  <CardContent>
                    <Typography color="#344955" fontWeight="bold" textAlign="center" gutterBottom variant="h5">{category}</Typography>
                    <Typography variant="body2" color="primary" textAlign="center">{miniDescription}</Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </>
    </Container>
  );
}

export default PublicQuizzes;
