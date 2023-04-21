import logo from "../../images/backroads-logo.svg";
const links = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Tours", link: "#tours" },
];
const socials = [
  { name: "facebook", link: "https://facebook.com", icon: "" },
  { name: "twitter", link: "https://twitter.com", icon: "" },
  { name: "sqaure", link: "https://squarespace", icon: "" },
];

const Navbar = () => {
  return (
    <>
      <h1>Navbar</h1>
      {/* LOGO */}
      <img src={logo} />

      {/* LINKS */}
      <ul>
        {links.map((link) => {
          return (
            <li>
              <a href={link.link}>{link.name}</a>
            </li>
          );
        })}
      </ul>

      {/* Socials */}
      <ul>
        {socials.map((social) => {
          return (
            <li>
              <a href={social.link}>
                <img src={logo} />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
