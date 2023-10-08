'use client'
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {

      try {
        const response = await fetch('/api/getData', {
          method: 'GET'
        });

        const responseData = await response.json();

        setData(responseData.allRatModels);
      } catch (error) {
        setData('An error occurred');
      } finally {
      }

    }
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <div className="w-4/5 max-w-screen-md m-4 p-4 bg-gray-800 rounded-lg shadow-md overflow-y-auto max-h-screen">
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <SyntaxHighlighter language="json" style={atomDark}>
              {JSON.stringify(item, null, 2)}
            </SyntaxHighlighter>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataPage;
