import { React, Fragment } from "react";
import classes from "../../components/meetups/MeetupDetail.module.css";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function meetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupDetails.title}</title>
        <meta name="description" content={props.meetupDetails.description}/>
      </Head>
      <section className={classes.detail}>
        <img src={props.meetupDetails.image} alt={props.meetupDetails.title} />
        <h1>{props.meetupDetails.title}</h1>
        <address>{props.meetupDetails.address}</address>
        <p>{props.meetupDetails.title}</p>
      </section>
    </Fragment>
  );
}

//fallback false - paths contain all supported values like if enter m2 get 404 and pregenerate pages like which are vsisted nore frequently

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://hrusikesh:89MZ5N3uL4YZJiGg@cluster0.x0hfv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupcollections = db.collection("meetups");
  const result = await meetupcollections.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: result.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://hrusikesh:89MZ5N3uL4YZJiGg@cluster0.x0hfv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupcollections = db.collection("meetups");
  const selectedMeetup = await meetupcollections.findOne({
    _id: ObjectId(meetId),
  });
  return {
    props: {
      meetupDetails: {
        image: selectedMeetup.image,
        id: selectedMeetup._id.toString(),
        address: selectedMeetup.address,
        title: selectedMeetup.title,
      },
    },
  };
}

export default meetupDetails;
