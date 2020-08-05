import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled(LinearGradient).attrs({
    colors: ['#7159c1', '#9b49c1'],
    start: { x:0, y:0},
    end: {x:1, y:1}
})`
    flex: 1;
    padding-top: ${30 + getStatusBarHeight(true)}px
`;

export const Title = styled.Text`
    font-size: 32px;
    color: #fff;
    font-weight: bold;
    padding: 0px 20px;
`;
export const Form = styled.View`
    flex-direction: row;
    margin-top:10px;
    padding: 0 20px;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    flex:1;
    padding: 12px 15px;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
`;
export const Submit = styled.TouchableOpacity`
    background: #6bd4c1;
    margin-left: 10px;
    justify-content: center;
    border-radius: 4px;
    padding: 0 16px;

`;

export const List = styled.FlatList.attrs({
    
})`
    margin-top: 20px;
`;