import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Messeges from "./Messeges";
import SendMessege from "./SendMessege";

const ChatBox = () => {
  return (
    <div>
      <Box
        sx={{
          height: "100%",
          width: "85vw",
          marginLeft: "auto",
          display: "flex",
          marginTop: "80px",
        }}
      >
        <Box>
          <Typography>Сообщения</Typography>
          <Box
            sx={{
              width: "15vw",
              height: "72px",
              borderRadius: "25px",
              backgroundColor: "#E7E7E7",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                margin: "10px",
              }}
            >
              <Avatar />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "13px",
                  lineHeight: "16px",
                }}
              >
                Эрнас
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "13px",
                  lineHeight: "16px",
                }}
              >
                пиздец ты тип
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: "20px",
          }}
        >
          <Typography>Эрнас</Typography>
          <Box
            sx={{
              width: "60vw",
              height: "60vh",
              backgroundColor: "#EBEBEB",
              borderRadius: "25px",
              position: "relative",
            }}
          >
            <Box>
              <Messeges />
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: "3%",
                left: "5%",
              }}
            >
              <SendMessege />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ChatBox;
