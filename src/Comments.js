import React from 'react';
import Faker from 'faker';

const Comment = (props)=>{
 return (<div className="comment">
 <a href="/" className="avatar">
   <img alt="avatar" src={Faker.image.image()} />
 </a>
 <div className="content">
   <a href="/" className="author">{props.name}</a>
   <div className="text">{props.comment}</div>
 </div>
</div>);
}



export default Comment;