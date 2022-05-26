import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        id="sticky-footer"
        className="flex-shrink-0 py-4 bg-primary text-white"
      >
        <div className="m-2">
          <a className="text-white m-2" href="https://assignment-10-shohidmax.web.app/home"><i className="fab fa-google"></i></a>
          <a className="text-warning m-2" href="https://assignment-10-shohidmax.web.app/home"><i className="fab fa-instagram"></i></a>
          <a className="text-white m-2" href="https://assignment-10-shohidmax.web.app/home"><i className="fab fa-facebook"></i></a>
          <a className="text-dark m-2" href="https://assignment-10-shohidmax.web.app/home"><i className="fab fa-github"></i></a>
          <a className="text-dark m-2" href="https://assignment-10-shohidmax.web.app/home"><i className="fab fa-flag"></i></a>
          
        </div>
        <div className="container text-center">
          <small>Copyright &copy; Troyal Electro</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
{/* <i className="fa-brands fa-facebook"></i>
<i className="fa-brands fa-instagram"></i>
<i className="fa-brands fa-github"></i> */}