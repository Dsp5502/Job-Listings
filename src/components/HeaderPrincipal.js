import React, { Component } from 'react';
import styled from 'styled-components';

const DivHeader = styled.div`
  width: 1440px;
  height: 160px;
  border: 1px solid red;
  margin: 0 auto;
  background-image: url('https://res.cloudinary.com/djjgtili7/image/upload/v1647711364/job-listings/bg-header-desktop_gwgtuo.svg');
  background-repeat: no-repeat;
  background-size: 1440px 160px;
  background-color: hsl(180, 29%, 50%);

  @media screen and (max-width: 415px) {
    width: 415px;
    height: 60px;
    background-size: 415px 160px;
  }
`;

export default class HeaderPrincipal extends Component {
  render() {
    return <DivHeader></DivHeader>;
  }
}
