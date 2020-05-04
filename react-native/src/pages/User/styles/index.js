import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 16px 16px 0;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  margin-top: 16px;
  font-size: 20px;
  text-align: center;
  color: #333;
  font-weight: bold;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 8px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding-top: 16px;
`;

export const Starred = styled(RectButton)`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 12px 16px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 12px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
