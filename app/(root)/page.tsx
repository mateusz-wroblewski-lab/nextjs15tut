import React from "react";

import EventList from "@/components/events/EventList";
import EventMain from "@/components/events/EventMain";
import { EventInfo, EventMainInfo } from "@/constants";
import { db } from "@/database/drizzle";
import { usersTable } from "@/database/schema/users";

const Home = async () => {
  const result = await db.select().from(usersTable);
  console.log(JSON.stringify(result, null, 2));

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
