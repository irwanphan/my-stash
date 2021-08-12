import classes from "./FAB.module.sass"

function FAB(props) {
    return <div className={classes.fab}>
        {props.children}
    </div>
}

export default FAB;