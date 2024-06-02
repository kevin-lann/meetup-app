import classes from './MeetupDetail.module.css'
import MeetupItem from './MeetupItem'

const MeetupDetail = (props) => {
  return <section className={classes.detail}>
    <MeetupItem 
        key={props.id}
        id={props.id}
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
        showButton={false}
    />
  </section>
}





export default MeetupDetail