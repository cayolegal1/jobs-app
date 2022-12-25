import { useState } from "react";

const useFilterJobs = () => {

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterRequirements, setFilterRequirements] = useState([]);

  const filterJobs = (job, filterParam) => {

      if(Array.isArray(filteredJobs[0][filterParam]))
        return setFilteredJobs(prev => prev.filter(item => item[filterParam]?.some(item2 => item2 === job)));

      setFilteredJobs(prev => prev.filter(item => item[filterParam] === job));       
  };

  const handlerClick = (item, itemType) => {

    filterJobs(item, itemType);

    if(!filterRequirements.includes(item)) return setFilterRequirements(prev => [item, ...prev]);

    return setFilterRequirements(prev => prev.filter(prevItem => prevItem !== item));
  };

  return {

    handlerClick, 
    filterRequirements, 
    setFilterRequirements, 
    filteredJobs, 
    setFilteredJobs
  };
}

export {useFilterJobs}