import { footerData } from "../data";
import Socials from "./Socials";

const Contact = () => {
  const { contact, hours, social } = footerData;
  return (
    <footer className="bg-footer  bg-no-repeat bg-cover bg-left-top -mt-3 pt-40 pb-10 ">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <div className="flex flex-col items-center text-grey text-center gap-10">
            <div>
              <h5 className="h5 not-italic capitalize mb-5">{contact.title}</h5>
              <p className="capitalize">{contact.address}</p>
              <p>{contact.phone}</p>
            </div>
            <div>
              <h5 className="h5 not-italic capitalize mb-5">{hours.title}</h5>
              <div className="flex gap-10">
                {hours.program.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <p className="mb-3 capitalize">{item.days}</p>
                      <h4 className="pretitle">{item.hours}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h5 className="h5 not-italic capitalize mb-5">{social.title}</h5>
              <Socials />
            </div>
          </div>
          <div className="flex justify-center items-center py-5 mt-20 border-t border-grey">
            Copyright &copy; 2024 Bistro Cafe. All rights reserved.{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
