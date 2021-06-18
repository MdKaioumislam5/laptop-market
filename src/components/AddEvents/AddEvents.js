import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const AddEvents = (product) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setIMageURL] = useState(null);

  function deleteProduct(id) {
    console.log(id);
    fetch(`/delete/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result =>{
      console.log('delete successfully')
    })
  }
  

  const onSubmit = data => {
    const eventData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL,
    };

    const url = `https://quiet-escarpment-26801.herokuapp.com/addEvent`
    console.log(eventData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response'))
  };



  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'deb628aef4e1e0563ac6fe17fd6ec415');
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <h1>Add your awesome Event here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue="New exciting Event" ref={register} />
        <br />
        <input type="number" name="price" defaultValue="New exciting Event" ref={register} />
        <br />
        <input type="file" onChange={handleImageUpload} />
        <br />
        <input type="submit" />
       

      </form>
      <button onClick= {() => deleteProduct(`${product._id}`)}>Delete</button>
    

    </div>

  );
};

export default AddEvents;