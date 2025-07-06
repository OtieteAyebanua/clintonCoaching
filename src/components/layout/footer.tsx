import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const footerNavLinks = [
  {
    name: "About Us",
    link: "",
  },
  {
    name: "Terms & Conditions",
    link: "",
  },
  {
    name: "Privacy Policy",
    link: "",
  },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footNav">
        {footerNavLinks.map((item) => (
          <a href="#" className="footNavLinks">{item.name} | </a>
        ))}
      </div>
       <div className="social-icons">
      <FaFacebookF />
      <FaInstagram />
      <FaLinkedinIn />
      <FaYoutube />
    </div>
      <p className="footer-text">
        © 2025 <strong>Superprof</strong>, learn from the best!
      </p>
    </div>
  );
};

export default Footer;
