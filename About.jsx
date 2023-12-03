import React from "react";
import Common from "./Common";

const About = () => {
  const img = `https://media.istockphoto.com/id/1457729914/photo/news-feed-in-phone-watching-and-reading-latest-online-articles-and-headlines-from-smartphone.jpg?s=612x612&w=0&k=20&c=6ozzZ8AqUsJBdE4fzj9fEGBhomvIM9Y0sB0bZFVjW6Q=`;

  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={img}
        visit="contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
