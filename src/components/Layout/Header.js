import { Fragment } from "react";
import mealsImage from '../../assests/meals.jpeg'
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div>
        <img src={mealsImage} alt="A table full of delicious food" style={{width:1500}}></img>
      </div>
    </Fragment>
  );
};

export default Header;
