import './index.css'

const JobPositionInfo = ({postedAt, contract, location}) => {
  return (
    <div className='main-info-vacancy-information'>
        <p> 
            <span>{postedAt}</span> 
            <span className='point'>.</span> 
            <span>{contract}</span> 
            <span className='point'>.</span>
            <span>{location}</span>
        </p>
    </div>
  )
}

export default JobPositionInfo