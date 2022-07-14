import { AppHeader } from '@corva/ui/components';
import PropTypes from 'prop-types';
import { DEFAULT_SETTINGS } from './constants';
import { UserInputSection } from './assets/components/user_input'

import logo from './assets/logo.svg';
import styles from './App.css';

function App(props) {
  const { isExampleCheckboxChecked, appHeaderProps } = props;
  return (
    <div className={styles.container}>
      <AppHeader {...appHeaderProps} />
      <div className={styles.content}>
        <UserInputSection />  
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
