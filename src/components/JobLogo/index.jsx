import './index.css'

const JobLogo = ({logo, company}) => {
  
  return (
    <div className='img-container'>
        <img src={logo} alt={company} title={company}/>
    </div>
  )
}

export default JobLogo