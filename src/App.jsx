import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {jobs} from './data/data';
import Header from './components/Header';
import JobList from './containers/JobList';
import JobLogo from './components/JobLogo';
import JobMainInfo from './components/JobMainInfo';
import JobPositionInfo from './components/JobPositionInfo';
import JobRequirements from './containers/JobRequirements';
import JobRoleLevel from './components/JobRoleLevel';
import JobProgrammingLanguagesRequirement from './components/JobProgrammingLanguagesRequirement';
import JobToolsRequirement from './components/JobToolsRequirement';
import './App.css';
import ActivesFilters from './components/ActivesFilter';
import ActivesFiltersContainer from './containers/ActivesFiltersContainer';

const App = () => {

  const [state] = useState(jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterRequirements, setFilterRequirements] = useState([]);

  const filterJobs = (job, filterParam) => {

      if(Array.isArray(filteredJobs[0][filterParam]))
        return setFilteredJobs(prev => prev.filter(item => item[filterParam]?.some(item2 => item2 === job)));

      setFilteredJobs(prev => prev.filter(item => item[filterParam] === job));       
  };

  const handlerClick = (item, itemType) => {

    filterJobs(item, itemType)

    if(!filterRequirements.includes(item)) return setFilterRequirements(prev => [item, ...prev])

    return setFilterRequirements(prev => prev.filter(prevItem => prevItem !== item))
  }

  useEffect(() => {

    if(!filterRequirements.length > 0) setFilteredJobs(state)

  }, [state, filterRequirements]);

  return (

    <ChakraProvider >

      <Header />

      {filterRequirements.length > 0 &&  

        <ActivesFiltersContainer setFilterRequirements={setFilterRequirements}>

          {filterRequirements.map(req => 
            <ActivesFilters key={req} filterItem={req} setFilterRequirements={setFilterRequirements} /> ) 
          }

        </ActivesFiltersContainer>   
      }
     
      <section className='container'>

        {filteredJobs.map(job => 

          <JobList key={job.id}>

            <JobLogo logo={job.logo} company={job.company} />

            <JobMainInfo {...job} >

              <JobPositionInfo {...job} />

            </JobMainInfo>

            <JobRequirements 
              setFilterRequirements={setFilterRequirements} 
              filterRequirements={filterRequirements}
              handlerClick={handlerClick} >

              <JobRoleLevel role={job.role} level={job.level} />

              {job.languages.map(language => <JobProgrammingLanguagesRequirement key={language} language={language} />)}


              {job.tools.map(tool => <JobToolsRequirement key={tool} tool={tool} />)}

            </JobRequirements>

          </JobList>

        )}

      </section>

    </ChakraProvider>
  );
}

export default App;

