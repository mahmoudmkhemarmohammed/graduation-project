import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useIsAdmin = () => {
      const { user, accessToken } = useSelector((state) => state.auth);
      const [isAdmin, setIsAdmin] = useState(false);
      const [errorMessage, setErrorMessage] = useState(null);
    
      useEffect(() => {
        const getUserRole = async () => {
          try {
            const res = await axios.get(`/users/${user._id}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
    
            return setIsAdmin(res.data.User.role == "admin" ? true : false);
          } catch (error) {
            if (axios.isAxiosError(error)) {
              return setErrorMessage(error.message);
            } else {
              return setErrorMessage("unexpected Error");
            }
          }
        };
        getUserRole();
      }, [user, accessToken]);
  return {isAdmin , errorMessage}
}

export default useIsAdmin