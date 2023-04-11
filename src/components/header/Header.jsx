import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo_black.png";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div className="topNav">
            <Link href="/">
              <Image alt="logo" src={logo} width={50} height={50} />
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href="/" passHref>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/events" passHref>
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" passHref>
                    About us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <p className="title"> Sed ut perspiciatis unde omnis</p>
        </div>
      </header>
    </>
  );
};

export default Header;
