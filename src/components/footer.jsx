const Footer = (props) => {
  const { footerdb } = props;

  return (
    <div>
      <div className="footer-info container d-flex justify-content-between">
        {footerdb.map((links) => {
          return (
            <div>
              <a>{links.link}</a>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default Footer;
