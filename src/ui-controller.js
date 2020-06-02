export const UIController = (() => {
	let DOMStrings = {
		todoContainer: '.todo__container',
		closeBtn: '.close-button',
		tasksContainer: '.tasks__container',
		addBtnTask: '.add__btn',
		modal: '.modal',
		closeModal: '.close-button'
	};

	return {
		displayNewTask: () => {
			let newTask = `<div class="tasks__container">
                    <div class="task">
                        <h2 class="project">%Project%</h2>
                        <div class="modal">
                            <div class="modal-content">
                                <span class="close-button">&times;</span>
                                <h3>%project%</h3>
                                <ul class="project__list">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
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
