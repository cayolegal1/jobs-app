const CreateJob = () => {

  const onSubmit = e => {

    e.preventDefault();
    console.log(e)
  }

  return (

    <form onSubmit={onSubmit}>
        
        <label htmlFor="company">Company</label>
        <input type={'text'} name='company' />

        <label htmlFor='position'>Position</label>
        <input type={'text'} name='position' />

        <select name="location">
            <option selected disabled>Select the location</option>
            <option>WorldWide</option>
            <option>USA only</option>
            <option>UK only</option>
        </select>

    </form>
  );
}

export default CreateJob;