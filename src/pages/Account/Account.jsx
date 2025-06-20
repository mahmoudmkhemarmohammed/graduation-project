import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/auth/authSlice";

const Account = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  return (
    <div className="flex h-[600px] justify-center items-center">
      <div className="flex flex-col justify-center gap-5 items-center">
        <CgProfile size={150} className="text-red-400" />
        <h2 className="text-2xl">الاسم : {user?.name}</h2>
        <h2 className="text-2xl">الإيميل : {user?.email}</h2>
        <h2
          className="bg-red-400 rounded-md text-2xl text-center w-full cursor-pointer"
          style={{ padding: "10px" }}
          onClick={() => dispatch(logOut())}
        >
          تسجيل الخروج
        </h2>
      </div>
    </div>
  );
};

export default Account;
