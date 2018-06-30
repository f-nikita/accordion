(function() {

	let accordionBtn = document.querySelectorAll('.accordion__btn');

	for(let i = 0; i < accordionBtn.length; i++) {
		accordionBtn[i].addEventListener('click', function(e) {
			e.preventDefault();
			let accordionItemList = this.parentElement.parentElement.children,
				accordionItem = this.parentElement,
				accordionContent = this.nextElementSibling;

			if(!accordionContent.classList.contains('active')) {
				for(let i = 0; i < accordionItemList.length; i++ ) {
					accordionItemList[i].querySelector('.accordion__content').classList.remove('slideDown');
					accordionItemList[i].querySelector('.accordion__content').classList.remove('active');
				}
				accordionContent.classList.add('slideDown');
				accordionContent.classList.add('active');
			} else {
				accordionContent.classList.remove('slideDown');
				accordionContent.classList.remove('active');
			}
		});
	}	

})();