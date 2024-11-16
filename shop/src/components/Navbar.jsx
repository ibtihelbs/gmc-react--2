import { Link } from "react-router-dom";
const Navbar = () => {
  const Links = [
    { title: "home", link: "/" },
    { title: "Products", link: "/Products" },
    { title: "Form", link: "/Form" },
  ];
  return (
    <div>
      <ul>
        {Links.map((v, i) => (
          <li key={i}>
            <Link to={v.link}> {v.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
