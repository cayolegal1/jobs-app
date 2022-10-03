import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {jobs} from './data/data';
import Header from './components/Header';
import JobList from './components/JobList';
import JobLogo from './components/JobLogo';
import JobMainInfo from './components/JobMainInfo';
import JobPositionInfo from './components/JobPositionInfo';
import JobRequirements from './components/JobRequirements';
import JobRoleLevel from './components/JobRoleLevel';
import JobProgrammingLanguagesRequirement from './components/JobProgrammingLanguagesRequirement';
import JobToolsRequirement from './components/JobToolsRequirement';
import './App.css';

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
    setFilterRequirements(prev => [item, ...prev])
  }

  useEffect(() => {

    setFilteredJobs(state)

  }, [state]);

  return (

    <ChakraProvider >

      <Header />

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

