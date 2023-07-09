import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import styles from "./StartPage_memo.module.scss";
import { useState } from "react";

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
            type="button"
            onClick={openModalHandler}
          >
            +
          </button>
        </h2>
        <hr />
        <ul>
          {memoList.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default StartPageMemo;
