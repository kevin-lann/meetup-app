import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router'

function MeetupItem(props) {

  // use useRouter to add path links programatically
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/' + props.id)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        {props.showButton ? 
        
        <>
          <div className={classes.actions}>
            <button onClick={showDetailsHandler}>Show Details</button>
          </div>
        </>
        

        : <div className={classes.content}>
            <p>{props.description}</p>
          </div>}
      </Card>
    </li>
  );
}

export default MeetupItem;
