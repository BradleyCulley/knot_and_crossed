import classes from './Style.module.css'
// click event needs to be added to this


const Cell = props => {
    return (
        <div className={classes.cell}>{props.children}</div>
    )
}

export default Cell;