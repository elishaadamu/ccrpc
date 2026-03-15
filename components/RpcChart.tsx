"use client";

import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import Papa from 'papaparse';

interface RpcChartProps {
  url: string;
  type?: string;
  title?: string;
  source?: string;
  description?: string;
  stacked?: boolean;
  yLabel?: string;
}

const COLORS = ['#005ea2', '#0071bc', '#205493', '#112e51', '#494440', '#cf3e3e'];

export default function RpcChart({ 
  url, 
  type = 'bar', 
  title, 
  source, 
  description,
  stacked = false,
  yLabel
}: RpcChartProps) {
  const [data, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            if (results.data && results.data.length > 0) {
              const rawData = results.data as any[];
              const firstRow = rawData[0];
              const keys = Object.keys(firstRow);
              const dataKeys = keys.slice(1);

              // Clean data: strip % and other non-numeric chars for Recharts
              const cleanedData = rawData.map(row => {
                const newRow = { ...row };
                dataKeys.forEach(key => {
                  if (typeof newRow[key] === 'string') {
                    const cleaned = newRow[key].replace(/[^\d.-]/g, '');
                    if (cleaned !== '') {
                      const numericValue = parseFloat(cleaned);
                      if (!isNaN(numericValue)) {
                        newRow[key] = numericValue;
                      }
                    } else if (newRow[key].trim() === '') {
                        newRow[key] = 0;
                    }
                  }
                });
                return newRow;
              });

              setHeaders(dataKeys);
              setData(cleanedData);
            }
            setLoading(false);
          },
          error: (err: any) => {
            setError(err.message);
            setLoading(false);
          }
        });
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  if (loading) return <div className="usa-alert usa-alert--info"><div className="usa-alert__body"><p className="usa-alert__text">Loading chart...</p></div></div>;
  if (error) return <div className="usa-alert usa-alert--error"><div className="usa-alert__body"><h3 className="usa-alert__heading">Chart Error</h3><p className="usa-alert__text">{error} (URL: {url})</p></div></div>;
  if (data.length === 0) return <div className="usa-alert usa-alert--warning"><div className="usa-alert__body"><p className="usa-alert__text">No data available for chart.</p></div></div>;

  const categoryKey = Object.keys(data[0])[0];

  const renderChart = () => {
    switch (type.toLowerCase()) {
      case 'line':
        return (
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={categoryKey} />
            <YAxis label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft' } : undefined} />
            <Tooltip />
            <Legend />
            {headers.map((header, index) => (
              <Line 
                key={header} 
                type="monotone" 
                dataKey={header} 
                stroke={COLORS[index % COLORS.length]} 
                activeDot={{ r: 8 }} 
              />
            ))}
          </LineChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              dataKey={headers[0]}
              nameKey={categoryKey}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      case 'bar':
      default:
        return (
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={categoryKey} />
            <YAxis label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft' } : undefined} />
            <Tooltip />
            <Legend />
            {headers.map((header, index) => (
              <Bar 
                key={header} 
                dataKey={header} 
                stackId={stacked ? 'a' : undefined} 
                fill={COLORS[index % COLORS.length]} 
              />
            ))}
          </BarChart>
        );
    }
  };

  return (
    <div className="rpc-chart-outer-container margin-y-6" style={{ width: '100%', minHeight: '450px' }}>
      {title && <h3 className="margin-bottom-1">{title}</h3>}
      {description && <p className="usa-hint margin-bottom-3">{description}</p>}
      <div className="rpc-chart-canvas" style={{ width: '100%', height: '400px', position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
      {source && <p className="usa-hint margin-top-2 font-sans-3xs">Source: {source}</p>}
    </div>
  );
}
