import MealItem from './MealItem';
import AVAILABLE_MEALS from '../assets/available_meals';
export default function Meals() {
    return (
        <div>
            <ul id="meals">
                {
                    AVAILABLE_MEALS.map((meals) => {
                        return (
                            <MealItem key={meals.id} meals={meals} />
                        );

                    })
                }

            </ul>
        </div>
    )
}
