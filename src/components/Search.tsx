import { Input } from 'antd'
import { getRecipes } from '../modules/edamam'
import { useState } from 'react'
import { toast } from 'react-toastify';

const { Search: AntSearch } = Input

interface SearchProps {
    onSearchResult: (result: any) => void
}

function Search({ onSearchResult }: SearchProps) {
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = async () => {
        if (search === '') return
        setIsLoading(true)
        try {
            const result = await getRecipes(search)
            onSearchResult(result)
        } catch (error) {
            console.error(error)
            toast.error('Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <AntSearch
                size="large"
                placeholder="List ingredients you have, e.g. chicken, rice, soy sauce"
                loading={isLoading}
                enterButton
                onChange={(v) => setSearch(v.target.value)}
                onSearch={handleSearch}
            />
        </div>
    )
}

export default Search
