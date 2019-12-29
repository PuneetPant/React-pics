import React from 'react';
import './ImageList.css';

const ImageList = (props) =>{
    const images = props.images.map((image)=>{
        return <img key={image.id} alt={image.description} style={{maxWidth:'500px' , maxHeight:'500px' , display:'inline-block',width:'50%'} } src={image.urls.regular} />
    })
    return(
        <div className="image-list">{images}</div>
    )
}
export default ImageList;