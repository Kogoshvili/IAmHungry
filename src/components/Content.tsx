import { Layout, Typography } from 'antd'
import Search from './Search'
import { useState } from 'react'
import { Recipe, RecipeSearchResponse } from '../modules/edamam/models'
import Results from './Results'

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

    const onSearchResult = (result: RecipeSearchResponse) => {
        setRecipes(result.recipes)
    }

    return (
        <AntContent style={contentStyle}>
            <Title level={2}>I Have</Title>
            <Search onSearchResult={onSearchResult} />
            <Results recipes={recipes} />
        </AntContent>
    )
}

export default Content
