import MeetupList from "../components/meetups/MeetupList"

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

const HomePage = (props) => {  
  // ------- OLD METHOD to fetch async data and update page -----------------
  // const [loadedMeetups, setLoadedMeetups] = useState([])
  
  // useEffect( () => {
  //   // some http req to get all meetups
  //   setLoadedMeetups(DUMMY_DATA) // suppose DUMMY_DATA is ihe retrieved req
  // },[])
  // ------------------------------------------------------------------------

  return (
      <MeetupList meetups={props.meetups}/>
  )
}

// getStaticprops ---------------------------------------------------------
// reserved name for nextjs. Will exec this fn during pre-render build process.
// Can be async. So nextJS will wait for data to be fetched so that
// page will render for the first time with the requried adata.
// This code will NEVER be ran on clientside.

// always need to return object
  // props will be same as the component's props
  // revalidate means that next will regenerate page in case data changes
  // -> revalidate: 10 means ten seconds between each regeeration 
  // -> therefore data is never less than 10 s old

export async function getStaticProps() {
  // say we fetch data from an API

  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 10,
  };
} 

// getServerSideProps -------------------------------------------------------
// This code will always run on server. Rerenders page on every request, not every x sec.
// ALternative to getStaticProps

// Should only need to use this instead of getStaticProps only when:
// -> need access to req, res i.e. for auth
// -> have data that changes MULTIPLE times per sec

// In our app, --> we dont need.

/*
export async function getServerSideProps(context) {
  const req = context.req // have access to req header and body
  const res = context.res
  
  // fetch data from an API
  
  return {
    props: {
      meetups: DUMMY_DATA,
    },
  }
}
*/

export default HomePage