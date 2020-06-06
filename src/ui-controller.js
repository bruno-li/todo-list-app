export const UIController = (() => {
	let DOMStrings = {
		projectModal: '.modal__project',
		addProjectBtn: '.add__btn',
		addListBtn: '.add__list-btn',
		listTitle: '.project__name',
		todoContainer: '.todo__container',
		closeBtn: '.close-button',
		tasksContainer: '.tasks__container',
		closeModal: '.close-button'
	};

	return {
		addProject: (title) => {
			console.log(title);
			let newTask = `<div class="tasks__container">
                    <div class="task">
                        <h2 class="project">${title}</h2>
                        <div class="modal__project">
                            <div class="modal__project-content">
                                <span class="close-button">&times;</span>
                                <h3>${title}</h3>
                                <ul class="project__list">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                                <span class="close-button">&times;</span>
                            </div>
                        </div>
                    </div>
                </div>`;
			document.querySelector(DOMStrings.todoContainer).insertAdjacentHTML('beforeend', newTask);
		},

		getDom: () => DOMStrings,
		test: () => console.log('UIController')
	};
})();
