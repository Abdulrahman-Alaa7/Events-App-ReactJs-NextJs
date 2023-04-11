import Image from "next/image";
import Link from "next/link";
import HeadTitle from "../header/HeadTitle";

const CatEvents = ({ data, pageName }) => {
  return (
    <>
      <HeadTitle title={`Events in ${pageName}`} />
      <div className="cat_events">
        <h1>Events in {pageName}</h1>
        <div className="content">
          {data.map((ev) => (
            <Link
              href={`/events/${ev.city}/${ev.id}`}
              key={ev.id}
              className="card"
            >
              <Image src={ev.image} alt={ev.id} width={300} height={300} />
              <h2>{ev.title} </h2>
              <p>{ev.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CatEvents;
