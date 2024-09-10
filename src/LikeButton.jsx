import { useState } from 'react';

export default function LikeButton(){

    let [ isLiked, setLiked ] = useState(false);

    let toggleLike = ()=> {
        setLiked(!isLiked);
    }

    let likeStyle = { color: 'purple'};
    
    return(
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked ? (
                        <i className="fa-solid fa-heart" style={likeStyle}></i>
                    ) : (
                        <i className="fa-regular fa-heart"></i>
                    )
                }
            </p>
        </div>
    );
}