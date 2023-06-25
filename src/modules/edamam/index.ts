import axios from 'axios'
import { RecipeResponse, RecipeSearchResponse } from './models'

const edamam = axios.create({
    baseURL: 'https://api.edamam.com/api/recipes/v2',
    params: {
        app_key: import.meta.env.VITE_EDAMAM_APP_KEY,
        app_id: import.meta.env.VITE_EDAMAM_APP_ID,
        type: 'public'
    }
})

export async function getRecipes(query: string): Promise<RecipeSearchResponse> {
    const response = await edamam.get<RecipeResponse>('', {
        params: {
            q: query
        }
    })

    return {
        count: response.data.count,
        from: response.data.from,
        to: response.data.to,
        recipes: response.data.hits.map(hit => hit.recipe),
        nextPage: response.data._links.next.href
    }
}
