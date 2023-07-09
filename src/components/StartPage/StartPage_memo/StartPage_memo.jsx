import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import styles from "./StartPage_memo.module.scss";
import { useState } from "react";
import { Delete } from "@mui/icons-material";

const StartPageMemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState([]);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const memoCompleteHandler = () => {
    setMemoList((prev) => [...prev, memo]);
    setIsOpen(false);
    setMemo("");
  };

  const memoChangeHandler = (e) => {
    setMemo(e.target.value);
  };

  const deleteMemoHandler = (index) => {
    setMemoList((prev) => {
      const newList = [...prev];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DialogTitle>메모를 입력해 주세요.</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus={true}
            sx={{
              width: "30rem",
            }}
            onChange={memoChangeHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>취소</Button>
          <Button onClick={memoCompleteHandler}>확인</Button>
        </DialogActions>
      </Dialog>
      <div className={styles.container}>
        <h2>
          메모
          <span />
          <button
            className={styles.addBtn}
            type="button"
            onClick={openModalHandler}
          >
            +
          </button>
        </h2>
        <hr />
        <ul>
          {memoList.map((item, index) => {
            return (
              <li key={item}>
                <div>{item}</div>
                <IconButton onClick={() => deleteMemoHandler(index)}>
                  <Delete fontSize="small" />
                </IconButton>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default StartPageMemo;
