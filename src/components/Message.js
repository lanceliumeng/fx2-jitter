import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Message = ({ message }) => {
  return (
    <Link to={`${message.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardContent>
          <Typography variant="h5">{message.text}</Typography>
          <Link to={`/messages/user/${message.username}`}>
            <Typography variant="p">{message.username}</Typography>
          </Link>
          <Typography variant="p">{message.posted}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Message;
