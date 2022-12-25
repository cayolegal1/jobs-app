import './index.css'

const JobRoleLevel = ({role, level,  filterRequirements, setFilterRequirements, handlerClick}) => {

  return (
    <>
        <li className={filterRequirements.includes(role) ? 'selected-requirement' : 'requirement'} 
          onClick={() => handlerClick(role, "role")} >

          {role}

        </li>

        <li className={filterRequirements.includes(level) ? 'selected-requirement' : 'requirement'} 
          onClick={() => handlerClick(level, "level")} >

          {level}

        </li>
    </>
  )
}

export default JobRoleLevel