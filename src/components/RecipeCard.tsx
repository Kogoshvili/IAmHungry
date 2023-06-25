import { Card, Row, Col, Typography } from 'antd';
import { Recipe } from '../modules/edamam/models';
import { getNutrients } from '../modules/edamam/helpers';

const { Title } = Typography;

interface RecipeCardProps {
    recipe: Recipe
}

function RecipeCard({ recipe }: RecipeCardProps) {
    const ingredients = recipe.ingredients.map((ingredient) => ingredient.food).join(", ");
    const dietLabels = [...recipe.dietLabels, ...recipe.healthLabels].join(", ");
    const nutrients = getNutrients(recipe);

    return (
        <Card style={{ height: '100%' }}>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <img alt={recipe.label} src={recipe.image} style={{ width: "100%" }} />
                </Col>
                <Col span={12}>
                    <Title level={5} style={{ margin: 0 }}>{recipe.label}</Title>
                    <p style={{ textAlign: 'start' }}><b>Ingredients</b>: {ingredients}</p>
                    <p style={{ textAlign: 'start' }}><b>Diet Labels</b>: {dietLabels}</p>
                    <div style={{ textAlign: 'start' }}>
                        Calories: {nutrients.calories.total} kcal<br />
                        Proteins: {nutrients.proteins.total} g<br />
                        Fats: {nutrients.fats.total} g<br />
                        Carbs: {nutrients.carbs.total} g<br />
                    </div>
                </Col>
            </Row>
        </Card>
    );
}

export default RecipeCard
