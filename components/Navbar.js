import Link from "next/link";
import navStyles from "../styles/Nav.module.scss";

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <ul className={navStyles.container}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pictures">Pictures</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
