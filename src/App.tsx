import React from 'react';
import { SafeAreaView } from 'react-native';
import Primeiro from './components/Primeiro';

import X, { Comp1, Comp2 } from './components/Multi';
export default () => (
    <SafeAreaView>
        <Primeiro />
        <Comp1 />
        <X />
        <Comp2 />
    </SafeAreaView>
);
