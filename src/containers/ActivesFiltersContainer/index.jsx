import './index.css'

const ActivesFiltersContainer = ({children, setFilterRequirements}) => {
  return (
    <div className='item-container'>
          <div className='filter-items-container'>
            <ul className='filter-items'> 
              {children}
            </ul>
          </div>
          <div className='clear-container'>
            <span className='clear' onClick={() => setFilterRequirements([])}>Clear</span>
          </div>
    </div>
  )
}

export default ActivesFiltersContainer