import React from "react";

interface ButtonFavoriteProp {
    onFavorite: () => void;
}

const ButtonFavorite: React.FC<ButtonFavoriteProp> = ({ onFavorite}) => {
    return <button onClick={onFavorite}>Favorite </button>   
}

export default React.memo(ButtonFavorite)