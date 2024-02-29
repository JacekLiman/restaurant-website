import { useState } from "react";
import { reservationData } from "../data";

const handleStartDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
};

import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";

const Reservation = () => {
  const [startDate, setStartDate] = useState(handleStartDate());
  const [hour, setHour] = useState("10:00");
  const [users, setUsers] = useState("3");

  const { title, subtitle, modelImg, btnText } = reservationData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div data-aos="fade-up" data-aos-offset="600">
          <div className="text-center">
            <h2 className="h2 capitalize">{title}</h2>
            <p className="text-dark mb-8">{subtitle}</p>
            <div className="flex justify-center mb-8">
              <img src={modelImg} alt="" />
            </div>
          </div>
          <form className="grid md:grid-cols-3 grid-cols-1 gap-10  lg:gap-20 ">
            <div>
              <div className="flex items-center gap-3 mb-3 text-dark text-base font-semibold">
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <input
                className="reservation-input"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3 text-dark text-base font-semibold">
                <FaClock />
                <div>Choose Time</div>
              </div>
              <input
                className="reservation-input"
                data-date-format="DD MMMM YYYY"
                type="time"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3 text-dark text-base font-semibold">
                <FaUsers />
                <div>How many people</div>
              </div>
              <input
                min={1}
                className="reservation-input"
                type="number"
                value={users}
                onChange={(e) => setUsers(e.target.value)}
              />
            </div>
          </form>
          <button className="btn capitalize mt-14 mx-auto">{btnText}</button>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
