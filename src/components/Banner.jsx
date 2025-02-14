const Banner = () => {
  return (
    <section className="relative bg-[url(https://thepaintlady.biz/wp-content/uploads/2018/03/side-show-pic-2.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/65 sm:from-gray-900/65 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className=" flex-1 relative  max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-3xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Transform Your Space with
            <strong className="block font-extrabold text-rose-500">
              {" "}
              A Flawless Finish.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            We are a company specialized in drywall, paint, handyman, finish
            work and much more.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* <div className="flex-1">
          <img src="/logo.png" alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
