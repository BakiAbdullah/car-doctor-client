import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  
  const {googleSignIn} = useContext(AuthContext);
  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(result =>{
      console.log(result.user)
    })
    .catch(err=> console.log(err))
  }

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn}>
          <img className="w-[38px] h-[38px]"
            src="https://asset.brandfetch.io/id6O2oGzv-/idvNIQR3p7.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
