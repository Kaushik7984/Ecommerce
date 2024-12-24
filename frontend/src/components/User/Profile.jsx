   import { useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  const formattedDate = user ? new Date(user.createdAt).toLocaleDateString('en-GB') : "";

  const handleadmin = () => {
    alert("Are you sure to send a request in the mail to Admin")
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {user && (
            <MetaData title={`${user.name}'s Profile`} />
          )}
          <div className="profileContainer">
            <div className="first">
              <h1>My Profile</h1>
              {user && user.avatar && user.avatar.url ? (
                <img src={user.avatar.url} alt={user.name} />
              ) : (
                <img src="/Profile.png" alt="Default Avatar" />
              )}
              <Link className="editprofilebtn" to="/me/update">Edit Profile</Link>

            </div>

            <div className="second">
              <div>
                <h4>My Name</h4>
                <p>{user ? user.name : "N/A"}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user ? user.email : "N/A"}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{formattedDate}</p>
              </div>

              <div className="last">
                <Link className="myorderbtn" to="/orders">My Orders</Link>
                <Link className="myorderbtn" to="/password/update">Change Password</Link>

                {user && (user.role === "user") ? (
                  <div className="link" onClick={handleadmin} >
                    <a href="mailto:kaushiktapaniya07@gmail.com">Request admin to be an Seller/Admin</a>
                  </div>
                ) : null}

              </div>

            </div>




          </div>
        </>
      )}
    </>
  );
};

export default Profile;
