import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  return (
    <div>
      <p>ProfilePage</p>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default ProfilePage;
