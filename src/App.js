import React, { useState } from 'react';
import { menu } from './components/data';
import Categories from './components/Categories';
import Menu from './components/Menu';

function App() {
    const [menuItem, setMenuItem] = useState(menu);
    const categories = ['all', ...new Set(menu.map((item) => item.category))];

    const onFilterMenu = (category) => {
        const newMenu = menu.filter((item) => {
            if (category === 'all') return menu;
            return item.category === category;
        });
        setMenuItem(newMenu);
    };

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>our menu</h2>
                    <div className='underline'></div>
                </div>
                <Categories
                    onFilterMenu={onFilterMenu}
                    categories={categories}
                />
                <div className='section-center'>
                    {menuItem.map((item) => {
                        return <Menu menu={item} key={item.id} />;
                    })}
                </div>
            </section>
        </main>
    );
}

export default App;
