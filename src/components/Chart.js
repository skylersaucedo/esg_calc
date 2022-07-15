import { useMemo, useRef, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// import { getHighchartsOptions } from './options';
// import styles from './styles.css';

const defaultHighchartsOptions = {
  chart: {
    backgroundColor: '#201f1f',
    type: 'line',
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
    },
  },
  xAxis: {
    type: 'datetime',
    title: { text: 'Date' },
  },
  yAxis: {
    title: { text: 'Hole Depth' },
    gridLineColor: '#3b3b3b',
    min: 0,
  },
  credits: { enabled: false },
  exporting: { enabled: false },
};

const payload = {
  company_id: 196,
  provider: 'sample',
  asset_id: 20173768,
  collection: 'opgee_completions',
  version: 1,
  data: {
    stage_emissions: [
      {
        stage_number: 28,
        diesel_consumption: 1804.7580355316866,
        co2_consumption: 17.884771418411418,
        ghg_consumption: 18.195875428100567,
      },
      {
        stage_number: 27,
        diesel_consumption: 1692.8908207108257,
        co2_consumption: 16.776190917925653,
        ghg_consumption: 17.068011268310702,
      },
      {
        stage_number: 26,
        diesel_consumption: 1780.365378656,
        co2_consumption: 17.643045334404334,
        ghg_consumption: 17.949944540340518,
      },
      {
        stage_number: 25,
        diesel_consumption: 1896.6141277096065,
        co2_consumption: 18.79504591485196,
        ghg_consumption: 19.121984068525126,
      },
      {
        stage_number: 24,
        diesel_consumption: 1938.5520749134976,
        co2_consumption: 19.21064212483256,
        ghg_consumption: 19.544809537650938,
      },
      {
        stage_number: 23,
        diesel_consumption: 1982.4893900403106,
        co2_consumption: 19.646051649162647,
        ghg_consumption: 19.987792971968855,
      },
      {
        stage_number: 22,
        diesel_consumption: 2356.0646221679744,
        co2_consumption: 23.348103393852575,
        ghg_consumption: 23.75424157781543,
      },
      {
        stage_number: 21,
        diesel_consumption: 1801.1099138809857,
        co2_consumption: 17.848619302424233,
        ghg_consumption: 18.159094449268046,
      },
      {
        stage_number: 20,
        diesel_consumption: 1848.2017682062494,
        co2_consumption: 18.31528964476093,
        ghg_consumption: 18.633882480744145,
      },
      {
        stage_number: 19,
        diesel_consumption: 1863.0008245231616,
        co2_consumption: 18.4619451710006,
        ghg_consumption: 18.78308906683182,
      },
      {
        stage_number: 18,
        diesel_consumption: 1722.39342329384,
        co2_consumption: 17.06855548594931,
        ghg_consumption: 17.365461492017364,
      },
      {
        stage_number: 17,
        diesel_consumption: 1949.9119972297856,
        co2_consumption: 19.32321655861136,
        ghg_consumption: 19.65934219370263,
      },
      {
        stage_number: 16,
        diesel_consumption: 1595.8766059275777,
        co2_consumption: 15.814800514572275,
        ghg_consumption: 16.08989756431441,
      },
      {
        stage_number: 15,
        diesel_consumption: 1914.3064013212065,
        co2_consumption: 18.970372614157796,
        ghg_consumption: 19.300360560186906,
      },
      {
        stage_number: 14,
        diesel_consumption: 2027.8744127855264,
        co2_consumption: 20.095807650597187,
        ghg_consumption: 20.445372439085716,
      },
      {
        stage_number: 13,
        diesel_consumption: 1817.1139760191616,
        co2_consumption: 18.007216182156647,
        ghg_consumption: 18.320450107631434,
      },
      {
        stage_number: 12,
        diesel_consumption: 2065.108272942838,
        co2_consumption: 20.464787350273347,
        ghg_consumption: 20.82077050785241,
      },
      {
        stage_number: 11,
        diesel_consumption: 1900.0090020559999,
        co2_consumption: 18.828688403475972,
        ghg_consumption: 19.156211765249488,
      },
      {
        stage_number: 10,
        diesel_consumption: 1951.75900317224,
        co2_consumption: 19.34151999787518,
        ghg_consumption: 19.67796401966611,
      },
      {
        stage_number: 9,
        diesel_consumption: 2003.4480814645378,
        co2_consumption: 19.853747859940782,
        ghg_consumption: 20.19910203987883,
      },
      {
        stage_number: 8,
        diesel_consumption: 2036.8860074172417,
        co2_consumption: 20.1851106524016,
        ghg_consumption: 20.536228858671585,
      },
      {
        stage_number: 7,
        diesel_consumption: 2069.1248670778014,
        co2_consumption: 20.504590950850304,
        ghg_consumption: 20.861266488524688,
      },
      {
        stage_number: 6,
        diesel_consumption: 2105.0458675162017,
        co2_consumption: 20.860560487659807,
        ghg_consumption: 21.223428083797664,
      },
      {
        stage_number: 5,
        diesel_consumption: 2019.8697207755938,
        co2_consumption: 20.01648284136854,
        ghg_consumption: 20.364667781848862,
      },
      {
        stage_number: 4,
        diesel_consumption: 2054.9292596518017,
        co2_consumption: 20.36391547582203,
        ghg_consumption: 20.718143976107882,
      },
      {
        stage_number: 3,
        diesel_consumption: 1989.0439779268256,
        co2_consumption: 19.711006232427696,
        ghg_consumption: 20.05387743443833,
      },
      {
        stage_number: 2,
        diesel_consumption: 1877.5360434817185,
        co2_consumption: 18.605986124675457,
        ghg_consumption: 18.92963560009723,
      },
      {
        stage_number: 1,
        diesel_consumption: 2270.9097319886337,
        co2_consumption: 22.504236395599396,
        ghg_consumption: 22.895695588108623,
      },
    ],
    cumulative_emissions: {
      stage_number: [
        28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
        4, 3, 2, 1,
      ],
      diesel_consumption: [
        1804.7580355316866, 3497.648856242512, 5278.014234898512, 7174.628362608119,
        9113.180437521616, 11095.669827561927, 13451.734449729902, 15252.844363610888,
        17101.046131817136, 18964.0469563403, 20686.44037963414, 22636.352376863924,
        24232.2289827915, 26146.535384112707, 28174.409796898235, 29991.523772917397,
        32056.632045860235, 33956.64104791624, 35908.40005108848, 37911.848132553016,
        39948.73413997026, 42017.85900704806, 44122.90487456426, 46142.77459533985,
        48197.70385499165, 50186.747832918474, 52064.28387640019, 54335.19360838883,
      ],
      co2_consumption: [
        17.884771418411418, 34.66096233633707, 52.304007670741406, 71.09905358559337,
        90.30969571042593, 109.95574735958857, 133.30385075344114, 151.15247005586536,
        169.4677597006263, 187.92970487162688, 204.99826035757619, 224.32147691618755,
        240.13627743075983, 259.1066500449176, 279.2024576955148, 297.20967387767143,
        317.6744612279448, 336.50314963142074, 355.84466962929594, 375.6984174892367,
        395.8835281416383, 416.3881190924886, 437.2486795801484, 457.26516242151695,
        477.62907789733896, 497.34008412976664, 515.9460702544421, 538.4503066500415,
      ],
      ghg_consumption: [
        18.195875428100567, 35.26388669641127, 53.21383123675179, 72.33581530527691,
        91.88062484292784, 111.8684178148967, 135.62265939271214, 153.7817538419802,
        172.41563632272434, 191.19872538955616, 208.56418688157353, 228.22352907527616,
        244.31342663959057, 263.6137871997775, 284.0591596388632, 302.3796097464946,
        323.200380254347, 342.3565920195965, 362.0345560392626, 382.23365807914143,
        402.769886937813, 423.6311534263377, 444.85458151013535, 465.2192492919842,
        485.93739326809214, 505.99127070253047, 524.9209063026277, 547.8166018907364,
      ],
    },
  },
};

function getHighchartsOptions({ data, dataset }) {

  return {
    ...defaultHighchartsOptions,
    title: { text: `Example ${dataset} chart`, style: { color: 'white' } },
    series: [
      {
        name: dataset,
        data: data.stage_emissions.map(record => ({
          x: record.stage_number,
          y: record.co2_consumption,
          // name: record.data.state,
        })),
      },
      // turboThreshold: 20000,
    ],
  };
}

export function Chart({ coordinates }) {
  const chartRef = useRef();

  useEffect(() => {
    // NOTE: Update chart size when container size has changed
    chartRef.current?.chart.setSize();
  }, [coordinates]);

  // NOTE: Use memoization technique
  // Calculate chart options ONLY when data changed.
  // This will also help avoid choppy animation
  return useMemo(() => {
    const options = getHighchartsOptions({ data: payload.data, dataset: 'Dataset' });

    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // NOTE: Pass className to style highchart
        // containerProps={{ className: styles.chartContainer }}
        ref={chartRef}
      />
    );
  }, []);
}
