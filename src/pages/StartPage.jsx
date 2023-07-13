import { CircularProgress } from "@mui/material";
import Card from "../UI/card";
import CardAlignStart from "../UI/card_align_start";
import StartPageDate from "../components/StartPage/StartPage_date/StartPage_date";
import StartPageLogo from "../components/StartPage/StartPage_logo/StartPage_logo";
import StartPageMemo from "../components/StartPage/StartPage_memo/StartPage_memo";
import StartPageStatics from "../components/StartPage/StartPage_statics/StartPage_statics";
import { useStore } from "../hooks/store_hooks";
import styles from "./StartPage.module.scss";

const StartPage = () => {
  const { data, error, isLoading } = useStore();

  if (error) return <h1>에러가 발생했습니다. 다시 시도해 주세요.</h1>;

  if (isLoading) return <CircularProgress />;

  return (
    <section className={styles.container}>
      <StartPageLogo />
      <div className={styles["container-grid"]}>
        <div className={styles["grid-item"]}>
          <Card>
            <StartPageStatics
              title={"이번달 매출액"}
              amount={1838900}
              description={
                <>
                  매월 평균 대비 <strong className={"text-strong"}>21%</strong>
                  증가했습니다.
                </>
              }
            />
          </Card>
        </div>
        <div className={styles["grid-item"]}>
          <Card>
            <StartPageStatics
              title={"금일 매출액"}
              amount={0}
              description={
                data?.status ? (
                  <>
                    전일 대비 <string>0%</string>증가했습니다.
                  </>
                ) : (
                  <>판매를 시작해 주세요.</>
                )
              }
            />
          </Card>
        </div>
        <div className={styles["grid-item"]}>
          <StartPageDate />
        </div>
        <div className={styles["grid-item"]}>
          <CardAlignStart>
            <StartPageMemo />
          </CardAlignStart>
        </div>
      </div>
    </section>
  );
};

export default StartPage;
