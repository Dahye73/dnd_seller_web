import {
  Button,
  CircularProgress,
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
import {
  addMemoFetcher,
  deleteMemoFetcher,
  useStore,
} from "../../../hooks/store_hooks";

const StartPageMemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [memo, setMemo] = useState("");
  const { data, error, isLoading, mutate } = useStore();

  if (error) {
    return <h1>에러가 발생했습니다. 다시 시도해주세요.</h1>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const memoCompleteHandler = async () => {
    setIsOpen(false);
    setMemo("");
    // fetch: add memo.

    try {
      addMemoFetcher(memo);
      mutate({
        ...data,
        todoList: [...data.todoList, memo],
      });
    } catch (error) {
      window.alert(error.message);
    }
  };

  const memoChangeHandler = (e) => {
    setMemo(e.target.value);
  };

  const deleteMemoHandler = (index) => {
    // fetch: delete memo.
    deleteMemoFetcher(index);
    mutate({
      ...data,
      todoList: data.todoList.filter((_, i) => i !== index),
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
          {data.todoList.map((item, index) => {
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
