import SpecialHeading from '../../components/common/SpecialHeading/SpecialHeading'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1><SpecialHeading title="تواصل معنا"/></h1>
        <form>
          <input type="text" placeholder="الاسم الاول"/>
          <input type="text" placeholder="الاسم الاخير"/>
          <input type="number" placeholder="الرقم"/>
          <input type="email" placeholder="الايميل"/>
          <textarea placeholder='رسائلك'/>
          <button>ارسال</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs