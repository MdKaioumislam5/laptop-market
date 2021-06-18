import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://quiet-escarpment-26801.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <div className="row">
            {
                events.map(product => <Event product={product}></Event>)
            }
        </div>
    );
};

export default Home;
