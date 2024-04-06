import { v4 as uuid } from "uuid";
import { useState } from "react";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import { useAuthContext } from "../store/authStore.ts";
import { useChatContext } from "../store/chatStore.ts";
import { db, storage } from "../firebase.ts";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export function Input() {
  const [text, setText] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const { user: currentUser } = useAuthContext();
  const { data } = useChatContext();

  async function handleSend() {
    console.log(img);
    if (img) {
      console.log("img");
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        () => {},
        () => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              message: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        },
      );
    } else {
      console.log("doc", data);
      await updateDoc(doc(db, "chats", data.chatId), {
        message: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setImg(null);
    setText("");
  }

  return (
    <div className={"input"}>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <img src={Attach} alt="attach" />
        <input
          type="file"
          id={"file"}
          hidden={true}
          onChange={(e) => {
            if (e.currentTarget.files) {
              setImg(e.currentTarget.files[0]);
            }
          }}
        />
        <label htmlFor="file">
          <img src={Img} alt="img" />
        </label>
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
}
