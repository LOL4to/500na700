$(document).ready(function () {
	//--------------- Мобильное меню ---------------//
	var menuButton = document.querySelector(".menu-button");
	menuButton.addEventListener("click", function () {
		document
			.querySelector(".header-mob__list")
			.classList.toggle("header-mob__list--visible");
	});

	//Закрыть окно крестиком
	closeMobileButton = $(".header-mob__closeblock");
	closeMobileButton.on("click", closeMobile);
	function closeMobile(event) {
		event.preventDefault();
		var mobileOverlay = $(".header-mob__list");
		mobileOverlay.removeClass("header-mob__list--visible");
	}

	//Вместо ховер эффектов на кнопки нужно будет нажимать
	// Нажатия на "Пункт 1, 2, ..."
	var itemButton1 = document.querySelector(".header-mob__item--1");
	var itemButton2 = document.querySelector(".header-mob__item--2");
	var itemButton3 = document.querySelector(".header-mob__item--3");
	var itemButton4 = document.querySelector(".header-mob__item--4");
	var itemButton5 = document.querySelector(".header-mob__item--5");
	itemButton1.addEventListener("click", function () {
		//Раскрытие подпункта
		document
			.getElementById("sub-m1")
			.classList.toggle("header-mob__sublist--active");
		//Создание "воздуха" в кач. увеличения столбца
		document
			.getElementById("empty-1")
			.classList.toggle("header-mob__empty--visible");
	});
	itemButton2.addEventListener("click", function () {
		document
			.getElementById("sub-m2")
			.classList.toggle("header-mob__sublist--active");
		document
			.getElementById("empty-2")
			.classList.toggle("header-mob__empty--visible");
	});
	itemButton3.addEventListener("click", function () {
		document
			.getElementById("sub-m3")
			.classList.toggle("header-mob__sublist--active");
		document
			.getElementById("empty-3")
			.classList.toggle("header-mob__empty--visible");
	});
	itemButton4.addEventListener("click", function () {
		document
			.getElementById("sub-m4")
			.classList.toggle("header-mob__sublist--active");
		document
			.getElementById("empty-4")
			.classList.toggle("header-mob__empty--visible");
	});
	itemButton5.addEventListener("click", function () {
		document
			.getElementById("sub-m5")
			.classList.toggle("header-mob__sublist--active");
		document
			.getElementById("empty-5")
			.classList.toggle("header-mob__empty--visible");
	});

	var addFaqTextMus = document.querySelector(".faq__item-mus");
	var addFaqTextPark = document.querySelector(".faq__item-park");
	var addFaqTextGid = document.querySelector(".faq__item-gid");
	addFaqTextMus.addEventListener("click", function () {
		$("#faq-mus").toggle("");
	});
	addFaqTextPark.addEventListener("click", function () {
		$("#faq-park").toggle("");
	});
	addFaqTextGid.addEventListener("click", function () {
		$("#faq-gid").toggle("");
	});

	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				email: {
					required: "Введите адрес электронной почты",
					email: "Формат эл.почты name@domain.com",
					minlength: "брат введёшь 100 знаков, а?",
				},
				phone: {
					required: "Телефон обязателен",
					minlength: "Введите номер полностью",
				},
			},
		});
	});
	var phone = $('input[name="phone"]');
	$(phone).mask("+7(999) 999-99-99", {
		completed: function () {
			alert("Вы ввели номер телефона: " + this.val());
		},
	});

	//--------------- Вызов модального окна ---------------//

	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	var closeModalButton_1 = $(".modal__overlay");
	modalButton.on("click", openModal);
	closeModalButton.on("click", closeModal);
	closeModalButton_1.on("click", closeModal);

	function openModal() {
		var targetModal = $(this).attr("data-href");
		$(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
		$(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
	}

	function closeModal(event) {
		event.preventDefault();
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		modalOverlay.removeClass("modal__overlay--visible");
		modalDialog.removeClass("modal__dialog--visible");
	}
	$(document).on("keydown", function (e) {
		let key = e.which;
		document.getElementById("universal-modal");
		if (key === 27) {
			var modalDialog = $(".modal__dialog");
			var modalOverlay = $(".modal__overlay");
			modalDialog.removeClass("modal__dialog--visible");
			modalOverlay.removeClass("modal__overlay--visible");
			document.getElementById("universal-modal");
		}
	});

    
	// --------------------- Слайдер  ----------------
	var mainSlider = new Swiper(".swiper", {
		loop: true,
		autoplay: {
			delay: 20000,
			pauseOnMouseEnter: true,
			// disableOnInteraction: false,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		navigation: {
			nextEl: ".slider__button--next",
			prevEl: ".slider__button--prev",
		},
	});
});
