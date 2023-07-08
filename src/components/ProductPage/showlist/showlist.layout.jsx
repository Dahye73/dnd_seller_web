import { Link } from "react-router-dom";
import ProductPage from "../../../pages/ProductPage"
import Style from "./showlist.module.css";

const Showlist = () => {
    return (
        <div className={Style.productList}>
            <table>
                <thead>
                    <tr>
                        <Link to='#'><img src="../sample1.jpg" alt="상품보기" /></Link>
                        <th>삼겹살</th>
                        <th>10000 원</th>
                    </tr>
                    <tr>
                        <th>여긴 사진</th>
                        <th>사겹살</th>
                        <th>10000 원</th>
                    </tr>
                    <tr>
                        <th>여긴 사진</th>
                        <th>오겹살</th>
                        <th>10000 원</th>
                    </tr>
                    <tr>
                        <th>여긴 사진</th>
                        <th>육겹살</th>
                        <th>10000 원</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Showlist;