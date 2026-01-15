import React from "react";
import { useParams } from "react-router-dom";

const UserDetail: React.FC = () => {
    const { id } = useParams<{id: string}>();

    return <h1>Detalhes do Usuário: {id}</h1>
}

export default UserDetail