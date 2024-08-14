import "../styling/footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contactDetails">
        <a href="">
          <img
            src="../public/assets/instagram.png"
            alt="Instagram link"
            className="contactLogo"
          />
        </a>

        <a href="/contact">
          <p className="contactLink">Contact Harriet</p>
        </a>
        <a href="">
          <img
            src="../public/assets/soundcloud.png"
            alt="Soundcloud link"
            className="contactLogo"
          />
        </a>
      </div>
      <div className="copyright">
        © 2024 website by <a href="https://developer-jack.com">Jack Symonds</a>.
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
