import React, { Component } from 'react';
import styled from 'styled-components';

const DivCard = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 150px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  box-shadow: -9px 15px 53px -15px rgba(0, 0, 0, 0.42);
  cursor: pointer;

  &:hover {
    border-left: 5px solid hsl(180, 29%, 50%);
  }
  @media screen and (max-width: 394px) {
    width: 350px;
    height: 400px;
    flex-direction: column;
    border-left: 5px solid hsl(180, 29%, 50%);
  }
`;

const DivImg = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 394px) {
    flex-direction: column;
  }
`;

const DivTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  margin: 0 30px;
`;

const ImgLogo = styled.img`
  padding: 5px;
  margin: 25px;
`;

const DivInfo = styled.div`
  margin-top: 15px;
  /* border: 1px solid red; */
`;
const DivDias = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  list-style: none;
  color: hsl(180, 8%, 52%);
`;
const LiDias = styled.li`
  margin-right: 20px;
`;
const Titulop = styled.p`
  color: hsl(180, 29%, 50%);
`;
const Cargop = styled.p`
  color: hsl(180, 14%, 20%);
  &:hover {
    color: hsl(180, 29%, 50%);
  }
`;

const SpanTags = styled.span`
  margin-left: 20px;
  padding: 7px;
  border-radius: 6px;
  background-color: rgba(91, 164, 164, 0.2);
  font-size: 12px;
  font-weight: 700;
  color: hsl(180, 29%, 50%);

  &:hover {
    background-color: rgba(91, 164, 164, 1);
    color: white;
  }
`;

export default class CardsJobs extends Component {
  render() {
    return (
      <DivCard>
        <DivImg>
          <div>
            <ImgLogo
              src='https://res.cloudinary.com/djjgtili7/image/upload/v1647716939/job-listings/photosnap_auagw8.svg'
              alt=''
            />
          </div>
          <DivInfo>
            <Titulop>Photoshop</Titulop>
            <Cargop>
              <strong>Senior Frontend Developer</strong>
            </Cargop>
            <DivDias>
              <LiDias>5d ago</LiDias>
              <LiDias>contract</LiDias>
              <LiDias>USA only</LiDias>
            </DivDias>
          </DivInfo>
        </DivImg>
        <DivTags>
          <SpanTags>Frontend</SpanTags>
          <SpanTags>Senior</SpanTags>
          <SpanTags>HTML</SpanTags>
          <SpanTags>CSS</SpanTags>
          <SpanTags>JavaScript</SpanTags>
        </DivTags>
      </DivCard>
    );
  }
}
