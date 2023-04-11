import Image from "next/image";
import Link from "next/link";

const HomePage = ({ data }) => {
  return (
    <>
      <div className="home_body">
        {data?.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} className="card">
            <div className="image">
              <Image
                width={400}
                height={400}
                alt={ev.title}
                src={ev.image}
                priority
              />
            </div>
            <div className="content">
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
