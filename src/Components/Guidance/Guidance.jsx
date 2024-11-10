import styles from "./Guidance.module.css";

const Guidance = () => {
  return (
    <div className='bg-gradient-to-b from-finding_background via-white-400 to-white text-finding_all_text text-xl leading-relaxed px-6 w-full mt-11 flex flex-col items-center'>
      <h3 className='text-2xl text-finding_sec_bold font-bold my-4 uppercase'>
        Finding & Working With The
      </h3>
      <h1 className='text-4xl font-bold text-finding_sec_bold mb-4'>
        Best Web Design Agency
      </h1>
      <h2 className='text-3xl text-finding_sec_bold font-bold my-2 leading-normal'>
        Whether starting a brand from the ground up or overhauling your current
        website, working with a website design agency gives you access to the
        top experts in web design.
      </h2>
      <p className='text-finding_text'>
        In turn, these experts have access to leading tools, modern trends, best
        practices and more to help ensure that your website is not only unique
        but built to perform — if you find the right agency, that is. Not all
        agencies are created equal.
      </p>
      <p className=' text-finding_text mt-10'>
        We&#x27;ll breakdown exactly what to look for in a partner to help you
        choose the best website design agency for your project.
      </p>
      <p className='text-finding_all_text mt-28'>
        Whether you&#x27;re starting a brand from the ground up or your current
        website needs a complete overhaul due to lack of performance, working
        with a website design agency gives you
        <span className='font-bold'>
          {" "}
          access to the top experts in web design.
        </span>
      </p>
      <p className='mt-10'>
        In turn, these experts have access to
        <span className='font-bold'>
          {" "}
          leading tools, modern trends, best practices
        </span>{" "}
        and more to help ensure that your website is not only unique but built
        to perform — if you find the right agency, that is. Not all agencies are
        created equal.
      </p>
      <p className='mt-10'>
        We&#x27;ll breakdown exactly what to look for in a partner to help you
        choose the best website design agency for your project.
      </p>
      <div className='mt-10'>
        <h2 className='font-bold text-3xl mb-5'>
          How To Find The Best Web Design Company
        </h2>
        <p className='mb-5'>
          Follow the step-by-step guide below to kickstart your search and learn
          how to evaluate potential web design companies to partner with your
          brand.
        </p>
        <h2 className='font-bold text-3xl mb-5'>Step 1: Define Your Needs</h2>
        <p>
          Before you start the hunt, the first step is to fully define your
          needs. Here are three key areas to consider:
        </p>
        <ul className='list-none ml-6 my-10'>
          <li className='customLi '>
            <b>Design needs: </b>Are you looking to build a new website from the
            ground up? Or do you have a current digital presence that needs
            either a light refresh or a complete overhaul?
          </li>
          <li className='customLi '>
            <b>Design approach:</b> Are you satisfied to settle with an agency
            that works with templates or do you need an agency that designs
            custom websites?
          </li>
          <li className='customLi '>
            <b>Website goals:</b> What are your specific goals for the website?
            For example: Higher search engine ranking, more traffic, greater
            engagement, increased conversion.{" "}
          </li>
          <li className='customLi '>
            <b>Website requirements:</b> What are your specific requirements for
            the website? Do you have a platform in mind? Create a list of
            must-have features and functionalities, along with a list of
            nice-to-have’s if your budget allows.
          </li>
        </ul>

        <p className="relative">
          Creating a <b className='absolute inset-1 bg-blue-500 transform group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-[450ms]'>website request for proposal</b>
          (RFP) document can help you organize and outline your project for
          potential agencies. Agencies that are interested in taking on your
          project can then use this document to respond by submitting a proposal
          or a bid.{" "}
        </p>
        <h2>Step 2: Start Your</h2>
        <p>
          Search The best way to find an agency for your digital project is of
          course, online! Use a search engine or check out a B2B marketplace
          like Design Rush — you can actually post your RFP here and wait for a
          bid, or search agencies and reach out to a few on your own.
        </p>
        <p>
          If you&#x27;re looking for a reliable web design team that will
          deliver a custom website that&#x27;s unique to your brand identity,
          your offering and your target market, you&#x27;ve found your match in
          Digital Silk.
          <br />
          Our trusted web design experts work with brands across industries to
          deliver fully custom website projects, from web design and development
          to website strategy, content creation and more.
          <br />
          Schedule a consultation to meet our team and get a custom quote for
          your project.
        </p>
      </div>
    </div>
  );
};

export default Guidance;
