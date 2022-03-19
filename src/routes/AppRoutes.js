import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderPrincipal from '../components/HeaderPrincipal';

export default class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderPrincipal />
        <Routes></Routes>
      </BrowserRouter>
    );
  }
}
