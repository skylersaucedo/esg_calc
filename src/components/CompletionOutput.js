import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: theme.palette.primary.text6,
  },
  value: {
    fontSize: 32,
  },
  outputLine: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
}));
export function CompletionOutput({ output }) {
  const styles = useStyles();

  return (
    <>
      <div className={styles.outputLine}>
        <div className={styles.label}>Fracturing fuel per well (gal diesel)</div>
        <div className={styles.value}>{output.fracturingFuelPerWell}</div>
      </div>

      <div className={styles.outputLine}>
        <div className={styles.label}>Fracturing emissions (gal diesel)</div>
        <div className={styles.value}>{output.fracturingEmissions}</div>
      </div>
    </>
  );
}
