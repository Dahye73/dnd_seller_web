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

  console.log(data);

  if (error) return <h1>에러가 발생했습니다. 다시 시도해 주세요.</h1>;

  if (isLoading) return <CircularProgress />;

  const now = new Date();
  const thisMonth = now.getMonth() + 1;
  const thisYear = now.getFullYear();
  const lastDay = now.getDate() - 1;

  const thisMonthData = data?.years
    ?.find((item) => item.year === thisYear)
    ?.month_list.find((item) => item.month === thisMonth);

  const lastMonthData = data?.years
    ?.find((item) => item.year === thisYear)
    ?.month_list.find((item) => item.month === thisMonth - 1);

  const lastDayData = data?.years
    ?.find((item) => item.year === thisYear)
    ?.month_list.find((item) => item.month === thisMonth)
    ?.day_list.find((item) => item.date === lastDay);

  let increasePercetage = 0;

  if (!lastMonthData) {
    increasePercetage = 0;
  } else {
    increasePercetage = Math.floor(
      ((thisMonthData.total - lastMonthData.total) / lastMonthData.total) * 100
    );
  }

  let dailyIncreasePercentage = 0;

  if (!lastDayData) {
    dailyIncreasePercentage = 0;
  } else {
    dailyIncreasePercentage = Math.floor(
      ((data.total - lastDayData.total) / lastDayData.total) * 100
    );
  }

  return (
    <section className={styles.container}>
      <StartPageLogo />
      <div className={styles["container-grid"]}>
        <div className={styles["grid-item"]}>
          <Card>
            <StartPageStatics
              title={"이번달 매출액"}
              amount={thisMonthData.total}
              description={
                <>
                  전월 대비{" "}
                  <strong className={"text-strong"}>
                    {increasePercetage}%{" "}
                  </strong>
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
              amount={data.total}
              description={
                data?.status ? (
                  <>
                    전일 대비 <strong>{dailyIncreasePercentage}% </strong>
                    증가했습니다.
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
