
const Contact = () => {
  return (
    <section className="w-full h-[90vh] flex flex-col items-center">
      <div className="relative w-full h-full max-w-xs sm:max-w-sm mx-5 sm:mx-auto bg-gray-800 rounded-4xl flex flex-col items-center justify-center p-6">
      <h1 className='absolute top-3 left-5 text-xl sm:text-3xl text-gray-300 font-medium'>Contact</h1>
      <div className="w-full flex flex-col items-center">
          <p className="text-md text-gray-500">Email:</p>
          <p className="text-indigo-500">Danai_wee@hotmail.com</p>
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <p className="text-md text-gray-500">More project on:</p>
          <a 
            className="text-indigo-500 hover:underline"
            href="http://www.danaiweeportfolio.com"
            target="_blank"
          >
              www.danaiweeportfolio.com 
          </a>
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <p className="text-md text-gray-500">GitHub:</p>
          <a 
            className="text-indigo-500 text-center hover:underline"
             href="https://github.com/Danaiwee?tab=repositories"
            target="_blank"
          >
            https://github.com/Danaiwee?tab=repositories </a>
        </div>
      </div>

      <div className='mt-4 text-md text-gray-500'>
        Developed by Danai
      </div>
    </section>
  );
};

export default Contact;
