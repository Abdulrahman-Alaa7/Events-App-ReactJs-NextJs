import Link from "next/link";
import Image from "next/image";
import HeadTitle from "../header/HeadTitle";

const EventsPage = ({ data }) => {
  return (
    <>
      <HeadTitle title="Events" />
      <div className="events_page">
        {data.map((even) => (
          <Link href={`/events/${even.id}`} key={even.id} className="card">
            <Image src={even.image} alt={even.title} width={300} height={300} />
            <h2> {even.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default EventsPage;
