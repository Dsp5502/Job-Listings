import React, { Component } from 'react';
import styled from 'styled-components';

const DivHeader = styled.div`
  width: 1440px;
  height: 160px;
  /* border: 1px solid red; */
  margin: 0 auto;
  background-image: url('https://res.cloudinary.com/djjgtili7/image/upload/v1647711364/job-listings/bg-header-desktop_gwgtuo.svg');
  background-repeat: no-repeat;
  background-size: 1440px 160px;
  background-color: hsl(180, 29%, 50%);
  margin-bottom: 50px;

  @media screen and (max-width: 394px) {
    width: 393px;
    height: 60px;
    background-size: 393px 60px;
    margin-bottom: 50px;
  }
`;

export default class HeaderPrincipal extends Component {
  render() {
    return <DivHeader></DivHeader>;
  }
}
