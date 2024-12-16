import img from "./download.jpg";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="text">
          <h1>معلومات عن البرنامج</h1>
          <p>موقع سوق توب تم انشاءه  بواسطة تيم 5 ستار </p>
          <p> مشروع تخرج تحت اشرف د/ رشدي محمد فاروق</p>
          <h2>التقنيات المستخدمه</h2>
          <h3>الواجهه الاماميه</h3>
          <id className="boxs">
          <h4> 1) Html</h4>
          <h4> 2) Css</h4>
          <h4> 3) Javascript</h4>
          <h4> 4) React</h4>
          </id>
          <h3>الواجهه الخلفيه</h3>
          <id className="box">
          <h4> 1) Node.js</h4>
          <h4> 2) express</h4>
          <h4> 3) Javascript</h4>
          <h4> 4) MonogoDB</h4>
          </id>
        </div>
        <div className="img-box">
          <img src={img} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
