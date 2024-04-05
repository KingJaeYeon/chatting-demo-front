import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import { auth, db, storage } from "../firebase.ts";
import Add from "../img/addAvatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e: any) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        () => {},
        () => {
          setErr(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            console.log("start");
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        },
      );
    } catch (e) {
      setErr(true);
    }
  }

  return (
    <div className={"formContainer"}>
      <div className={"formWrapper"}>
        <span className={"logo"}>KingPj Chat</span>
        <span className={"title"}>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={"display name"} />
          <input type="email" placeholder={"email"} />
          <input type="password" placeholder={"password"} />
          <input type="file" id="file" hidden={true} />
          <label htmlFor={"file"}>
            <img src={Add} alt={"add image"} />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an Account? Login</p>
      </div>
    </div>
  );
}
