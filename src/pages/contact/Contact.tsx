import React from 'react'
import './Contact.scss'
import {AiOutlinePhone,AiOutlineMail,} from "react-icons/ai";
import {GrLocation} from 'react-icons/gr';
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className='contact'>
       {/* <h1 className='text-center'>Contact</h1> */}

       <div className="left">
          <h3>{t("contact")}</h3>
          <ul className=' contact-info mt-2 list-unstyled'>
            <li> <AiOutlinePhone/>  <Link to='#'>+999440304</Link></li>
            <li><AiOutlineMail/>  <Link to="#"> example1@gmail.com </Link></li>
            <li> <GrLocation/>  <Link to="#">VunqTau street 15A </Link></li>
          </ul>


       </div>

       <div className="right">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97238.72854453837!2d49.8434048!3d40.3931136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1659083996706!5m2!1sen!2s" title="map" width="100%" height="550" allowFullScreen loading="eager" referrerPolicy='no-referrer-when-downgrade'></iframe>
       </div>
    </div>
  )
}

export default Contact