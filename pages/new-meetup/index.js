//domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from 'next/router';
import { Fragment } from "react";
import Head from 'next/head';

function NewMeetUpPage(){

    const router = new useRouter();

  async function onAddMeetup(inputData){
    console.log("onAddMeetup", inputData);
    const response = await fetch('http://localhost:3000/api/new-meetup',{
       method: 'POST',
       body: JSON.stringify(inputData),
       headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    
    const data = await response.json();

    console.log("onAddMeetup", data);
    router.push('/');
  }


  return (
  <Fragment>
    <Head>
      <title>Add Meetup</title>
      <meta name="description" content="Add your new meetups and create amazing network opportunities." />
    </Head>
    <NewMeetupForm onAddMeetup={onAddMeetup}/>
  </Fragment>)
};

export default NewMeetUpPage;