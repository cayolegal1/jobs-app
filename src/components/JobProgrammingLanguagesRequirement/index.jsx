import './index.css'

const JobProgrammingLanguageRequirement = ({language, handlerClick, filterRequirements}) => {
  return (

    <li className={filterRequirements.includes(language) ? 'selected-requirement' : 'requirement'}
      onClick={() => handlerClick(language, "languages") }>
        {language}
    </li>
  )
}

export default JobProgrammingLanguageRequirement;