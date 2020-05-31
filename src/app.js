import { UIController } from './ui-controller';
import { todoController } from './todo-controller';
import './style.scss';
import './vendor';

const controller = ((UICtrl, todoCtrl) => {
	const setupEventListeners = () => {
		let DOMobj = UICtrl.getDom();

		document.querySelector(DOMobj.addBtnTask).addEventListener('click', addTask);
	};

	const addTask = () => {
		console.log(event);
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
