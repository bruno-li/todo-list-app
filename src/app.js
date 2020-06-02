import { UIController } from './ui-controller';
import { todoController } from './todo-controller';
import './style.scss';
import './vendor';

const controller = ((UICtrl, todoCtrl) => {
	const setupEventListeners = () => {
		let DOMstr, addBtn, tasksContainer, todoContainer, modalContainer, closeModalBtn;
		DOMstr = UICtrl.getDom();
		addBtn = document.querySelector(DOMstr.addBtnTask);
		tasksContainer = document.querySelector(DOMstr.tasksContainer);
		todoContainer = document.querySelector(DOMstr.todoContainer);
		modalContainer = document.querySelector(DOMstr.modal);
		closeModalBtn = document.getElementById(DOMstr.closeModal);

		addBtn.addEventListener('click', addTask);

		todoContainer.addEventListener('click', (event) => {
			if (event.target.classList.contains('project')) {
				toggleModal(DOMstr);
			} else if (event.target.classList.contains('close-button')) {
				toggleModal(DOMstr);
			}
		});

		window.addEventListener('click', (event) => {
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
