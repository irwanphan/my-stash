import classes from "./Card.module.sass"

function Card(props) {
    return <article className={classes.card}>
        {props.children}
    </article>
}

export default Card