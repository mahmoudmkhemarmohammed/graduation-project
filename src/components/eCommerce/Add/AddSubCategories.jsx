import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import actGetCategories from "../../../store/categories/act/actGetCategories";
import actAddSubCategories from "../../../store/categories/act/actAddSubCategories";
import { addSubCategoriesSchema } from "../../../validations/addSubCategoriesSchema";

const AddSubCategories = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState();
  const { records } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(addSubCategoriesSchema),
  });
  const submitForm = async (data) => {
    const { name } = data;
    dispatch(actAddSubCategories({ name, category: selectedCategory }))
      .unwrap()
      .then(() => {
        navigate("/categories");
      });
  };

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full bg-white rounded-md"
      style={{ padding: "10px", marginTop: "10px" }}
    >
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="name" className="text-3xl text-red-500">
          إسم الفئة الفرعية
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-slate-200 text-xl rounded border-0 outline-0 shadow"
          style={{ padding: "10px", marginTop: "5px" }}
          {...register("name")}
        />
        <p className="text-lg text-red-400" style={{ margin: "5px" }}>
          {errors?.name?.message && errors.name.message}
        </p>
      </div>
      <h2 className="text-3xl text-red-500">اختر الفئة</h2>
      <div
        className="flex justify-between gap-2 flex-wrap"
        style={{ marginBottom: "10px" }}
      >
        {records?.map((el) => (
          <h2
            onClick={() => setSelectedCategory(el._id)}
            className={`${
              selectedCategory == el._id ? "bg-green-500 text-white" : "bg-gray-200"
            } grow text-xl text-center rounded cursor-pointer`}
            style={{ padding: "10px", marginTop: "10px" }}
            key={el._id}
          >
            {el.name}
          </h2>
        ))}
      </div>
      <input
        type="submit"
        value="إنشاء فئة فرعية"
        className="w-full bg-green-400 text-2xl rounded cursor-pointer"
        style={{ padding: "10px" }}
      />
    </form>
  );
};

export default AddSubCategories;
