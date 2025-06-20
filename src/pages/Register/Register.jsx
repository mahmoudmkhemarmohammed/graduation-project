import { Link, useNavigate } from "react-router-dom";
import actAuthRegister from "../../store/auth/act/actAuthRegister";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });
  const submitForm = (data) => {
    dispatch(actAuthRegister(data))
      .unwrap()
      .then(() => navigate("/login"));
  };
  return (
    <div className="flex h-[800px] justify-center items-center">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-white rounded-lg shadow w-[500px]"
        style={{ padding: "20px" }}
      >
        <h2 className="text-4xl text-center">إنشاء حساب</h2>
        <div className="flex flex-col w-full *:text-xl *:w-full">
          <label htmlFor="name">الاسم</label>
          <input
            className="bg-sky-100 border-0 outline-0"
            style={{ padding: "10px", margin: "10px 0" }}
            type="text"
            id="name"
            {...register("name")}
          />
          <p className="text-lg text-red-400" style={{ margin: "5px" }}>
            {errors?.name?.message && errors.name.message}
          </p>
        </div>
        <div className="flex flex-col w-full *:text-xl *:w-full">
          <label htmlFor="email">الايميل</label>
          <input
            className="bg-sky-100 border-0 outline-0"
            style={{ padding: "10px", margin: "10px 0" }}
            type="text"
            id="email"
            {...register("email")}
          />
          <p className="text-lg text-red-400" style={{ margin: "5px" }}>
            {errors?.email?.message && errors.email.message}
          </p>
        </div>
        <div className="flex flex-col w-full *:text-xl *:w-full">
          <label htmlFor="password">كلمة السر</label>
          <input
            className="bg-sky-100 border-0 outline-0"
            style={{ padding: "10px", margin: "10px 0" }}
            type="password"
            id="password"
            {...register("password")}
          />
          <p className="text-lg text-red-400" style={{ margin: "5px" }}>
            {errors?.password?.message && errors.password.message}
          </p>
        </div>
        <p className="text-lg text-red-400" style={{ margin: "5px" }}>
          {error}
        </p>
          {loading == "pending" ? <div>
            loading...
          </div> : <input
          type="submit"
          value="إنشاء حساب"
          className="bg-green-400 rounded-md text-2xl w-full cursor-pointer"
          style={{ padding: "10px" }}
        />}
        <Link
          to={"/login"}
          className="bg-red-400 inline-block text-center rounded-md text-2xl w-full cursor-pointer"
          style={{ padding: "10px" , marginTop: "10px"}}
        >
          تسجيل الدخول
        </Link>
      </form>
    </div>
  );
};

export default Register;
