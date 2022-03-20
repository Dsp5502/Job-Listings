import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CardsJobs from '../components/CardsJobs';
import HeaderPrincipal from '../components/HeaderPrincipal';

export default class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderPrincipal />
        <CardsJobs />
      </BrowserRouter>
    );
  }
}
