import NewMeetupForm from '../../components/meetups/NewMeetupForm'


const NewMeetupPage = () => {

  const addMeetupHandler = (data) => {
    console.log(data)
  }

  return <>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </>
}

export default NewMeetupPage