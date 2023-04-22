import logo from "../../images/backroads-logo.svg";

const links = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Tours", link: "#tours" },
];
const socials = [
  { name: "facebook", link: "https://facebook.com", icon: "fab fa-facebook" },
  { name: "twitter", link: "https://twitter.com", icon: "fab fa-twitter" },
  { name: "sqaure", link: "https://squarespace", icon: "fab fa-squarespace" },
];

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* LOGO */}
      <img src={logo} />

      {/* LINKS */}
      <ul className='links'>
        {links.map((link) => {
          return (
            <li>
              <a href={link.link}>{link.name}</a>
            </li>
          );
        })}
      </ul>

      {/* Socials */}
      <ul className='socials'>
        {socials.map((social) => {
          return (
            <li>
              <a href={social.link}>
                {/* <img src={logo} /> */}
                {<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>}
                <i className={social.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
