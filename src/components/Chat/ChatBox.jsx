import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Messeges from "./Messeges";
import SendMessege from "./SendMessege";

const ChatBox = () => {
  return (
    <div>
      <Box>
        <Box>
          <Typography>Сообщения</Typography>
        </Box>
        <Box>
          <Typography>Эрнас</Typography>
        </Box>
        <Box>
          <Messeges />
        </Box>
        <Box>
          <SendMessege />
        </Box>
      </Box>
    </div>
  );
};

export default ChatBox;
