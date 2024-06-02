import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation className="navbar"/>
      <br/>
      <br/>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
