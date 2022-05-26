import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from './Leaderboard.module.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Stack,
  Typography,
  CircularProgress,
  ExpandMoreIcon,
} from '../../../mui';

const publicQuizzes = [
  { name: 'Arts & Literature', clicked: false, participants: [] },
  { name: 'Film & TV', clicked: false, participants: [] },
  { name: 'History', clicked: false, participants: [] },
  { name: 'Music', clicked: false, participants: [] },
  { name: 'Science', clicked: false, participants: [] },
  { name: 'Sport & Leisure', clicked: false, participants: [] },
  { name: 'Geography', clicked: false, participants: [] },
  { name: 'Food & Drink', clicked: false, participants: [] },
  { name: 'Society & Culture', clicked: false, participants: [] },
  { name: 'General Knowledge', clicked: false, participants: [] },
];

function Leaderboard() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getQuizParticipants = async (publicQuizIdx: number) => {
    const { name, clicked } = publicQuizzes[publicQuizIdx];

    if (clicked) return;
    try {
      setLoading(true);
      const { data: { data: participants } } = await axios.get(`/api/v1/student/leaderboard/${name}`);
      publicQuizzes[publicQuizIdx].participants = participants
        .slice(0, 10)
        .sort(
          (
            a: { username: string, score: number },
            b: { username: string, score: number },
          ) => b.score - a.score,
        );
      publicQuizzes[publicQuizIdx].clicked = true;
    } catch (err: any) {
      if (err.response.status === 500) navigate('/error');
    }
    setLoading(false);
  };

  const handleChange = (panelIdx: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? publicQuizzes[panelIdx].name : false);
    getQuizParticipants(panelIdx);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom color="primary.dark" className={classes.title}>Watch the ranking scores around the world</Typography>
      {
        publicQuizzes.map((quiz, quizIdx) => (
          <Accordion
            key={quiz.name}
            expanded={expanded === quiz.name}
            onChange={handleChange(quizIdx)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${quiz}-content`}
              id={`panel-${quiz}-header`}
            >
              <Typography className={classes.heading} sx={{ flexGrow: 1 }}>{quiz.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                !loading
                  ? quiz.participants.length
                    ? quiz.participants.map(({ username, score }) => (
                      <Stack key={username} alignItems="center" justifyContent="space-between" direction="row">
                        <Typography color="primary" fontWeight="bold">{username}</Typography>
                        <Typography color="primary.light">{`${score}/10`}</Typography>
                      </Stack>
                    )) : <Typography textAlign="center">No participants yet</Typography>
                  : <Stack justifyContent="center" alignItems="center"><CircularProgress color="primary" /></Stack>
              }
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Container>
  );
}

export default Leaderboard;
