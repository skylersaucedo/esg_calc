import { useState } from 'react';
import { DrillingInput } from './DrillingInput';

export function Drilling() {
  const [calcParams, setCalcParams] = useState({
    rigEfficiency: 'medium',
    wellComplexity: 'med',
    holeSize: 'med',
    horizontalWell: false,
    fieldDepth: 9000,
    lengthOfLateral: 2000,
  });

  const handleParamsChange = (key, value) => {
    setCalcParams(prev => ({ ...prev, [key]: value }));
  };

  return <DrillingInput calcParams={calcParams} onParamsChange={handleParamsChange} />;
}
