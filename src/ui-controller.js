export const UIController = (() => {
	let DOMStrings = {
		tasksContainer: '.tasks__container',
		addBtnTask: '.add__btn'
	};

	return {
		getDom: () => DOMStrings,
		test: () => console.log('UIController')
	};
})();
