import React, { useEffect, useState } from 'react';
import './App.css';

const DataDisplay = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/show-data/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>Test DB</h1>
            <ul>
                {data.length > 0 ? (
                    data.map(item => (
                        <li key={item.id}>
                            {item.name} ( {item.age} años ) - {item.email}
                        </li>
                    ))
                ) : (
                    <li className="no-data">No data available</li>
                )}
            </ul>
        </div>
    );
};

export default DataDisplay;
