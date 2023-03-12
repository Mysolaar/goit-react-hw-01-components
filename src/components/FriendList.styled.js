import styled from 'styled-components';

export const List = styled.ul`
  width: 350px;
  margin-bottom: 50px;
`;

export const ListItem = styled.li`
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  transition: transform .2s;
  :hover {
    transition: transform .2s;
    transform: scale(1.1);
  }
`;

export const ListItemStatus = styled.span`
  width: 30px;
  height: 30px;
  margin-right: 16px;
  background-color: ${isOnline => {
    return isOnline.online ? 'green' : 'red';
  }};
  border-radius: 50%;
`;
export const Image = styled.img`
  margin-right: 16px;
  background-color: #6d7178;
  border-radius: 8px;
`;

export const ListName = styled.p`
  font-size: 32px;
`;
