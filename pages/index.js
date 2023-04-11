import HeadTitle from "@/src/components/header/HeadTitle";
import HomePage from "@/src/components/home/HomePage";

export default function Home({ data }) {
  return (
    <>
      <HeadTitle title="Events Home" />
      <div className="container">
        <HomePage data={data} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
