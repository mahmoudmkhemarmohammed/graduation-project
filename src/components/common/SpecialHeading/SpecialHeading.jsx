import "./SpecialHeading.css"
const SpecialHeading = ({ title }) => {
  return (
    <section className="specialHeading">
      <div className="container">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default SpecialHeading;
