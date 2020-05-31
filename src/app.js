import { UIController } from './ui-controller';
import { todoController } from './todo-controller';
import './style.scss';
import './vendor';

const controller = ((UICtrl, todoCtrl) => {
	const setupEventListeners = () => {
		let DOMstr, addBtn, tasksContainer, todoContainer, modalContainer;
		DOMstr = UICtrl.getDom();
		addBtn = document.querySelector(DOMstr.addBtnTask);
		tasksContainer = document.querySelector(DOMstr.tasksContainer);
		todoContainer = document.querySelector(DOMstr.todoContainer);
		modalContainer = document.querySelector(DOMstr.modal);

		addBtn.addEventListener('click', addTask);

		todoContainer.addEventListener('click', (event) => {
			if (event.target.classList.contains('project')) {
				toggleModal(DOMstr);
			}
		});

		window.addEventListener('click', (event) => {
			console.dir(event.target);

			if (event.target.classList.contains('modal')) {
				toggleModal(DOMstr);
			}
		});
	};

	const toggleModal = (DOMstr) => {
		document.querySelector(DOMstr.modal).classList.toggle('show-modal');
	};

	const addTask = () => {
		UICtrl.displayNewTask();
		// console.log(event);
	};

	UICtrl.test();
	todoCtrl.test();

	return {
		init: () => {
			console.log('app started');
			setupEventListeners();
		}
	};
})(UIController, todoController);

controller.init();
