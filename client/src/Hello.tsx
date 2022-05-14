import React from 'react';
import { useLocation } from 'react-router-dom';

function Hello() {
  const { state }: any = useLocation();

  return (
    <div>Hello</div>
  );
}

export default Hello;
