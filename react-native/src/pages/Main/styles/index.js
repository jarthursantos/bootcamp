import styled from 'styled-components/native';
import {RectButton, FlatList} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 16px 16px 0;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  background: #7159c1;
  align-items: center;
  border-radius: 4px;
  padding: 0 12px;
  margin-left: 10px;
  justify-content: center;

  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding-top: 16px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  align-self: stretch;
  background: #7159c1;
  border-radius: 4px;
  padding: 0 12px;
  height: 36px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
