import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCategoriesSchema } from "../../../validations/addCategoriesSchema";
import { useNavigate } from "react-router-dom";
import actAddBrand from "../../../store/brands/act/actAddBrand";

const AddBrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(addCategoriesSchema),
  });
  const submitForm = async (data) => {
    const { name, image } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image[0]);
    dispatch(actAddBrand(formData))
      .unwrap()
      .then(() => {
        navigate("/brands");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full bg-white rounded-md"
      style={{ padding: "10px", marginTop: "10px" }}
    >
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="name" className="text-3xl text-red-500">
          إسم العلامة التجارية
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
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="image" className="text-3xl text-red-500">
          الصورة
        </label>
        <input
          type="file"
          accept="image/*"
          id="image"
          className="w-full bg-slate-200  text-xl rounded border-0 outline-0 shadow"
          style={{ padding: "10px", marginTop: "5px" }}
          {...register("image")}
        />
      </div>
      <p className="text-lg text-red-400" style={{ margin: "5px" }}>
        {errors?.image?.message && errors.image.message}
      </p>
      <input
        type="submit"
        value="إنشاء علامة تجارية"
        className="w-full bg-green-400 text-2xl rounded cursor-pointer"
        style={{ padding: "10px" }}
      />
    </form>
  );
};

export default AddBrand;