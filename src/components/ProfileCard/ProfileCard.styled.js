import styled from 'styled-components';

export const ProfileContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 16px 16px 0 16px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
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
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  padding: 20px;
  margin-bottom: 10px;
  width: 160px;
  height: 160px;
  border-radius: ${props => props.theme.borderRadius.circle};
  background-color: ${props => props.theme.colors.backgroundYellow};
  box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.secondaryAccent};
  border: 1px solid ${props => props.theme.colors.secondary};
  transition: ${props => props.theme.transition};
  &:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
`;

export const Name = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.span`
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Location = styled.span`
  color: rgba(0, 0, 0, 0.6);
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 10px;

  width: 100%;
  padding: 16px;
  margin: 0;
  list-style: none;
`;

export const StatsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-basis: calc(100% / 3 - 20px);

  padding: 16px;
  background-color: ${props => props.theme.colors.backgroundYellow};
  box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.secondaryAccent};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius.sm};
`;

export const Label = styled.span`
  font-weight: bold;
`;
