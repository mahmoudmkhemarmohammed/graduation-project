import { Link } from 'react-router-dom'
import './Footer.css'
import { FaCaretRight } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="col">
        <h4>تواصل معنا</h4>
        <p className='tawasel'>تواصل معنا عن طريق :</p>
        <div className="info">
           <p> <IoLocation />
           شارع 123 , القاهره</p>
        <p><MdEmail />info@example.com</p>
        <p><FaPhoneAlt/>+201099366506</p>
        </div>
      </div>
      <div className="col">
        <h4>الصفحات</h4>
        <Link to= "/">الصفحه الرئيسيه <FaCaretRight /></Link>
        <Link to= "/products"> منتجاتنا <FaCaretRight /></Link>
        <Link to= "/categories"> الفئات <FaCaretRight /></Link>
        
        <Link to= "/cart">سله التسوق <FaCaretRight /></Link>
          <Link to= "/about">عنا <FaCaretRight /></Link>
          <Link to= "/contact">تواصل معنا <FaCaretRight /></Link>
      </div>
      <div className="col">
        <h4> البروفايل</h4>
          <Link to= "/">الصفحه الرئيسيه <FaCaretRight /></Link>
          <Link to= "/wishlist">المفضله <FaCaretRight /></Link>
          <Link to= "/brands">الماركات <FaCaretRight /></Link>
          <Link to= "/cart">سله التسوق <FaCaretRight /></Link>
          <Link to= "/about">عنا <FaCaretRight /></Link>
          <Link to= "/contact">تواصل معنا <FaCaretRight /></Link>
      </div>
      <div className="col-f">
        <h4>رسائلكم</h4>
        <p>اهم رسائلكم اخبرنا المزيد</p>
        <div className="failed">
          <input type="text"/>
          <button>مشاركه</button>
        </div>
      </div>
    </div>
    <div className="under-footer">
      <div className="text">
        <p>تحت اشراف <span>د/ رشدي محمد فاروق</span></p>
      </div>
    </div>
   </footer>
  )
}

export default Footer