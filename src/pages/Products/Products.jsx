import MainProducts from "../../components/eCommerce/MainProducts/MainProducts"
import SidebarProducts from "../../components/eCommerce/ProductsSideBar/SidebarProducts"
import "./Products.css"
const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <SidebarProducts />
        <MainProducts />
      </div>
    </section>
  )
}

export default Products