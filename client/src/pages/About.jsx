import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);
  
  return (
    <div className="pt-26 text-gray-800 font-playfair">
      {/* Hero Section */}
      <section className="relative py-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black font-playfair">
          About Palms & Pebbles Lodge
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 font-playfair">
        Your comfortable stay in the heart of town        
        </p>
      </section>

      {/* Story Section */}
      <section className="py-5 px-6 md:px-12 lg:px-24 ">
        <h2 className="text-3xl font-semibold mb-6 text-black font-playfair">
          Our Story
        </h2>
        <p className="leading-relaxed text-gray-700 font-playfair">
        Located in the tranquil suburbs of Lilongwe, Palms & Pebbles Lodge was founded
        with a vision to offer a serene retreat where guests can reconnect with nature,
        unwind in comfort, and enjoy authentic hospitality.
        </p>
      </section>

      {/* Experience Section */}
      <section className="py-5 px-6 md:px-12 lg:px-24 ">
        <h2 className="text-3xl font-semibold mb-6 text-black font-playfair">
          The Experience
        </h2>
        <p className="leading-relaxed text-gray-700 font-playfair">
          Whether you’re seeking a romantic getaway, a family retreat, or a solo adventure,
          our lodge offers a harmonious blend of rustic charm and modern amenities. Wake up
          to birdsong, enjoy fresh local cuisine, and explore scenic trails just steps away
          from your room.
        </p>
      </section>

      {/* Values Section */}
      <section className="py-5 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold mb-6 text-black font-playfair">
          Our Values
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li className=" font-playfair">
            <span className="font-semibold text-black font-playfair">Sustainability:</span> We honor the
            environment by practicing eco-friendly hospitality.
          </li>
          <li className=" font-playfair">
            <span className="font-semibold text-black font-playfair">Community:</span> Welcoming and supporting
            both local and international guests is central to our lodge’s philosophy.
          </li>
          <li className=" font-playfair">
            <span className="font-semibold text-black font-playfair">Well-being:</span> Every detail is
            designed to nurture relaxation and peace of mind.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="py-5 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-black font-playfair">
          Visit Us
        </h2>
        <p className=" max-w-2xl mx-auto text-gray-700 font-playfair">
          Come discover the beauty of Palms & Pebbles Lodge. Whether it’s a weekend escape
          or a long holiday, we look forward to welcoming you into our serene haven.
        </p>
      </section>
    </div>
  );
};

export default About;
