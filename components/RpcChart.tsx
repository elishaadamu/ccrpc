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

const COLORS = ['#b22222', '#21b1e6', '#98cc4f', '#f99e28', '#494440', '#cf3e3e'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: 'rgba(33, 33, 33, 0.95)',
        padding: '12px',
        border: '1px solid #444',
        borderRadius: '8px',
        color: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        fontSize: '0.85rem'
      }}>
        <p className="label font-bold margin-bottom-1" style={{ fontSize: '1rem', borderBottom: '1px solid #555', paddingBottom: '4px' }}>{`${label}`}</p>
        <div className="tooltip-items">
          {payload.map((item: any, index: number) => (
            <div key={index} className="tooltip-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '2px 0'
            }}>
              <span style={{ 
                width: '12px', 
                height: '12px', 
                backgroundColor: item.fill, 
                display: 'inline-block',
                borderRadius: '2px'
              }}></span>
              <span style={{ color: '#eee' }}>{`${item.name}:`}</span>
              <span className="font-bold">{`${item.value}`}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

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
    const commonProps = {
      data: data,
      margin: { top: 30, right: 30, left: 20, bottom: 20 }
    };

    switch (type.toLowerCase()) {
      case 'line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis 
              dataKey={categoryKey} 
              axisLine={{ stroke: '#999' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', offset: 10, fill: '#333', fontWeight: 'bold' } : undefined} 
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              align="center" 
              wrapperStyle={{ 
                paddingBottom: '40px',
                paddingTop: '10px'
              }}
              iconType="rect"
              iconSize={14}
              formatter={(value: string) => <span style={{ color: '#555', paddingRight: '15px', fontWeight: 500 }}>{value}</span>}
            />
            {headers.map((header, index) => (
              <Line 
                key={header} 
                type="monotone" 
                dataKey={header} 
                stroke={COLORS[index % COLORS.length]} 
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                activeDot={{ r: 8, strokeWidth: 0 }} 
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
              cy="45%"
              outerRadius={120}
              innerRadius={60}
              paddingAngle={5}
              label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              align="center" 
              iconType="rect"
              iconSize={14}
              wrapperStyle={{ paddingTop: '40px' }}
              formatter={(value: string) => <span style={{ color: '#555', paddingRight: '15px', fontWeight: 500 }}>{value}</span>}
            />
          </PieChart>
        );
      case 'bar':
      default:
        return (
          <BarChart {...commonProps} barCategoryGap="10%">
            <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f5f5f5" />
            <XAxis 
              dataKey={categoryKey} 
              axisLine={{ stroke: '#999' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <YAxis 
              axisLine={{ stroke: '#999' }}
              tickLine={true}
              tick={{ fill: '#666', fontSize: 12 }}
              label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', offset: 10, fill: '#333', fontWeight: 'bold' } : undefined} 
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              align="center" 
              wrapperStyle={{ 
                paddingBottom: '40px',
                paddingTop: '10px'
              }}
              iconType="rect"
              iconSize={14}
              formatter={(value: string) => <span style={{ color: '#555', paddingRight: '15px', fontWeight: 500 }}>{value}</span>}
            />
            {headers.map((header, index) => (
              <Bar 
                key={header} 
                dataKey={header} 
                stackId={stacked ? 'a' : undefined} 
                fill={COLORS[index % COLORS.length]} 
                radius={0}
                barSize={stacked ? 110 : 60}
              />
            ))}
          </BarChart>
        );
    }
  };

  return (
    <div className="rpc-chart-outer-container margin-y-8" style={{ width: '100%', minHeight: '550px' }}>
      {title && <h2 className="text-center margin-bottom-4 font-sans-xl" style={{ border: 'none', fontWeight: 700 }}>{title}</h2>}
      {description && <p className="usa-hint text-center margin-bottom-4">{description}</p>}
      <div className="rpc-chart-canvas" style={{ width: '100%', height: '450px', position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
      <div className="margin-top-4 padding-top-2 border-top-1px border-base-lighter">
        {source && (
          <p className="margin-0 font-sans-2xs text-base">
            <strong>Source:</strong> <span dangerouslySetInnerHTML={{ __html: source }}></span>
          </p>
        )}
        <p className="margin-top-1 font-sans-2xs text-base">
          <strong>Download:</strong> <a href={url} className="usa-link" download>CSV Data</a>
        </p>
      </div>
    </div>
  );
}
