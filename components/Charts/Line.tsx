'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Point,
  ChartData,
  CategoryScale,
  Legend,
  Tooltip,
  Interaction,
} from 'chart.js';
import { CrosshairPlugin, Interpolate } from 'chartjs-plugin-crosshair';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip, CrosshairPlugin);
Interaction.modes.interpolate = Interpolate;

export default function LineChart({ data }: { data: ChartData<'line', (number | Point | null)[], unknown> }) {
  return (
    <Line
      data={data}
      options={{
        // animation: false,
        plugins: {
          tooltip: {
            mode: 'interpolate',
            intersect: false,
          },
          crosshair: {
            line: {
              color: '#F66', // crosshair line color
              width: 1, // crosshair line width
            },
            sync: {
              enabled: true, // enable trace line syncing with other charts
              group: 1, // chart group
              suppressTooltips: false, // suppress tooltips when showing a synced tracer
            },
            zoom: {
              enabled: true, // enable zooming
              zoomboxBackgroundColor: 'rgba(66,133,244,0.2)', // background color of zoom box
              zoomboxBorderColor: '#48F', // border color of zoom box
              zoomButtonText: 'Reset Zoom', // reset zoom button text
              zoomButtonClass: 'reset-zoom', // reset zoom button class
            },
            callbacks: {
              beforeZoom: () =>
                function (start, end) {
                  // called before zoom, return false to prevent zoom
                  return true;
                },
              afterZoom: () =>
                function (start, end) {
                  // called after zoom
                },
            },
          },
        },
      }}
    />
  );
}
