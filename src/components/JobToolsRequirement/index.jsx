import './index.css'

const JobToolsRequirement = ({tool, handlerClick, filterRequirements}) => {
  return (

    <li className={filterRequirements.includes(tool) ? 'selected-requirement' : 'requirement'} 
     onClick={() => handlerClick(tool, "tools")}>
      {tool}
    </li>
  )
}

export default JobToolsRequirement