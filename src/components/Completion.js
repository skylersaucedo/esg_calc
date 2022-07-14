import { useState } from 'react';
import { CompletionInput } from './CompletionInput';

export function Completion() {
  const [calcParams, setCalcParams] = useState({
    fracPressGradient: 0.5,
    totalFluidInjected: 10,
  });

  const handleParamsChange = (key, value) => {
    setCalcParams(prev => ({ ...prev, [key]: value }));
  };

  return <CompletionInput calcParams={calcParams} onParamsChange={handleParamsChange} />;
}
