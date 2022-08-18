import React, {useState} from "react";

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
function CategoryItem({categoryName, index, activeCategory, setActiveCategory}) {
    return (
        <li className={activeCategory === index ? 'active' : ''}
            onClick={() => setActiveCategory(index)}>
            {categoryName}
        </li>
    )
}

function Categories() {
    // useState to add active class on clicked category
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <div className="categories">
            <ul>
                {
                    categoryList.map((categoryName, index) =>
                        <CategoryItem key={index} categoryName={categoryName} index={index}
                                      activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>)
                }
            </ul>
        </div>
    )
}

export default Categories;