import { Input } from 'antd'
import { useState } from 'react'

const { Search: AntSearch } = Input

interface SearchProps {
    onSearch: (search: any) => void
    isLoading: boolean
}

function Search({ onSearch, isLoading }: SearchProps) {
    const [search, setSearch] = useState('')

    return (
        <div>
            <AntSearch
                size="large"
                placeholder="List ingredients you have, e.g. chicken, rice, soy sauce"
                loading={isLoading}
                enterButton
                onChange={(v) => setSearch(v.target.value)}
                onSearch={() => onSearch(search)}
            />
        </div>
    )
}

export default Search
