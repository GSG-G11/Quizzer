/* eslint-disable max-len */
import React from 'react';
import {
  Typography, TableHead, TableRow, TableCell,
} from '../../../mui';
import classes from './Quizzes.module.css';

function TableHeader({ headers }:any) {
  return (
    <TableHead className={classes.head}>
      <TableRow>
        {headers.map((header:string) => {
          if (header === 'description') return null;
          if (header === 'id') {
            return (
              <TableCell align="center">
                <Typography
                  style={{ fontWeight: '600' }}
                >
                  Enroll Code
                </Typography>
              </TableCell>
            );
          }
          if (header === 'students_count') {
            return (
              <TableCell align="center">
                <Typography
                  style={{ fontWeight: '600' }}
                >
                  Enrolled Students
                </Typography>
              </TableCell>
            );
          }
          return (
            <TableCell align="center">
              <Typography
                style={{ fontWeight: '600' }}
              >
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </Typography>
            </TableCell>
          );
        })}
        <TableCell align="center">
          <Typography
            style={{ fontWeight: '600' }}
          >
            Actions
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>

  );
}

export default TableHeader;
