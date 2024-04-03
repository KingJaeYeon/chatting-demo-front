import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { auth, storage } from "../firebase.ts";
import Add from "../img/addAvatar.png";
import { useState } from "react";

export function Register() {
  const [err, setErr] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
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
