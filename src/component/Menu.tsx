import { menuData } from "../data";

const Menu = () => {
  const { title, subtitle, modelImg, btnText, menuItems } = menuData;
  return (
    <section className="-mt-2 pb-10">
      <div>
        <div className="bg-menu bg-center bg-cover min-h-[800px] flex justify-center items-center relative">
          <div className="text-white text-center -mt-40">
            <h2 className="h2 capitalize text-white max-w-[500px]">{title}</h2>
            <p>{subtitle}</p>
            <img className="mx-auto mt-5" src={modelImg} alt="" />
          </div>
        </div>
        <div className="container mx-auto relative z-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 -mt-80">
            {menuItems.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="aspect-[2/1] grid grid-cols-2 bg-orange-100"
                >
                  <div>
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center p-8 text-center">
                    <p className="text-[22px] font-semibold">{item.name}</p>
                    <h3 className="text-3xl text-accent mt-3 mb-6 font-bold">
                      {item.price}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="btn uppercase mx-auto mt-8">{btnText}</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
