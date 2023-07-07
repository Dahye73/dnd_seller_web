import React, { useState } from 'react';
import styles from './menu.module.css';
import Box from '@mui/material/Box';

const Menu_go = () => {
    const [menus, setMenus] = useState([
        { id: 1, name: '메뉴1' },

    ]);

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.title}>인기 메뉴</h2>
            </div>
            <div className={styles.menuContainer}>
                {menus.map((menu) => (
                    <Box key={menu.id} className={styles.box}>
                        <h3>{menu.name}</h3>
                    </Box>
                ))}
            </div>
        </div>
    );
};

export default Menu_go;
