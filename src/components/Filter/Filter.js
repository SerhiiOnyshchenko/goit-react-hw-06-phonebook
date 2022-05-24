import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from './../../redux/contact/contact-actions';
import { getFilter } from './../../redux/contact/contact-selectors';

export default function Filter() {
   const filter = useSelector(getFilter);
   const dispatch = useDispatch();
   return (
      <label className={s.label}>
         Find contact by name
         <input
            type="text"
            name="filter"
            placeholder="Enter some letters to search"
            value={filter}
            onChange={e => dispatch(changeFilter(e.target.value))}
         />
      </label>
   );
}
