import React from "react";
import { useParams } from "react-router-dom";
import { useGetPropertiesByTypeQuery } from "../app/api/properties";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import BarFilter from "../components/BarFilter";

const FilterType = () => {
  const { filter } = useParams();
  const { data, isLoading } = useGetPropertiesByTypeQuery(filter);

  return (
    <div>
      <Navbar />
      <BarFilter />
      <Cards properties={data} />
    </div>
  );
};

export default FilterType;
