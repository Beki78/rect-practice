import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="aboutContainer">
      <h2>SpaceX</h2>

      <img
        className="aboutImg"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/The_SpaceX_Factory.jpg/360px-The_SpaceX_Factory.jpg"
      />

      <p>
        SpaceX, is an American spacecraft manufacturer, launch service provider,
        defense contractor and satellite communications company headquartered in
        Hawthorne, California. The company was founded in 2002 by Elon Musk with
        the goal of reducing space transportation costs and ultimately
        developing a sustainable colony on Mars. The company currently operates
        the Falcon 9 and Falcon Heavy rockets along with the Dragon and Starship
        spacecraft.The company offers internet service via its Starlink
        satellites, which became the largest-ever satellite constellation in
        January 2020 and as of November 2023 comprised more than 5,000 small
        satellites in orbit.[7] Meanwhile, the company is developing Starship, a
        human-rated, fully-reusable, super heavy-lift launch system for
        interplanetary and orbital spaceflight. On its first flight in April
        2023, it became the largest and most powerful rocket ever flown. The
        rocket reached space on its second flight that took place in November
        2023.
        <Link
          to={"https://en.wikipedia.org/wiki/SpaceX"}
          style={{ display: "block", color: "blueviolet" }}
        >
          more
        </Link>
      </p>
      <h2>Tesla</h2>

      <img
        className="aboutImg"
        src="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266528765/image_1266528765.jpg?io=getty-c-crop-4-3"
      />

      <p>
        Tesla, Inc. (/ˈtɛslə/ TESS-lə or /ˈtɛzlə/ TEZ-lə[a]) is an American
        multinational automotive and clean energy company headquartered in
        Austin, Texas, which designs, manufactures and sells electric vehicles,
        stationary battery energy storage devices from home to grid-scale, solar
        panels and solar shingles, and related products and services. Tesla was
        incorporated in July 2003 by Martin Eberhard and Marc Tarpenning as
        Tesla Motors. The company's name is a tribute to inventor and electrical
        engineer Nikola Tesla. In February 2004 Elon Musk joined as the
        company's largest shareholder and in 2008 he was named CEO. In 2008, the
        company began production of its first car model, the Roadster sports
        car, followed by the Model S sedan in 2012, the Model X SUV in 2015, the
        Model 3 sedan in 2017, the Model Y crossover in 2020, the Tesla Semi
        truck in 2022 and the Cybertruck pickup truck in 2023. The Model 3 is
        the all-time bestselling plug-in electric car worldwide, and in June
        2021 became the first electric car to sell 1 million units globally.[5]
        In 2023, the Model Y was the best-selling vehicle, of any kind,
        globally.[2]
        <Link
          to={"https://en.wikipedia.org/wiki/Tesla,_Inc."}
          style={{ display: "block", color: "blueviolet" }}
        >
          more
        </Link>
      </p>
      <h2>X-Corp</h2>

      <img
        className="aboutImg"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Twitter_Headquarters_in_San_Francisco-L1001299.jpg/375px-Twitter_Headquarters_in_San_Francisco-L1001299.jpg"
      />

      <p>
        In April 2022, filings submitted to the Securities and Exchange
        Commission (SEC) revealed Musk had formed three corporate entities in
        Delaware, all under the name of X Holdings. According to the filings,
        one of the entities was to merge with Twitter, Inc., while another was
        to serve as the parent company of the newly merged company. A third
        entity would then help take on a US$13 billion loan provided by various
        large banks to acquire Twitter.[6] The name "X" dates back to X.com, an
        online bank co-founded by Musk in 1999. In March 2000, X.com merged with
        competitor Confinity to create PayPal.[7] Musk considered forming a
        holding company named "X" for Tesla, Inc. and SpaceX in August 2012.[8]
        In July 2017, Musk reacquired the domain X.com, for an undisclosed
        amount, from PayPal.[9] Musk reaffirmed his support for the name "X" in
        December 2020, replying to a Twitter user who renewed calls for Musk to
        form a new holding company under that name, although he dismissed the
        idea of X acquiring his businesses.The concept for X solidified in
        October 2022, when Musk tweeted that acquiring Twitter is "an accelerant
        to creating X, the everything app". According to Musk, Twitter would
        accelerate the creation of X by "3 to 5 years". Musk expressed interest
        in creating an app similar to WeChat—a Chinese instant messaging, social
        media, and mobile payment app—on a podcast in May 2022.[11] In June,
        Musk told Twitter employees that Twitter is a "digital town square" that
        should be all-encompassing, like WeChat.[12] In a Morgan Stanley
        conference in March 2023, Musk touted X once again as the potentially
        "biggest financial institution in the world".[13] On October 27, 2022,
        Musk acquired Twitter for $44 billion, and subsequently became its CEO.
        <Link
          to={
            "https://en.wikipedia.org/wiki/X_Corp.#:~:text=X%20Corp.%20is%20an%20American,is%20itself%20owned%20by%20Musk."
          }
          style={{ display: "block", color: "blueviolet" }}
        >
          more
        </Link>
      </p>
      <h2>Neuralink</h2>

      <img
        className="aboutImg"
        src="https://miro.medium.com/v2/resize:fit:1200/1*JEU4Xw2F0-rTAOIgY6Joag.jpeg"
      />

      <p>
        Neuralink Corp.[4] is an American neurotechnology company that is
        developing implantable brain–computer interfaces (BCIs), based in
        Fremont, California, as of 2022. Founded by Elon Musk and a team of
        seven scientists and engineers, Neuralink was launched in 2016 and was
        first publicly reported in March 2017.[5][6][7][8] Since its founding,
        the company has hired several high-profile neuroscientists from various
        universities.[9] By July 2019, it had received $158 million in funding
        (of which $100 million was from Musk) and was employing a staff of 90
        employees.[10] At that time, Neuralink announced that it was working on
        a "sewing machine-like" device capable of implanting very thin (4 to 6
        μm in width)[11] threads into the brain, and demonstrated a system that
        reads information from a lab rat via 1,500 electrodes. They had
        anticipated starting experiments with humans in 2020,[10] but have since
        moved that projection to 2023. As of May 2023, they have been approved
        for human trials in the United States.[12] The company has faced
        criticism for a large amount of euthanization of primates that underwent
        medical trials. Veterinary records of the monkeys showed a number of
        complications with electrodes being surgically implanted.[13] On January
        29, 2024, Musk said that Neuralink had successfully implanted a
        Neuralink device in a human and that the patient was recovering.[14]
        <Link
          to={"https://en.wikipedia.org/wiki/Neuralink"}
          style={{ display: "block", color: "blueviolet" }}
        >
          more
        </Link>
      </p>
    </div>
  );
}

export default About;
