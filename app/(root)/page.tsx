import React from "react";
import { auth } from "@/auth";
import EventMain from "@/components/events/EventMain";
import EventList from "@/components/events/EventList";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <EventMain />

      <EventList />
    </>
  );
};

export default Home;
