import { footerData } from "../data";
import Socials from "./Socials";

const Footer = () => {
  const { contact, hours, social } = footerData;
  return (
    <footer className="bg-footer  bg-no-repeat bg-cover bg-left-top -mt-3 py-40 ">
      <div className="container mx-auto">
        <div>
          <div className="flex flex-col items-center text-white text-center gap-10">
            <div>
              <h5 className="h5 not-italic capitalize mb-5">{contact.title}</h5>
              <p className="capitalize">{contact.address}</p>
              <p >{contact.phone}</p>
            </div>
            <div>
              <h5 className="h5 not-italic capitalize mb-5">{hours.title}</h5>
              <div className="flex gap-10">
                {hours.program.map((item, idx) => {
                  return <div key={idx}>
                    <p className="mb-3 capitalize">{item.days}</p>
                    <h4 className="pretitle">{item.hours}</h4>
                  </div>;
                })}
              </div>
            </div>
            <div>
              <h5 className="h5 not-italic capitalize mb-5">{social.title}</h5>
              <Socials/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
