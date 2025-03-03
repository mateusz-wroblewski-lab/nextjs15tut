import React from "react";

import EventList from "@/components/events/EventList";
import EventMain from "@/components/events/EventMain";
import { EventInfo, EventMainInfo } from "@/constants";

const Home = async () => {
  return (
    <>
      <EventMain {...EventMainInfo[0]} />

      <EventList
        title="Poprzednie edycje"
        events={EventInfo}
        containerClassName="mt-10"
      />
    </>
  );
};

export default Home;
