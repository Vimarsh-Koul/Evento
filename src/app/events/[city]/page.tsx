// git config check

import Loading from "@/app/events/[city]/loading";
import EventList from "@/components/EventList";
import H1 from "@/components/H1";
import { Suspense } from "react";
import { Metadata } from "next";

let generateMetadata = ({ params }: { params: { city: string } }): Metadata => {
  const city = params.city;
  return {
    title: `Events in ${city}`,
  };
};

const EventsPage = async ({ params }: { params: { city: string } }) => {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">Events in {params.city}</H1>
      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
      {/* {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))} */}
    </main>
  );
};

export { generateMetadata };
export default EventsPage;
