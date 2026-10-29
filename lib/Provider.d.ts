import React from 'react';
import { PropsWithChildren } from 'react';
interface IProps {
    config?: {
        font?: string;
        paddingHorizontal?: number;
        backgroundColor?: string;
        tintOpacity?: number;
        paddingBottom?: number;
    };
}
declare const Provider: React.FC<PropsWithChildren<IProps>>;
export default Provider;
