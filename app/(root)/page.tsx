import React from "react";
import { auth } from "@/auth";
import EventMain from "@/components/events/EventMain";
import EventList from "@/components/events/EventList";
import { EventInfo } from "@/constants";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <EventMain {...EventInfo[0]}/>

      <EventList 
        title="Poprzednie edycje"
        events={EvetInfo}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
