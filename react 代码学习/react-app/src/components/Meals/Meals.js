import React from 'react';
import classes from "./Meals.module.css";
import Meal from "./Meal/Meal";

const Meals = (props) => {
    return (
        <div className={classes.Meals}>
            {props.mealsData.map(item =>
                <Meal key={item.id} meal={item} onAdd={props.onAdd} onSub={props.onSub}/>
            )}
        </div>
    );
};

export default Meals;