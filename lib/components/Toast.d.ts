import React from 'react';
import { SharedValue } from 'react-native-reanimated';
import { ShowProperties } from '../types';
interface IProps {
    value: SharedValue<number>;
    text: string | null;
    icon: ShowProperties['icon'] | null;
    paddingHorizontal?: number;
    paddingBottom?: number;
    font?: string;
    backgroundColor?: string;
}
declare const Toast: React.FC<IProps>;
export default Toast;
