import { Recipe } from '../modules/edamam/models'
import RecipeCard from './RecipeCard'
import { Col, Row } from 'antd'
import { useEffect, useRef } from 'react'

interface ResultsProps {
    recipes: Recipe[],
    onNextPage: () => void
}

function Results({ recipes, onNextPage }: ResultsProps) {
    const observer = useRef<IntersectionObserver | null>(null)
    const sentinel = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                onNextPage()
            }
        })

        if (sentinel.current) {
            observer.current.observe(sentinel.current)
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect()
            }
        }
    }, [onNextPage])

    return (
        <div>
            <Row gutter={[20, 20]}>
                {recipes.map((recipe) => (
                    <Col span={12} key={recipe.uri}>
                        <RecipeCard recipe={recipe} />
                    </Col>
                ))}
            </Row>
            <div ref={sentinel} />
        </div>
    )
}

export default Results
