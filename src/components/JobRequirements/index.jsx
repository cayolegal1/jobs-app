import { Children, cloneElement } from 'react'
import './index.css'

const JobRequirements = ({children, filterRequirements, setFilterRequirements, handlerClick}) => {
  return (
    <>
      <hr />
      <ul className="requirements-section">

        {Children.toArray(children).map((child) =>

          cloneElement(child, { filterRequirements, setFilterRequirements, handlerClick })

        )}

      </ul>
    </>
  )
}

export default JobRequirements