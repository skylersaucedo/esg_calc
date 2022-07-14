import { useState } from 'react';
import { AppHeader, Select, MenuItem } from '@corva/ui/components';
import PropTypes from 'prop-types';
import { DEFAULT_SETTINGS } from './constants';
import { Drilling } from './components/Drilling';
import { Completion } from './components/Completion';

import styles from './App.css';

function App(props) {
  const { appHeaderProps } = props;
  const [segment, setSegment] = useState('drilling');

  return (
    <div className={styles.container}>
      <AppHeader {...appHeaderProps} />
      <div className={styles.content}>
        <Select label="Segment" value={segment} onChange={event => setSegment(event.target.value)}>
          <MenuItem value="drilling">Drilling</MenuItem>
          <MenuItem value="completion">Completion</MenuItem>
        </Select>
        <br />
        <br />
        {segment === 'drilling' ? <Drilling /> : <Completion />}
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
