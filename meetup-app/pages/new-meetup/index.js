import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
import Head from 'next/head'


const NewMeetupPage = () => {

  const router = useRouter()

  const addMeetupHandler = async (data) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const resData = await response.json()

    console.log(resData)

    router.push('/')
  }

  return <>
    <Head>
      <title>New meetup</title>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </>
}

export default NewMeetupPage