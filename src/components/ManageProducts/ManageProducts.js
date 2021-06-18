import React, { useEffect, useState } from 'react';
import ManageDetail from '../ManageDetail/ManageDetail'

const ManageProducts = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://quiet-escarpment-26801.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Main Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map(event => <ManageDetail event={event}></ManageDetail>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;