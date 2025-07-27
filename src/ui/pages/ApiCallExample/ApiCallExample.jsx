import React from 'react';
import axios from 'axios';

const ApiCallExample = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/example');
                const result = response.data;
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>API Call Example</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
    );
}

export default ApiCallExample;
