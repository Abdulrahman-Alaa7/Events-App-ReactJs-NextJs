import EventInfo from "@/src/components/events/EventInfo";

const SingleEvent = ({ data }) => {
  return <EventInfo data={data} />;
};

export default SingleEvent;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const paths = allEvents.map((event) => ({
    params: {
      cat: event.city.toString(),
      id: event.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.find((ev) => ev.id === id);

  return {
    props: { data },
  };
}
