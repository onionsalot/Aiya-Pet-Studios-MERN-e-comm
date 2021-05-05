import React from 'react';
import './CategoryBar.css';


export default function CategoryBar({ showCategories , currentCategory, setCurrentCategory}) {

	return (
		<ul>
			{showCategories.map((c, idx) => (
				<li 
				className={c.name === currentCategory ? 'active' : ''}
				onClick={() => setCurrentCategory(c.name)}>{c.name}</li>
			))}
		</ul>
	);
}
