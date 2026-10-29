import React from 'react';
import { SharedValue } from 'react-native-reanimated';
import { ShowProperties } from '../types';
interface IProps {
    value: SharedValue<number>;
    text: string;
    icon: ShowProperties['icon'];
    numberOfLines?: number;
    paddingHorizontal?: number;
    paddingBottom?: number;
    font?: string;
    backgroundColor?: string;
    tintOpacity?: number;
}
declare const Toast: React.FC<IProps>;
export default Toast;
