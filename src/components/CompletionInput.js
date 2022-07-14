/* eslint-disable react/prop-types */
import { InputAdornment, TextField } from '@material-ui/core';

export function CompletionInput({ calcParams, onParamsChange }) {
  return (
    <>
      <TextField
        label="Frac press gradient"
        type="number"
        InputProps={{ startAdornment: <InputAdornment position="start">psi</InputAdornment> }}
        onChange={event => onParamsChange('fracPressGradient', event.target.value)}
        value={calcParams.fracPressGradient}
      />

      <TextField
        label="Total fluid injected"
        type="number"
        InputProps={{ startAdornment: <InputAdornment position="start">gals</InputAdornment> }}
        onChange={event => onParamsChange('totalFluidInjected', event.target.value)}
        value={calcParams.totalFluidInjected}
      />
    </>
  );
}
