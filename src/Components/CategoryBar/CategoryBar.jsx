import React from 'react';
import './CategoryBar.css';


export default function CategoryBar({ showCategories , currentCategory, setCurrentCategory}) {

	return (
		<div className="CategoryBar">
			<ul>
				{showCategories.map((c, idx) => (
					<li>
						<span className={c.name === currentCategory ? 'active' : ''}
					onClick={() => setCurrentCategory(c.name)}>{c.name}</span></li>
				))}
			</ul>

		</div>
		
	);
}
