import React from 'react';



const ManageDetail = (props) => {
    const { name, price, _id } = props.event;

    const handleDelete = (id) => {
        fetch(`https://quiet-escarpment-26801.herokuapp.com/deleteProduct/${id}`,{
            method: 'Delete',

        })
        .then(res => res.json())
        .then(data => {
            alert('Deleted')
        })
    
    }
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {price}
            </td>
            <td>
                 <button onClick={() => handleDelete(_id)}>Delete</button>
            </td>

        </tr>
    );
};

export default ManageDetail;