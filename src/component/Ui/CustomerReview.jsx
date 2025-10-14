import React from "react";
import Slider from "react-slick";

const reviews = [
  {
    name: "Cynthia Morrison",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "My experience at BudgetCars was excellent. Everything went smoothly with no hassle.",
    date: "31 Jan. 2017",
  },
  {
    name: "Harry Barton",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I have bought two cars from BudgetCars and will probably buy again. Great selection and good prices.",
    date: "1 Feb. 2017",
  },
  {
    name: "Anne Haynes",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Best place to buy cars, prices are very good, staff is very professional and the place is amazing.",
    date: "31 Jan. 2017",
  },
  {
    name: "Michael Roberts",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "The staff were friendly and made the process simple. I got a great deal on my car!",
    date: "10 Feb. 2017",
  },
  {
    name: "Laura Simmons",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Highly recommend BudgetCars! Transparent pricing and smooth process from start to finish.",
    date: "18 Feb. 2017",
  },
  {
    name: "James Miller",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    text: "Everything was well organized and I felt confident in my purchase. Excellent service!",
    date: "25 Feb. 2017",
  },
  {
    name: "Rebecca Turner",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    text: "They helped me find exactly what I needed within my budget. I’m so happy with my new car!",
    date: "3 Mar. 2017",
  },
  {
    name: "Thomas Clark",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "Quick, professional, and no hidden charges. Best experience I’ve had buying a car!",
    date: "10 Mar. 2017",
  },
];

const CustomerReview = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        What Our Customers Say
      </h2>

      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="flex justify-center px-3">
            <div
              className={`flex flex-col items-center text-center rounded  px-6 py-8 h-full ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 relative mb-3">
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-[#0463F0] opacity-60"></span>
                <span className="relative z-10">{review.name}</span>
              </h3>
              <p className="text-gray-600 italic mt-4 mb-6 leading-relaxed">
                “{review.text}”
              </p>
              <span className="text-gray-500 text-sm">{review.date}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReview;
