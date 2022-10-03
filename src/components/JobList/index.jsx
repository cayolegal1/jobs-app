import './index.css'

const JobList = ({company, children}) => {     

  return (  

    <div className={company === 'Photosnap' || company === 'Manage' ? 'first-jobs' : 'job'}>

       {children}

    </div>
  )
}

export default JobList