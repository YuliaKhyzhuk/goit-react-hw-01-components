import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 16px;
  @media (min-width: 768px) {
    width: 360px;
  }
  @media (min-width: 1280px) {
    width: 480px;
  }
`;

export const ListItem = styled.li`
  padding: 16px;
  width: 320px;

  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.colors.backgroundGreen};

  box-shadow: ${props => {
    return ` 0 1px 3px ${props.theme.colors.secondaryAccent}`;
  }};

  transition: ${props => props.theme.transition};
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (min-width: 768px) {
    width: 360px;
  }
  @media (min-width: 1280px) {
    width: 480px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
