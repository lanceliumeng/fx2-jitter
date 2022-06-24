import { useGlobalState } from "../utils/stateContext";
import Message from "./Message";
import { useEffect } from "react";
import {
  getMessages,
  getMyMessages,
  getMessagesByUser,
} from "../services/messagesServices";
import { useLocation, useParams } from "react-router-dom";

const Messages = () => {
  const { store, dispatch } = useGlobalState();
  const { messageList } = store;
  const location = useLocation();
  const params = useParams();
  console.log(location);
  console.log(params);

  useEffect(() => {
    // fetch("http://localhost:4000/messages")
    // .then(response => response.json())
    // .then(data=> console.log(data))
    // axios.get("http://localhost:4000/messages")
    // .then(response => {
    //   console.log(response.data)
    //   dispatch({
    //     type: "setMessageList",
    //     data: response.data
    //   })
    // })
    if (location.pathname === "/messages/mymessages") {
      getMyMessages()
        .then((messages) => {
          dispatch({
            type: "setMessageList",
            data: messages,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (params.username) {
      getMessagesByUser(params.username)
        .then((messages) => {
          dispatch({
            type: "setMessageList",
            data: messages,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("after new message");
      getMessages()
        .then((messages) => {
          dispatch({
            type: "setMessageList",
            data: messages,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }

    //setMessageList(initialMessageList)
  }, [location]);

  return (
    <>
      {messageList.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </>
  );
};

export default Messages;
