import React, { useEffect } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function login() {
  const [{}, dispatch] = useStateProvider();

  const router = useRouter();

 

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoUrl: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);
    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        console.log(data);
        if (!data.status) {
          dispatch({
            type:reducerCases.SET_NEW_USER,newUser:true
          })
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: { name, email, profileImage, status: "" },
          });
          router.push("/onboarding");
        }else{
          dispatch({
            type:reducerCases.SET_NEW_USER,newUser:true
          })
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: { id:data?.data?.id,name:data?.data?.name, email:data?.data?.email, profileImage:data?.data?.profilePicture, status: data?.data?.status },
          });
          router.push("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="Whatsapp" height={300} width={300} />
        <span className="text-7xl ">Whatsapp</span>
      </div>
      <button
        className="flex items-center justify-center bg-search-input-container-background/95 p-5 rounded-lg gap-7 hover:bg-search-input-container-background hover:border border-neutral-700 transition hover:drop-shadow-md"
        onClick={handleLogin}
      >
        <FcGoogle className="text-4xl" />
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  );
}

export default login;
