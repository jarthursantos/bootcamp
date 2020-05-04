import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 20px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 15px;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 13px;
  color: #999;
`;
