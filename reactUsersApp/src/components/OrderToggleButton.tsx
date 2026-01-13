type OrderToggleButtonType = {
    order: "asc" | "desc";
    toggleOrder: () => void;
}

export function OrderToggleButton({order, toggleOrder}: OrderToggleButtonType) {
    return (
        <button onClick={toggleOrder}>
            Ordenar: {order === "asc" ? "A - Z": "Z - A"}
        </button>
    )
}