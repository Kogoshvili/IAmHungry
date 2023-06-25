export interface Recipe {
    uri: string;
    label: string;
    image: string;
    images: {
        THUMBNAIL: {
            url: string;
            width: number;
            height: number;
        };
        SMALL: {
            url: string;
            width: number;
            height: number;
        };
        REGULAR: {
            url: string;
            width: number;
            height: number;
        };
        LARGE: {
            url: string;
            width: number;
            height: number;
        };
    };
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: {
        text: string;
        quantity: number;
        measure: string;
        food: string;
        weight: number;
        foodId: string;
    }[];
    calories: number;
    glycemicIndex: number;
    totalCO2Emissions: number;
    co2EmissionsClass: string;
    totalWeight: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    instructions: string[];
    tags: string[];
    externalId: string;
    totalNutrients: Record<string, any>;
    totalDaily: Record<string, any>;
    digest: {
        label: string;
        tag: string;
        schemaOrgTag: string;
        total: number;
        hasRDI: true;
        daily: number;
        unit: string;
        sub: Record<string, any>;
    }[];
}

export interface RecipeResponse {
    from: number;
    to: number;
    count: number;
    _links: {
        self: {
            href: string;
            title: string;
        };
        next: {
            href: string;
            title: string;
        };
    };
    hits: {
        recipe: Recipe;
        _links: {
            self: {
                href: string;
                title: string;
            };
            next: {
                href: string;
                title: string;
            };
        };
    }[];
}

export interface RecipeSearchResponse {
    count: number;
    from: number;
    to: number;
    recipes: Recipe[];
    nextPage: string;
}

export interface Nutrients {
    calories: {
        total: number;
        daily: number;
        perServing: number;
    };
    proteins: {
        total: number;
        daily: number;
        perServing: number;
    };
    fats: {
        total: number;
        daily: number;
        perServing: number;
    };
    carbs: {
        total: number;
        daily: number;
        perServing: number;
    };
}
