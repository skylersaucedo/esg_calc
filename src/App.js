import { useState } from 'react';
import { LoadingIndicator, AppHeader, Select, MenuItem, Button } from '@corva/ui/components';
// import { getAppStorage } from '@corva/ui/clients/jsonApi';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { DEFAULT_SETTINGS } from './constants';

import { CompletionInput } from './components/CompletionInput';
import { CompletionOutput } from './components/CompletionOutput';
import { DrillingInput } from './components/DrillingInput';
import { DrillingOutput } from './components/DrillingOutput';

//import { HighChartThing } from './components/MetricTonsPerStage';
//import { useDeepData } from './effects/useDeepsData';
import styles from './App.css';

const initialDrillingParams = {
  rigEfficiency: 'medium',
  wellComplexity: 'med',
  holeSize: 'med',
  horizontalWell: false,
  fieldDepth: 9000,
  lengthOfLateral: 2000,
};

const initialCompletionParams = {
  fracPressGradient: 0.5,
  totalFluidInjected: 10,
};

const initialDrillingOutput = {
  drillingFuelPerVertical: 0,
  drillingFuelPerHorizontal: 0,
  drillingFuelPerWell: 0,
  drillingEnergyPerWell: 0,
  drillingEmissions: 0,
};

const initialCompletionOutput = {
  fracturingFuelPerWell: 0,
  fracturingEmissions: 0,
};

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,
  },
  button: {
    alignSelf: 'flex-start',
  },
  layout: {
    display: 'flex',
    gap: 36,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 240,
    '& > *': {
      marginBottom: 8,
    },
  },
  outputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    // width: 320,
    '& > *': {
      marginBottom: 8,
    },
  },
});
function App(props) {
  const classes = useStyles();
  const { appHeaderProps } = props;
  const [segment, setSegment] = useState('drilling');

  const [calcParams, setCalcParams] = useState(initialDrillingParams);
  const [output, setOutput] = useState(initialDrillingOutput);

  const handleParamsChange = (key, value) => {
    setCalcParams(prev => ({ ...prev, [key]: value }));
  };

  const handleSegmentChange = event => {
    setSegment(event.target.value);
    if (segment !== event.target.value)
      setCalcParams(
        event.target.value === 'drilling' ? initialDrillingParams : initialCompletionParams
      );
    setOutput(event.target.value === 'drilling' ? initialDrillingOutput : initialCompletionOutput);
  };

  const isDrilling = segment === 'drilling';

  const Input = isDrilling ? DrillingInput : CompletionInput;
  const Output = isDrilling ? DrillingOutput : CompletionOutput;

  // const activeWellAssetId = props.wells.find(({ is_active }) => is_active)?.asset_id;

  // useEffect(async () => {
  //   const prediction = await getAppStorage('corva', 'completion.predictions', activeWellAssetId, {
  //     limit: 1,
  //     sort: '{timestamp: -1}',
  //   });
  // }, [activeWellAssetId]);

  const handleClick = async () => {
    // NOTE: make a request here, parse response and set output
    // const response = await fetch();
    // setOutput(response);
  };

  //const {useDeepData} = useDeepData({ asset_id, dataset});

  return (
    <div className={styles.container}>
      <AppHeader {...appHeaderProps} />
      <div className={styles.content}>
        <div className={classes.header}>
          <Select
            style={{ width: 240 }}
            className={styles.segmentSelector}
            label="Segment"
            value={segment}
            onChange={handleSegmentChange}
          >
            <MenuItem value="drilling">Drilling</MenuItem>
            <MenuItem value="completion">Completion</MenuItem>
          </Select>
        </div>

        <div className={classes.layout}>
          <div className={classes.inputWrapper}>
            <Input calcParams={calcParams} onParamsChange={handleParamsChange} />
          </div>
          <div className={classes.outputWrapper}>
            <Output output={output} />
          </div>
        </div>
        <Button className={classes.button} variation="primary" onClick={handleClick}>
          Caculate
        </Button>
      </div>

    </div>
  );
}

App.propTypes = {
  isExampleCheckboxChecked: PropTypes.bool,
  appHeaderProps: PropTypes.shape({}).isRequired,
};

App.defaultProps = {
  ...DEFAULT_SETTINGS,
};

// Important: Do not change root component default export (App.js). Use it as container
//  for your App. It's required to make build and zip scripts work as expected;
export default App;
