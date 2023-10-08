'use client'
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SMSCards from '@/components/SMSCard';
import { useRouter } from 'next/navigation';

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // Append a unique query parameter (timestamp) to the URL
        const timestamp = Date.now();
        const response = await fetch(`/api/getData?timestamp=${timestamp}`, {
          method: 'GET'
        });

        const responseData = await response.json();

        setData(responseData.allRatModels);
      } catch (error) {
        setData('An error occurred');
      }
    }

    getData();
  }, []);

  const router = useRouter();

  const viewDetails = (id) => {
    console.log(id);
    router.push('/details/' + id);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <div className="w-4/5 max-w-screen-md m-4 p-4 bg-gray-800 rounded-lg shadow-md overflow-y-auto max-h-screen">
        {data.map((item, index) => (
          <div key={index} className={`mb-4`}>
            <button onClick={() => viewDetails(item._id)}>
              <SyntaxHighlighter language="json" style={atomDark}>
                {JSON.stringify(item, null, 2).slice(0, 400)}
              </SyntaxHighlighter>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataPage;
