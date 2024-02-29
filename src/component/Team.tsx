import { teamData } from "../data";

const Team = () => {
  const {
    pretitle,
    title,
    sub1,
    sub2,
    name,
    occupation,
    signatureImg,
    chefImg,
  } = teamData;

  return (
    <section className="bg-white pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          <div data-aos="fade-right" className="text-center md:text-left">
            <h3 className="pretitle mb-2">{pretitle}</h3>
            <h2 className="h2 uppercase ">{title}</h2>
            <p>{sub1}</p>
            <p className="mt-10 mb-5">{sub2}</p>
            <h4 className="text-2xl capitalize font-semibold text-accent">
              {name}
            </h4>
            <small className="inline-block capitalize font-semibold mt-2 mb-4">
              {occupation}
            </small>
            <div>
              <img className="mx-auto md:mx-0" src={signatureImg} alt="" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex items-center justify-center"
          >
            <img src={chefImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
