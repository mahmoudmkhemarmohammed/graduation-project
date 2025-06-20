import { useSelector } from "react-redux"

const ProtectedRoute = ({children}) => {
    const {accessToken} = useSelector(state => state.auth);
    if(!accessToken) {
        return <div className="flex flex-col justify-center items-center h-[600px]">
        <svg
          width="300"
          height="300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* الدرع */}
          <path
            d="M12 22C10.27 21.33 3 17.4 3 10V5L12 2L21 5V10C21 17.4 13.73 21.33 12 22Z"
            fill="#FAD2CF"
          />
          
          {/* القفل */}
          <rect x="8" y="11" width="8" height="6" rx="1" fill="#FF3D00" />
          <circle cx="12" cy="14" r="1" fill="white" />
          <path
            d="M9 11V9C9 7.343 10.343 6 12 6C13.657 6 15 7.343 15 9V11"
            stroke="#4A1F0D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <h2 className="text-2xl text-red-400">من فضلك قم بتسجيل الدخول لظهور المحتوي</h2>
      </div>
    }
  return <>{children}</>
}

export default ProtectedRoute