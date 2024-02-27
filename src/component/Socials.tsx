import { socialData } from "../data";

const Socials = () => {
  return (
    <div>
      <ul className="flex items-center gap-3">
        {socialData.map((item, idx) => {
          return (
            <li className="cursor-pointer flex items-center justify-center bg-black rounded-full border-2  w-[36px] h-[36px] text-white border-white hover:text-accent hover:border-accent " key={idx}>
              <a className="inline-block" href={item.href}>{item.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
