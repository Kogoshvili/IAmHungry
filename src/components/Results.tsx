import { Recipe } from '../modules/edamam/models';
import RecipeCard from './RecipeCard';
import { Col, Row } from 'antd';

interface ResultsProps {
    recipes: Recipe[]
}

function Results({ recipes }: ResultsProps) {
    return (
        <div>
            <Row gutter={[20, 20]}>
                {
                    recipes.map((recipe) => (
                        <Col span={12} key={recipe.uri}>
                            <RecipeCard recipe={recipe} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default Results
