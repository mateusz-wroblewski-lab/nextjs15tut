import React from "react";

const EventCard = ({
  id,
  date,
  title,
  subtitle,
  location,
  imagebg,
}: Events) => (
  <section
    className="bg-cover bg-center rounded-xl mt-4"
    style={{ backgroundImage: `url(${imagebg})` }}
  >
    <div className="event-gradient rounded-xl">
      <div className="flex flex-col gap-5 px-8 py-3 text-white">
        <h1 className="h1-bold !text-[30px]">{date}</h1>
        <h2 className="h2-bold !text-[40px] !leading-[40px]">{title}</h2>
        <h3 className="h3-semibold">{subtitle}</h3>
        <p className="paragraph-regular !text-[14px]">
          {location}
          <span className="rounded-full w-10 h-10 flex justify-center items-center bg-slate-600 p-1 ml-3">
            {id}
          </span>
        </p>
      </div>
    </div>
  </section>
);

export default EventCard;
