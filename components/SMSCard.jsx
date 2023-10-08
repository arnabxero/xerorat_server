import React from 'react';

function SMSCards({ data }) {
    // Function to parse the messages from the data string
    function parseMessages(data) {
        const messages = data.split('\nFrom: ');
        return messages.map((message) => {
            const [from, messageBody] = message.split('\nMessage: ');
            return { from, messageBody };
        });
    }

    const messages = parseMessages(data);

    return (
        <div>
            {messages.map((message, index) => (
                <div key={index} className="bg-gray-500 rounded-lg p-4 shadow-md mb-4 mx-4">
                    <div className="font-bold">From: {message.from}</div>
                    <div className="mt-2">Message: {message.messageBody}</div>
                </div>
            ))}
        </div>
    );
}

export default SMSCards;
