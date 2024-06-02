
import MeetupList from "../components/meetups/MeetupList"

const HomePage = () => {

  const DUMMY_DATA = [
    {
      id: "m1",
      title: "Meetup title",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      address: "16 Dundas St. W, Toronto, ON",
      description: "Free food friday"
    },
    {
      id: "m2",
      title: "Meetup!!!!",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      address: "16 Dundas St. W, Toronto, ON",
      description: "Taco Tuesday"
    },
  ]
  

  return (
    <MeetupList meetups={DUMMY_DATA}/>
  )
}

export default HomePage