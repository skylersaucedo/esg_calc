/* eslint-disable react/prop-types */
import { Select, MenuItem } from '@corva/ui/components';
import { InputAdornment, TextField, Checkbox, FormControlLabel } from '@material-ui/core';

export function DrillingInput({ calcParams, onParamsChange }) {
  return (
    <>
      <Select
        label="Rig efficiency"
        value={calcParams.rigEfficiency}
        onChange={event => onParamsChange('rigEfficiency', event.target.value)}
      >
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </Select>

      <Select
        label="Well complexity"
        value={calcParams.wellComplexity}
        onChange={event => onParamsChange('wellComplexity', event.target.value)}
      >
        <MenuItem value="simple">Simple</MenuItem>
        <MenuItem value="med">Med</MenuItem>
        <MenuItem value="complex">Complex</MenuItem>
      </Select>

      <Select
        label="Hole size"
        value={calcParams.holeSize}
        onChange={event => onParamsChange('holeSize', event.target.value)}
      >
        <MenuItem value="small">Small</MenuItem>
        <MenuItem value="med">Med</MenuItem>
        <MenuItem value="large">Large</MenuItem>
      </Select>

      <FormControlLabel
        control={<Checkbox checked={calcParams.horizontalWell} />}
        label="Horizontal well"
        onChange={event => onParamsChange('horizontalWell', event.target.checked)}
      />

      <TextField
        label="Field depth"
        type="number"
        InputProps={{ startAdornment: <InputAdornment position="start">ft</InputAdornment> }}
        onChange={event => onParamsChange('fieldDepth', event.target.value)}
        value={calcParams.fieldDepth}
        />

      <TextField
        label="Length of lateral"
        type="number"
        InputProps={{ startAdornment: <InputAdornment position="start">ft</InputAdornment> }}
        onChange={event => onParamsChange('lengthOfLateral', event.target.value)}
        value={calcParams.lengthOfLateral}
      />
    </>
  );
}
