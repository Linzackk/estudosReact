type SearchInputType = {
    searchValue: string;
    setSearch: (value: string) =>  void;
}

export function SearchInput({searchValue, setSearch}: SearchInputType) {
    return (
        <input 
            type="text"
            placeholder="Buscar por nome..."
            value={searchValue}
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}