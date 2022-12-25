import { useEffect } from 'react';
import { useFilterJobs } from '../../hooks/useFilterJobs';
import JobList from '../JobList';
import JobListContainer from '../JobListContainer';
import JobRequirements from '../JobRequirements';
import ActivesFiltersContainer from '../ActivesFiltersContainer';
import JobLogo from '../../components/JobLogo';
import JobMainInfo from '../../components/JobMainInfo';
import JobPositionInfo from '../../components/JobPositionInfo';
import JobRoleLevel from '../../components/JobRoleLevel';
import JobProgrammingLanguagesRequirement from '../../components/JobProgrammingLanguagesRequirement';
import JobToolsRequirement from '../../components/JobToolsRequirement';
import ActivesFilters from '../../components/ActivesFilter';
import './index.css';


const Home = ({state}) => {

  const {handlerClick, filteredJobs, setFilteredJobs, filterRequirements, setFilterRequirements} = useFilterJobs();

  useEffect(() => {

    if(!filterRequirements.length > 0) setFilteredJobs(state)

  }, [state, filterRequirements, setFilteredJobs]);

  return (

    <>

      {filterRequirements.length > 0 &&  

        <ActivesFiltersContainer setFilterRequirements={setFilterRequirements}>

          {filterRequirements.map(req => 
            <ActivesFilters key={req} filterItem={req} setFilterRequirements={setFilterRequirements} /> ) 
          }

        </ActivesFiltersContainer>   
      }

      <JobListContainer >

        {filteredJobs.map(job => 

          <JobList key={job.id}>

            <JobLogo logo={job.logo} company={job.company} />

            <JobMainInfo {...job}>

              <JobPositionInfo {...job} />

            </JobMainInfo>

            <JobRequirements 
              setFilterRequirements={setFilterRequirements} 
              filterRequirements={filterRequirements}
              handlerClick={handlerClick}>

              <JobRoleLevel role={job.role} level={job.level} />

              {job.languages.map(language => <JobProgrammingLanguagesRequirement key={language} language={language} />)}


              {job.tools.map(tool => <JobToolsRequirement key={tool} tool={tool} />)}

            </JobRequirements>

          </JobList>

        )}

      </JobListContainer>

    </>
  );
}

export default Home;

