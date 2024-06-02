import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient } from 'mongodb'
import { ObjectId } from 'mongodb'
import {useRouter} from 'next/router'
import Head from 'next/head'

const MeetupDetails = (props) => {

  const router = useRouter()
  const meetupId = router.query.meetupId

  return <>
    <Head>
      <title>{props.meetupData.title}</title>
    </Head>
    <MeetupDetail 
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
      id={meetupId}
    />
  </>
}

export async function getStaticProps(context) {
  // fetch data
  // PROBLEM: cant get meetupId bc useRouter cannot be used outside the component
  // SOL: use context
  const meetupId = context.params.meetupId

  // fetch all Ids from database/API
  const client = await MongoClient.connect(process.env.DATABASE_URI)
  const db = client.db()
 
  const meetupsCollection = db.collection('meetups')
  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId.createFromHexString(meetupId)})

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    }
  }
}

// if we are using getStaticProps on a dynamic page, we need getStaticPaths
// Next needs to know the dynamic page params for pre-generating the page in getStaticProps
// Otherwise would 404.
// We return back all the dynamic values that is needed for pregeneration.
export async function getStaticPaths() {
  // fetch all Ids from database/API
  const client = await MongoClient.connect(process.env.DATABASE_URI)
  const db = client.db()

  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray() // only get _ids

  client.close()

  return {
      fallback: 'blocking', // if false, we are limiting pages to those specified in paths. If true, we generate dynamically.
      paths: meetups.map((meetup) => ({params: { meetupId: meetup._id.toString()}})),
  }
}

export default MeetupDetails