import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../Details/Details";
import Healthy from "../Healthy/Healthy";
import Home from "../Home/Home";
import FoodList from "../FoodList/FoodList";
import Contact from "../Contact/Contact";

export default function Rout() {
  return (
    <Routes>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/food-list" element={<FoodList />} />
      <Route path="/healthy-food" element={<Healthy />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
