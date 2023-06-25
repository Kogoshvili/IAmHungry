import { Layout, Typography } from 'antd'
import Search from './Search'
import { useState } from 'react'
import { Recipe, RecipeSearchResponse } from '../modules/edamam/models'
import Results from './Results'
import { getMoreRecipes, getRecipes } from '../modules/edamam'
import { toast } from 'react-toastify'

const { Content: AntContent } = Layout
const { Title } = Typography

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#fff',
    padding: '50px 100px 0 100px',
}

function Content() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [nextPageUrl, setNextPageUrl] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const onSearchResult = (result: RecipeSearchResponse) => {
        setRecipes(result.recipes)
        setNextPageUrl(result.nextPage)
    }

    const onNextPage = async () => {
        if (nextPageUrl === null) return
        setIsLoading(true)
        try {
            const result = await getMoreRecipes(nextPageUrl);
            setRecipes([...recipes, ...result.recipes])
            setNextPageUrl(result.nextPage)
        } catch (error) {
            console.error(error)
            toast.error('Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    const handleSearch = async (search: string) => {
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
        <AntContent style={contentStyle}>
            <Title level={2}>I Have</Title>
            <Search onSearch={handleSearch} isLoading={isLoading} />
            <Results recipes={recipes} onNextPage={onNextPage} />
        </AntContent>
    )
}

export default Content
