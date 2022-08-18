import React, {useState} from "react";


function Categories() {
    // Categories list
    const categoryList = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ];

    // Category element
    function CategoryItem({categoryName, index}) {
        return (
            <li className={activeCategory === index ? 'active' : ''}
                onClick={() => setActiveCategory(index)}>
                {categoryName}
            </li>
        )
    }

    // useState to add active class on clicked category
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <div className="categories">
            <ul>
                {
                    categoryList.map((categoryName, index) =>
                        <CategoryItem categoryName={categoryName} index={index} key={index}/>)
                }
            </ul>
        </div>
    )
}

export default Categories;