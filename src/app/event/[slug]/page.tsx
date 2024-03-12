type EventPageProps = {
  params: {
    slug: string;
  };
};

import Image from "next/image";
import H1 from "@/components/H1";
import { ReactNode } from "react";
import { Metadata } from "next";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="mb-12">{children}</section>;
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl mb-8">{children}</h2>;
};

let generateMetadata = async ({
  params,
}: EventPageProps): Promise<Metadata> => {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await response.json();

  return {
    title: `Event: ${event.name}`,
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await response.json();

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover z-0 blur-3xl"
          src={event.imageUrl}
          alt="background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button
              className="bg-white/20 text-lg capitalize 
            bg-blur  mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10  border-2 
            sm:w-full py-2 state-effects"
            >
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
            {event.description}
          </p>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
            {event.location}
          </p>
        </Section>
      </div>
    </main>
  );
}

export { generateMetadata };
