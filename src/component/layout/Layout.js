import classes from "./layout.module.css";
const Layout = (props) => {
   return <div className={classes.wrapper}>{props.children}</div>;
};

export default Layout;
