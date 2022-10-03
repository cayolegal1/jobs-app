import './index.css'

const JobMainInfo = ({company, recent, featured, position, children}) => {

  return (

    <div className='main-info-vacancy'>

      <div className='main-info-vacancy-header'>

          <h6>{company}</h6>

          { recent && <p>NEW!</p>} 

          { featured && <span>FEATURED</span>} 

      </div>

      <div>

          <h4><strong>{position}</strong></h4>
          
      </div>

      {children}

    </div>
  )
}

export default JobMainInfo