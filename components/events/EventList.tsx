import React from "react";
import EventCard from "./EventCard";

interface Props {
  title: string;
  events: Events[];
  containerClassName?: string;
}

const EventList = ({ title, events, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h1>{title}</h1>
      <ul className="flex gap-2">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </ul>
    </section>
  );
};

export default EventList;
