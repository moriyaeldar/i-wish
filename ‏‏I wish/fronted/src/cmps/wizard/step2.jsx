import React from 'react';
import { useFormik } from 'formik';
export const Step2 = ({increment,decrement,addWishData}) => {
  const formik = useFormik({
    initialValues: {
      wish: '',
      mail: '',
    },
    onSubmit: values => {
      addWishData({wish:values.wish,mail:values.mail})
      increment()
    },
  });
const previous=()=>{
decrement()
}

  return (
    <div className="wish">
    <h4> ה <span> Wish</span> שלך</h4>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="wish">מה המשאלה/תלונה/בקשה שלך?*</label>
      <input
        id="wish"
        name="wish"
        type="text"
        placeholder="הקלד/י.."
        onChange={formik.handleChange}
        value={formik.values.wish}
      />
      <label htmlFor="mail">הוסף דוא"ל למעקב</label>
      <input
        id="mail"
        name="mail"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.mail}
      />
      <button disabled={!formik.values.wish}>שלח/י</button>
    </form>
    <button className="back" onClick={()=>{previous()}}>חזרה</button>
    </div>
  );
};