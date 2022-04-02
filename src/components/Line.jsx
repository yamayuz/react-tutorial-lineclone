import React, { useEffect, useState } from "react";
import { SignOut } from "./SignOut";
import { auth, db } from "../firebase";
import { SendMessage } from "./SendMessage";

export function Line() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection("message")
          .orderBy("createdAt")
          .limit(50)
          .onSnapshot((snapshot) => {
              setMessages(snapshot.docs.map((doc) => doc.data()));
          });
    }, []);

    return (
        <div>
            {console.log(messages)}
            <SignOut />
            <div className="msgs">
                {messages.map(({id, text, photoURL, uid}) => (
                    <div>
                    <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage />
        </div>
    );
};

