import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link href={"/"} > home </Link>
      </li>
      <li>
      <Link href={"/shop"} > shop </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar