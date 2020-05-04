import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;

  margin-top: 30px;
  align-self: center;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogOutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const Separator = styled.View`
  height: 1px;
  margin-top: 20px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.2);
`;
