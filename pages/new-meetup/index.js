//domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from 'next/router';
import { Fragment } from "react";
import Head from 'next/head';

function NewMeetUpPage(){

    const router = new useRouter();
    let response;
  async function onAddMeetup(inputData){
    try {
       response = await fetch('/api/new-meetup',{
        method: 'POST',
        body: JSON.stringify(inputData),
        headers:{
         'Content-Type': 'application/json',
         'Accept': 'application/json'
        }
     });  
    } catch (error) {
      
    }
    console.log("onAddMeetup", inputData);
    
    
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