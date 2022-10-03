import './index.css'

const ActivesFilters = ({filterItem, setFilterRequirements}) => {

  const deleteItem = (itemToDelete) => setFilterRequirements(prev => prev.filter(item => item !== itemToDelete))

  return (

    <li className='filter-item'>
        <span className={filterItem.includes('CSS') ? 'filter-item-text-css' : 'filter-item-text'}>{filterItem}</span>
        <span className='close-item' onClick={() => deleteItem(filterItem)}>X</span>
    </li>

  )
}

export default ActivesFilters