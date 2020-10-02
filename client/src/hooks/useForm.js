// write your custom hook here to control your checkout form
import {useState} from 'react'

const useForm =(initialValue) => {
    // const {savedValue, setSavedValue} = useState(() => {
    //     const item = window.localStorage.getItem(key);
    //     return item ? JSON.parse(item):initialValue;
    // })
    // const setValues = (values) => {
    //     setSavedValue(values);
    //     window.localStorage.setItem(key, JSON.stringify(values));
    // };
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      }
     

    return [values, setValues, showSuccessMessage, handleChanges, handleSubmit]
}
export default useForm