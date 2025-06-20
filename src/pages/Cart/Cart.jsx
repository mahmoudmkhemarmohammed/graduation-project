import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import actGetProductsCart from "../../store/cart/act/actGetProductsCart";
import SpecialHeading from "../../components/common/SpecialHeading/SpecialHeading";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { deleteFromCart } from "../../store/cart/cartSlice";
import { FaClipboardList } from "react-icons/fa";
const Cart = () => {
  const dispatch = useDispatch();
  const {productsFullInfo , itemsId} = useSelector(state => state.cart)
  const productsFullInfoWithQuantity = productsFullInfo.map(el => ({...el , cartItemsQuantity: itemsId[el._id]}))
  
  useEffect(() => {
    dispatch(actGetProductsCart())
  },[dispatch])

  
  return (

          <section className="cart">
      <SpecialHeading title={"سلة التسوق"} />
      <div className="container">
        {productsFullInfoWithQuantity.length > 0 ? <>
          <div className="flex bg-white justify-between rounded-md *:bg-red-400 *:grow *:text-2xl *:text-center gap-2" style={{padding: "20px" , marginBottom: "10px"}}>
          <h2 style={{padding: "10px" , borderRadius: "6px" , fontWeight: "bolder"}}>المنتج</h2>
          <h2 style={{padding: "10px" , borderRadius: "6px" , fontWeight: "bolder"}}>الكمية</h2>
          <h2 style={{padding: "10px" , borderRadius: "6px" , fontWeight: "bolder"}}>السعر</h2>
          <h2 style={{padding: "10px" , borderRadius: "6px" , fontWeight: "bolder"}}>حذف</h2>
        </div>
        {productsFullInfoWithQuantity.map(el => <div className="flex bg-white justify-between rounded-md shadow *:grow *:text-center *:text-xl gap-2 items-center max-sm:*:text-[17px]" style={{padding: "20px" , marginBottom: "10px"}} key={el._id}>
          <Link to={`/products/${el._id}`} className="flex justify-between w-[25%] items-center max-sm:flex-col-reverse">
          <h2>{el.name}</h2>
          <img src={el.images[0]} alt={el.name} className="rounded-md w-[100px] max-sm:w-[50px]"/>
          </Link>
          <h2 className="w-[25%]">{el.cartItemsQuantity} قطعة</h2>
          <h2 className="w-[25%]">{el.cartItemsQuantity * el.price} جنية</h2>
          <h2 onClick={() => dispatch(deleteFromCart(el._id))} className="flex justify-center w-[25%] cursor-pointer items-center"><TbTrash className="text-red-400" size={25}/></h2>
        </div>)}
        
        </>: <div className="flex flex-col h-[500px] justify-center w-full *:text-3xl *:text-red-400 gap-4 items-center">
        <FaClipboardList size={100}/>
        <h2>سلة التسوق فارغه</h2>
          </div>}
      </div>
    </section>
  )
}

export default Cart