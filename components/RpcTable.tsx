"use client";

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

interface RpcTableProps {
  url: string;
  title?: string;
  source?: string;
  description?: string;
}

export default function RpcTable({ url, title, source, description }: RpcTableProps) {
  const [data, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(url);
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            if (results.data && results.data.length > 0) {
              setData(results.data);
              setHeaders(Object.keys(results.data[0] as any));
            }
            setLoading(false);
          },
          error: (error: any) => {
            console.error("Error parsing CSV:", error);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error("Error fetching CSV:", error);
        setLoading(false);
      }
    };

    fetchCSV();
  }, [url]);

  if (loading) return <div>Loading table...</div>;
  if (data.length === 0) return <div>No data available for table.</div>;

  return (
    <div className="rpc-table-container margin-y-4 overflow-auto">
      {title && <h3 className="text-center">{title}</h3>}
      <table className="usa-table usa-table--striped width-full">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {headers.map((header) => (
                <td key={`${i}-${header}`}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {description && <p className="usa-hint margin-top-2">{description}</p>}
      {source && <p className="usa-hint">Source: {source}</p>}
    </div>
  );
}
