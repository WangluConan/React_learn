import React from 'react';
import classes from "./Meal.module.css";
import Counter from "../../UI/Counter/Counter";

const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src="/img/meals/1.png"/>
            </div>
            <div>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                <p className={classes.Desc}>{props.meal.desc}</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>{props.meal.price}</span>
                    <Counter amount={props.meal.amount}/>
                </div>
            </div>
        </div>
    );
};

export default Meal;