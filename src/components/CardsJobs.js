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
    height: 300px;
    flex-direction: column;
    border-left: 5px solid hsl(180, 29%, 50%);
    justify-content: space-around;
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
  @media screen and (max-width: 394px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0;
    height: 100px;
    align-items: flex-start;
  }
`;

const ImgLogo = styled.img`
  padding: 5px;
  margin: 25px;
  @media screen and (max-width: 394px) {
    margin: -35px 0 0 15px;
    width: 60px;
  }
`;

const DivInfo = styled.div`
  margin-top: 15px;
  /* border: 1px solid red; */
  @media screen and (max-width: 394px) {
    margin: 0 15px;
  }
`;
const DivDias = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  list-style: none;
  color: hsl(180, 8%, 52%);
  @media screen and (max-width: 394px) {
    padding-bottom: 15px;
    border-bottom: 1.2px solid hsl(180, 8%, 52%);
  }
`;
const LiDias = styled.li`
  margin-right: 20px;
`;
const Titulop = styled.p`
  color: hsl(180, 29%, 50%);
  padding: 0;
  margin-bottom: 0;
  margin-top: 18px;
  margin-right: 15px;
  font-size: 13px;
`;
const Titulop1 = styled.p`
  background-color: hsl(180, 29%, 50%);
  color: white;
  padding: 1px 10px;
  border-radius: 15px;
  margin-bottom: 0;
  margin-right: 15px;
  font-weight: bold;
`;
const Titulop2 = styled.p`
  background-color: hsl(180, 14%, 20%);
  color: white;
  border-radius: 15px;
  padding: 0;
  padding: 1px 10px;
  margin-bottom: 0;
  margin-right: 15px;
  font-weight: bold;
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
  @media screen and (max-width: 394px) {
    font-size: 15px;
    margin-left: 25px;
    margin: 0 10px 10px 15px;
  }
`;

const TituloNew = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
`;

export default class CardsJobs extends Component {
  render() {
    return (
      <DivCard>
        <DivImg>
          <div>
            <ImgLogo
              src='https://res.cloudinary.com/djjgtili7/image/upload/v1647716939/job-listings/photosnap_auagw8.svg'
              alt='logo'
            />
          </div>
          <DivInfo>
            <TituloNew>
              <Titulop>Photosnap</Titulop>
              <Titulop1>
                <small>NEW!</small>
              </Titulop1>
              <Titulop2>
                <small>FEATURED</small>
              </Titulop2>
            </TituloNew>
            <Cargop>
              <strong>Senior Frontend Developer</strong>
            </Cargop>
            <DivDias>
              <LiDias>5d ago</LiDias>
              <LiDias>• contract</LiDias>
              <LiDias>• USA only</LiDias>
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
