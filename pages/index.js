import {MongoClient} from 'mongodb';
import MeetupList from "../components/meetups/MeetupList";
import Head from 'next/head';
import { Fragment } from 'react';

const DUMMY_LIST = [{
   id:'m1',
   title:'Hello',
   image:'https://picsum.photos/seed/picsum/200/300',
   address:'Demo Address',
}] 

//Next js always take the first render cycle doesnt wait for the next render cycle
//built in pre render cycle good for search engine optimization but may be show some blank pages beaciuse takes time for render on browser
//two forms of pre render cycle static generation and server side rendering
//Metadata for deployment description meta tags for show up in google search and page title show in search and tab in which opened
function HomePage(props){
  return(
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <metadata name='description' content='Browse a huge list of highly active React Meetups'/>
      </Head>
      <MeetupList meetups={props.meetups}/>
    </Fragment>
  );
}

// export async function ServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return {
//      props:{
//        meetups:DUMMY_LIST
//      }
//     };

// }

//called before first render cycle starts
//execcutes during build process
//never execute on their machine
//revalidate will generate after every 10 secs on server side
export async function getStaticProps(){
  let result;
  try {
    const client = await MongoClient.connect('mongodb+srv://hrusikesh:89MZ5N3uL4YZJiGg@cluster0.x0hfv.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupcollections  = db.collection('meetups');
    result =  await meetupcollections.find().toArray();
    client.close();
  } catch (error) {
    
  }
   
    return{
        props:{
            meetups:result.map((meetup)=>({
                title:meetup.title,
                image:meetup.image,
                address:meetup.address,
                id:meetup._id.toString(),
            }))
        },
        revalidate:1
    }
}

export default HomePage;