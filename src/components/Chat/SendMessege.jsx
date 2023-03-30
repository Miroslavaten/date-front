import { Box } from "@mui/system";
import React from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "@mui/material";
const SendMessege = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        sx={{
          color: "black",
        }}
      >
        <TagFacesIcon
          sx={{
            // margin: "20px 10px 0 10px",
            width: "3rem",
            height: "3rem",
          }}
        />
      </Link>
      <input
        placeholder="Напишите сообщение"
        style={{
          width: "45vw",
          height: "52px",
          borderRadius: "25px",
          backgroundColor: "#D9D9D9",
          borderStyle: "none",
          margin: "0 20px",
        }}
      ></input>
      <Link
        sx={{
          color: "black",
        }}
      >
        <SendIcon
          sx={{
            // margin: "20px 10px 0 10px",
            width: "3rem",
            height: "3rem",
          }}
        />
      </Link>
    </Box>
  );
};

export default SendMessege;
