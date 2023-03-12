import styled from 'styled-components';
import { getRandomHexColor } from './randomColor';

export const Section = styled.section`
  width: 500px;
  margin-bottom: 50px;
  padding-top: 24px;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 500;
  color: #6d7178;
  text-transform: uppercase;
`;
export const List = styled.ul`
  display: flex;
  border-top: 1px solid #d6d6d6;
  list-style: none;
  margin:0;
  padding:0;
`;
export const ListItem = styled.li`
  width: 20%;
  padding: 24px;
  text-align: center;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  display: block;
  color: #fff;
  font-size: 18px;
`;

export const Percentage = styled.span`
  display: block;
  color: #fff;
  margin-top: 12px;
  font-size: 28px;
`;