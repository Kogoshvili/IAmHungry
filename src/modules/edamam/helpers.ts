import { Nutrients, Recipe } from "./models"

export function getNutrients(recipe: Recipe): Nutrients {
    const servings = recipe.yield

    const totalCalories = recipe.calories
    const calories = totalCalories / servings

    const totalProteins = recipe.totalNutrients.PROCNT.quantity
    const totalFats = recipe.totalNutrients.FAT.quantity
    const totalCarbs = recipe.totalNutrients.CHOCDF.quantity

    const proteinsDaily = recipe.totalDaily.PROCNT.quantity
    const fatsDaily = recipe.totalDaily.FAT.quantity
    const carbsDaily = recipe.totalDaily.CHOCDF.quantity

    return {
        calories: {
            total: Math.round(totalCalories),
            daily: Math.round(totalCalories / 200),
            perServing: Math.round(calories)
        },
        proteins: {
            total: Math.round(totalProteins),
            daily: Math.round(proteinsDaily),
            perServing: Math.round(totalProteins / servings)
        },
        fats: {
            total: Math.round(totalFats),
            daily: Math.round(fatsDaily),
            perServing: Math.round(totalFats / servings)
        },
        carbs: {
            total: Math.round(totalCarbs),
            daily: Math.round(carbsDaily),
            perServing: Math.round(totalCarbs / servings)
        }
    }
}
