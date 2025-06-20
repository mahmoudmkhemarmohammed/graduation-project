import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../validations/signInSchema";
import actAuthLogin from "../../store/auth/act/actAuthLogin";
import actGetUser from "../../store/auth/act/actGetUser";
const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });
  const submitForm = (data) => {
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => {
        dispatch(actGetUser());
        navigate("/");
      });
  };
  return (
    <div className="flex h-[800px] justify-center items-center">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-white rounded-lg shadow w-[500px]"
        style={{ padding: "20px" }}
      >
        <h2 className="text-4xl text-center">تسجيل الدخول</h2>
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
        {loading == "pending" ? (
          <div>Loading...</div>
        ) : (
          <input
            type="submit"
            value="تسجيل الدخول"
            className="bg-green-400 rounded-md text-2xl w-full cursor-pointer"
            style={{ padding: "10px" }}
          />
        )}
        <Link
          to={"/register"}
          className="bg-red-400 rounded-md text-2xl text-center w-full cursor-pointer inline-block"
          style={{ padding: "10px", marginTop: "10px" }}
        >
          إنشاء حساب
        </Link>
      </form>
    </div>
  );
};

export default Login;
