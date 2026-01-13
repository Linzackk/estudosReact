import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export function ReloadUsersButton() {
    const {loading, reloadUsers} = useContext(UserContext)
    return (
        <>
            <button onClick={reloadUsers} disabled={loading}>
                {loading ? "Recarregando..." : "Recarregar Usuários"}
            </button>
        </>
    )
}