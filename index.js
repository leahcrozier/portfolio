// Get the button:
let topbutton = document.getElementById("topbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


class FilterGallery {
	
	constructor(){
		this.$filtermenuList = $('.filtermenu li');
		this.$container      = $('.container');
		
		this.updateMenu('all');
		this.$filtermenuList.on('click', $.proxy(this.onClickFilterMenu, this));
	}
	
	onClickFilterMenu(event){
		const $target      = $(event.target);
		const targetFilter = $target.data('filter');

		this.updateMenu(targetFilter);
		this.updateGallery(targetFilter);
	}
	
	updateMenu(targetFilter){
		this.$filtermenuList.removeClass('active');
		this.$filtermenuList.each((index, element)=>{
			const targetData = $(element).data('filter');

			if(targetData === targetFilter){
				$(element).addClass('active');
			}
		})
	}
	
	updateGallery(targetFilter){

		if(targetFilter === 'all'){
			this.$container.fadeOut(300, ()=>{
				$('.post').show();
				this.$container.fadeIn();
			});
		}else {
			this.$container.find('.post').each((index, element)=>{
				this.$container.fadeOut(300, ()=>{
					if($(element).hasClass(targetFilter)) {
						$(element).show();
					}else {
						$(element).hide();
					}
					this.$container.fadeIn();
				})
			});
		}
	}
}

const fliterGallery = new FilterGallery();