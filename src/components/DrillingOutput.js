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

export function DrillingOutput({ output }) {
  const styles = useStyles();

  return (
    <>
      <div className={styles.outputLine}>
        <div className={styles.label}>Drilling fuel per vertical (gal diesele/ft)</div>
        <div className={styles.value}>{output.drillingFuelPerVertical}</div>
      </div>

      <div className={styles.outputLine}>
        <div className={styles.label}>Drilling fuel per horizontal (gal diesele/ft)</div>
        <div className={styles.value}>{output.drillingFuelPerHorizontal}</div>
      </div>

      <div className={styles.outputLine}>
        <div className={styles.label}>Drilling fuel per well (gal diesele)</div>
        <div className={styles.value}>{output.drillingFuelPerWell}</div>
      </div>

      <div className={styles.outputLine}>
        <div className={styles.label}>Drilling energy per well (MMBTU)</div>
        <div className={styles.value}>{output.drillingEnergyPerWell}</div>
      </div>

      <div className={styles.outputLine}>
        <div className={styles.label}>Drilling emissions (MT CO2e)</div>
        <div className={styles.value}>{output.drillingEmissions}</div>
      </div>
    </>
  );
}
