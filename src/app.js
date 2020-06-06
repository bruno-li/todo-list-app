import { UIController } from './ui-controller';
import { todoController } from './todo-controller';
import './style.scss';
import './vendor';

const controller = ((UICtrl, todoCtrl) => {
	const setupEventListeners = () => {
		let DOMstr, addProjectBtn, addListBtn, listTitle, projectModal;

		DOMstr = UICtrl.getDom();
		// elements
		addProjectBtn = document.querySelector(DOMstr.addProjectBtn);
		projectModal = document.querySelector(DOMstr.projectModal);
		addListBtn = document.querySelector(DOMstr.addListBtn);
		listTitle = document.querySelector(DOMstr.listTitle);

		// tasksContainer = document.querySelector(DOMstr.tasksContainer);
		// todoContainer = document.querySelector(DOMstr.todoContainer);
		// modalContainer = document.querySelector(DOMstr.modal);

		// closeModalBtn = document.getElementById(DOMstr.closeModal);

		addProjectBtn.addEventListener('click', () => {
			projectModal.classList.toggle('show-modal');
		});

		addListBtn.addEventListener('click', (e) => {
			e.preventDefault();
			UICtrl.addProject(listTitle.value);
			// listTitle.value = '';
			// console.log(listTitle.value);
			projectModal.classList.toggle('show-modal');
		});

		// todoContainer.addEventListener('click', (event) => {
		// 	if (event.target.classList.contains('project')) {
		// 		toggleModal(DOMstr);
		// 	} else if (event.target.classList.contains('close-button')) {
		// 		toggleModal(DOMstr);
		// 	}
		// });

		window.addEventListener('click', (event) => {
			if (event.target.classList.contains('modal__project')) {
				projectModal.classList.toggle('show-modal');
			} else if (event.target.classList.contains('close-button')) {
				projectModal.classList.toggle('show-modal');
			}
		});
	};

	// UICtrl.test();
	// todoCtrl.test();

	return {
		init: () => {
			console.log('app started');
			setupEventListeners();
		}
	};
})(UIController, todoController);

controller.init();
