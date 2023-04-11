import CatEvents from "@/src/components/events/CatEvents";

const Cate = ({ data, pageName }) => {
  return <CatEvents data={data} pageName={pageName} />;
};

export default Cate;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const paths = events_categories.map((event) => ({
    params: {
      cat: event.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: { data, pageName: id },
  };
}
