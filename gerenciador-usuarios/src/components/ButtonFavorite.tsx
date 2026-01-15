import React from "react";

interface ButtonFavoriteProp {
    onFavorite: () => void;
    isFavorite: boolean;
}

const ButtonFavorite: React.FC<ButtonFavoriteProp> = ({ onFavorite, isFavorite }) => {
    return <button onClick={onFavorite}>{isFavorite ? "Desfavoritar" : "Favoritar"}</button>   
}

export default React.memo(ButtonFavorite)