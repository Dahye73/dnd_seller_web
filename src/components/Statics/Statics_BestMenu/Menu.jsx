import React, { useState } from 'react';
import styles from './menu.module.css';
import Box from '@mui/material/Box';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Favorite from '@mui/icons-material/Favorite';

const Menu_go = () => {
    const [menus, setMenus] = useState([
        { id: 1, name: '메뉴1', price: 6000, favorite: 353, image: '/images/food1.jpg' },
        { id: 2, name: '메뉴2', price: 6000, favorite: 353,image: '/images/food1.jpg' },
        { id: 3, name: '메뉴3', price: 6000, favorite: 353,image: '/images/food1.jpg' },
        { id: 4, name: '메뉴4', price: 6000, favorite: 353,image: '/images/food1.jpg' },

    ]);

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>인기 메뉴</h2>
            </div>
            <div className={styles.menuContainer}>
                {menus.map((menu) => (
                    <Box key={menu.id} className={styles.box}>
                        <img className={styles.image} src={menu.image} alt={menu.name} />
                        <div className={styles.titleAndIcon}>
                            <h3 className={styles.menu_title}>{menu.name}</h3>
                            <div className={styles.favoriteContainer}>
                                <Favorite fontSize="large" />
                                <span className={styles.menu_favorite}>{menu.favorite}</span>
                            </div>
                        </div>
                        <div className={styles.priceContainer}>
                            <AttachMoney fontSize="large"/>
                            <span className={styles.menu_price}>{menu.price}</span>
                        </div>
                    </Box>
                ))}
            </div>
        </div>
    );
};

export default Menu_go;
