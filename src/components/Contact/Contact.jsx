import { useDispatch} from 'react-redux'
import css from './Contact.module.css'
import { deleteContact } from '../../redux/contacts/operations'


const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch()

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  }
  
  return (
    <div className={css.container}>
      <div>
        <h2 className={css.text} >{name}</h2>
        <p className={css.text}>{number}</p>
        </div> 
          <button type="button" onClick={()=>onDelete(id)} className={css.btn}> Delete </button>
     </div>
    
    
  )
}

export default Contact