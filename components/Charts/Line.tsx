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
  // Legend,
  Tooltip,
} from 'chart.js';
import('chartjs-plugin-zoom').then((plugin) => ChartJS.register(plugin.default));
import { ForwardedRef, useEffect, useRef, useState } from 'react';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

export default function LineChart({
  data,
  title,
}: {
  title?: string;
  data: ChartData<'line', (number | Point | null)[], unknown>;
}) {
  const chartRef: ForwardedRef<ChartJSOrUndefined<'line', (number | Point | null)[], unknown>> | undefined = useRef();
  const [isZoomed, setIsZoomed] = useState(chartRef.current?.isZoomedOrPanned());

  useEffect(() => {
    import('chartjs-plugin-zoom').then((plugin) => ChartJS.register(plugin.default));
    chartRef.current?.zoom(1.5);
  }, []);

  return (
    <div className='relative'>
      <Line
        ref={chartRef}
        data={data}
        options={{
          font: {
            weight: 400,
            family:
              "'__Plus_Jakarta_Sans_e3c363', '__Plus_Jakarta_Sans_Fallback_e3c363','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          scales: {
            y: { min: 0, max: 1 },
          },
          // animation: false,
          plugins: {
            zoom: {
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                drag: {
                  enabled: true,
                  modifierKey: 'shift',
                },
                mode: 'x',
                // onZoomStart: () => setIsZoomed(chartRef.current?.isZoomedOrPanned),
                // onZoomComplete: (e) => setIsZoomed(e.chart.isZoomedOrPanned()),
              },
              pan: {
                enabled: true,
              },
              limits: {
                y: {
                  min: 0,
                  max: 1,
                },
              },
            },
            tooltip: {
              intersect: false,
              padding: 12,
              bodyFont: {
                family:
                  "'__Plus_Jakarta_Sans_e3c363', '__Plus_Jakarta_Sans_Fallback_e3c363','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              },
              titleFont: {
                family:
                  "'__Plus_Jakarta_Sans_e3c363', '__Plus_Jakarta_Sans_Fallback_e3c363','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              },
            },
            title: {
              display: true,
              text: title,
              padding: { bottom: 30 },
              font: {
                // size: 14,
                weight: 400,
                family:
                  "'__Plus_Jakarta_Sans_e3c363', '__Plus_Jakarta_Sans_Fallback_e3c363','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              },
            },
          },
        }}
      />
      {/* {isZoomed && ( */}
      <button
        onClick={() => chartRef.current?.resetZoom()}
        className='absolute left-[10%] top-[3%] py-1 px-2 rounded-lg bg-black text-white text-xs opacity-30 hover:opacity-70 transition-opacity'>
        Reset
      </button>
      {/* )} */}
    </div>
  );
}
