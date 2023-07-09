import { Link } from "react-router-dom"
import ProductPage from "../../../pages/ProductPage"
import Style from "./showlist.module.css"

const Showlist = () => {
  return (
    <div className={`${Style.productList} ${Style.mainFrame}`}>
      <table>
        <thead>

          <tr>
            <th className={Style.imageRow}>
              <Link to='#'>
                <img src="../sample1.jpg" alt="상품보기" />
              </Link>
            </th>
            <th className={Style.infoRow}>
              <div>
                <strong>삼겹살</strong>
                <p>상품설명</p>
              </div>
            </th>
            <th className={Style.editCell}>
              <div>
                <p>수정</p>
                <strong>10000 원</strong>
              </div>
            </th>
          </tr>
          
        </thead>
      </table>
    </div>
  );
}

export default Showlist;
