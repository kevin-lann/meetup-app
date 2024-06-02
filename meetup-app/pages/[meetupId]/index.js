import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = () => {
  return <>
    <MeetupDetail 
      image="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Join for free robux"
      address="202 Joel st, Africa"
      description="We are offering free giveaways!"
    />
  </>
}

export async function getStaticProps(context) {
  // fetch data
  // PROBLEM: cant get meetupId bc useRouter cannot be used outside the component
  // SOL: use context
  const meetupId = context.params.meetupId

  return {
    props: {
      meetupData: {
          image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Join for free robux",
          address: "202 Joel st, Africa",
          description: "We are offering free giveaways!",
          id: meetupId
      }
    }
  }
}

// if we are using getStaticProps on a dynamic page, we need getStaticPaths
// Next needs to know the dynamic page params for pre-generating the page in getStaticProps
// Otherwise would 404.
// We return back all the dynamic values that is needed for pregeneration.
export async function getStaticPaths() {
  // fetch all Ids from database/API
  return {
      fallback: false, // if false, we are limiting pages to those specified in paths. If true, we generate dynamically.
      paths: [
          {params: {
              meetupId: 'm1'
          }},
          {params: {
              meetupId: 'm2'
          }},
      ]
  }
}

export default MeetupDetails