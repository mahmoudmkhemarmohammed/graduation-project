import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import actGetCategories from "../../../store/categories/act/actGetCategories";
import actGetBrands from "../../../store/brands/act/actGetBrands";
import { addProductSchema } from "../../../validations/addProductSchema";
import actAddProducts from "../../../store/products/act/actAddProducts";

const AddProduct = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedBrand, setSelectedBrand] = useState();
  const { records } = useSelector((state) => state.categories);
  const { records: brands } = useSelector((state) => state.brands);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(addProductSchema),
  });
  const submitForm = async (data) => {
    const { productName, productPrice, quantity, images } = data;
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("quantity", quantity);
    formData.append("category", selectedCategory);
    formData.append("brand", selectedBrand);
    formData.append("status", "inStock");
    Array.from(images).forEach((image) => {
      formData.append("images", image);
    });
    dispatch(actAddProducts(formData))
      .unwrap()
      .then(() => {
        navigate("/products");
      });
  };

  useEffect(() => {
    dispatch(actGetCategories());
    dispatch(actGetBrands());
  }, [dispatch]);

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full bg-white rounded-md *:w-full"
      style={{ padding: "10px", marginTop: "10px" }}
    >
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="productName" className="text-3xl text-red-500">
          إسم المنتج
        </label>
        <input
          type="text"
          id="productName"
          className="w-full bg-slate-200 text-xl rounded border-0 outline-0 shadow"
          style={{ padding: "10px", marginTop: "5px" }}
          {...register("productName")}
        />
        <p className="text-lg text-red-400" style={{ margin: "5px" }}>
          {errors?.productName?.message && errors.productName.message}
        </p>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="productPrice" className="text-3xl text-red-500">
          السعر
        </label>
        <input
          type="number"
          id="productPrice"
          className="w-full bg-slate-200 text-xl rounded border-0 outline-0 shadow"
          style={{ padding: "10px", marginTop: "5px" }}
          {...register("productPrice")}
        />
        <p className="text-lg text-red-400" style={{ margin: "5px" }}>
          {errors?.productPrice?.message && errors.productPrice.message}
        </p>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="quantity" className="text-3xl text-red-500">
          الكمية
        </label>
        <input
          type="number"
          id="quantity"
          className="w-full bg-slate-200 text-xl rounded border-0 outline-0 shadow"
          style={{ padding: "10px", marginTop: "5px" }}
          {...register("quantity")}
        />
        <p className="text-lg text-red-400" style={{ margin: "5px" }}>
          {errors?.quantity?.message && errors.quantity.message}
        </p>
      </div>
      <div>
        <h2 className="text-3xl text-red-500">اختر الفئة</h2>
        <div
          className="flex justify-between gap-2 flex-wrap"
          style={{ marginBottom: "10px" }}
        >
          {records?.map((el) => (
            <h2
              onClick={() => setSelectedCategory(el._id)}
              className={`${
                selectedCategory == el._id
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              } grow text-xl text-center rounded cursor-pointer`}
              style={{ padding: "10px", marginTop: "10px" }}
              key={el._id}
            >
              {el.name}
            </h2>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-red-500">إختر العلامة التجارية</h2>
        <div
          className="flex justify-between gap-2 flex-wrap"
          style={{ marginBottom: "10px" }}
        >
          {brands?.map((el) => (
            <h2
              onClick={() => setSelectedBrand(el._id)}
              className={`${
                selectedBrand == el._id
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              } grow w-[150px] text-xl text-center rounded cursor-pointer`}
              style={{ padding: "10px", marginTop: "10px" }}
              key={el._id}
            >
              {el.name}
            </h2>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="images" className="text-3xl text-red-500">
          الصورة
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          id="images"
          className="w-full bg-slate-200  text-xl rounded border-0 outline-0 shadow"
          style={{ padding: "10px", marginTop: "5px" }}
          {...register("images")}
          onChange={(e) => {
            const files = e.target.files;
            if (files.length > 0) {
              const previews = Array.from(files).map((file) =>
                URL.createObjectURL(file)
              );
              setImagePreviews(previews);
            }
          }}
        />
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        {imagePreviews.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`preview-${index}`}
            className="w-24 h-24 object-cover rounded shadow"
          />
        ))}
      </div>

      <p className="text-lg text-red-400" style={{ margin: "5px" }}>
        {errors?.images?.message && errors.images.message}
      </p>
      <input
        type="submit"
        value="إنشاء منتج"
        className="w-full bg-green-400 text-2xl rounded cursor-pointer"
        style={{ padding: "10px" }}
      />
    </form>
  );
};

export default AddProduct;
