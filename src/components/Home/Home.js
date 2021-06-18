import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

// const events = [
//     {
//         id: '1',
//         name: 'Acer Aspire',
//         pic: 'https://i.ibb.co/1GY6kgC/Acer-Aspire.jpg'
//     },
//     {
//         id: '2',
//         name: 'Hero Book',
//         pic: 'https://i.ibb.co/jVsNPwV/Herobook-Pro.jpg'
//     },
//     {
//         id: '3',
//         name: 'HP-15s',
//         pic: 'https://i.ibb.co/qB6QDPg/HP-15s.jpg'
//     },
//     {
//         id: '4',
//         name: 'Dell Latitude',
//         pic: 'https://i.ibb.co/CnPNQNc/Dell-Latitude.jpg'
//     },
//     {
//         id: '5',
//         name: 'Dell Inspiron',
//         pic: 'https://i.ibb.co/xHTCGy6/Dell-Inspiron.jpg'
//     },
//     {
//         id: '6',
//         name: 'Avita-Pura',
//         pic: 'https://i.ibb.co/3s6G17Z/Avita-Pura.jpg'
//     },
//     {
//         id: '7',
//         name: 'Dell-Vostro',
//         pic: 'https://i.ibb.co/ZLHQCdF/Dell-Vostro.jpg'
//     },
//     {
//         id: '8',
//         name: 'Vivo-Book',
//         pic: 'https://i.ibb.co/MCcfFsn/Asus-Vivo-Book.jpg'
//     },
//     {
//         id: '9',
//         name: 'ASUS-Expert-Book',
//         pic: 'https://i.ibb.co/WBdhZGk/ASUS-Expert-Book.jpg'
//     },
//     {
//         id: '10',
//         name: 'Vivobook',
//         pic: 'https://i.ibb.co/xfJGfYM/Vivobook.jpg'
//     },
//     {
//         id: '11',
//         name: 'Microsoft-Surface',
//         pic: 'https://i.ibb.co/GVjbc4n/Microsoft-Surface-Go.jpg'
//     },
//     {
//         id: '12',
//         name: 'Magus-Laptop',
//         pic: 'https://i.ibb.co/YcMjgcy/Magus-Laptop-Pastel-Violet.jpg'
//     },
//     {
//         id: '13',
//         name: 'Macbook-Myy92',
//         pic: 'https://i.ibb.co/fktqfsZ/Macbook-Myd92.jpg'
//     },
//     {
//         id: '14',
//         name: 'Macbook Air',
//         pic: 'https://i.ibb.co/G3sQg9X/Macbook-Air.jpg'
//     },
//     {
//         id: '15',
//         name: 'HP-Pro-Book',
//         pic: 'https://i.ibb.co/QDXY2s5/HP-Pro-Book.jpg'
//     },
//     {
//         id: '16',
//         name: 'Macbook Air',
//         pic: 'https://i.ibb.co/G3sQg9X/Macbook-Air.jpg'
//     },

// ];

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
