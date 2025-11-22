import React from "react";
import ProjectCard from "./ProjectCard";
import WeatherImg from "../../assets/images/Weather_App.jpeg";
import ExpenseImg from "../../assets/images/Expense_Tracker.jpeg";
import EcommerceImg from "../../assets//images/Ecommerce_Cart.jpeg";

const Projects = () => {
  return (
    <div id="Projects" className="px-6 md:px-24 pt-0 md:pt-6 pb-6 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Weather App"
          main="Crafted as a sleek, responsive web application, this Weather App allows users to effortlessly search for and view real-time weather data for any city. Built with familiar technologies like HTML, JavaScript, and Tailwind CSS, the app seamlessly fetches current temperature, humidity, wind speed, and descriptive weather details from a reliable weather API"
          image={WeatherImg}
          sourceUrl="https://github.com/Anurag781/Weather_App/tree/main"
        />
        <ProjectCard
          title="Expense Tracker"
          main="A sleek, responsive web application that empowers users to effectively record, categorize, and analyze their financial transactions. Built using semantic HTML, stylish CSS, and interactive JavaScript, your Expenses Tracker offers a clean interface for managing daily expenses and incomes with ease."
          image={ExpenseImg}
          sourceUrl="https://github.com/Anurag781/Expense_Tracker"
        />
        <ProjectCard
          title="E-Commerce Cart Page"
          main="A modern, user-centric web component crafted using HTML,CSS, and JavaScript. This e-commerce cart page delivers a smooth and intuitive shopping experience—letting users review items, adjust quantities, apply discounts, and seamlessly proceed to checkout."
          image={EcommerceImg}
          sourceUrl="https://github.com/Anurag781/Ecommerce_Cart_Page"
        />
      </div>
    </div>
  );
};

export default Projects;
