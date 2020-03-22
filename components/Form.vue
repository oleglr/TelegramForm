<template>
	<form id="Form" class="form" action="/formsend" method="post" enctype="application/x-www-form-urlencoded">
			<header class="form__header">
				<img src="logo.svg" alt="Логотип Telegram" class="form__logo">
				<h1 class="form__title">Telegram Form</h1>
				<div class="form__status" id="Status">{{ StatusText }}</div>
			</header>
			<fieldset class="form__body" form="Form">
				<label for="name" class="form__label">Ваше имя</label>
				<input type="text" id="name" name="Name" title="Пожалуйста, введите ваше имя" class="form__input" placeholder="Иван" required>
				<label for="phone" class="form__label">Контактный телефон</label>
				<input type="tel" id="phone" name="Phone" title="Пожалуйста, введите ваш контактный телефон" class="form__input" placeholder="+7 900 000 00 00" required>
				<label for="email" class="form__label">Электронная почта</label>
				<input type="email" id="email" name="Email" title="Пожалуйста, введите адрес вашей электронной почты" class="form__input" placeholder="example@example.ru" required>
				<button class="form__button" id="Button" @click="SubmitForm">Отправить</button>
			</fieldset>
			<footer class="form__footer">
				<a href="https://github.com/Selexio/TelegramForm" target="_blank" class="form__link">Исходник на GitHub</a>
			</footer>
		</form>
</template>

<script>
export default {
	data() {
		return {
			StatusText: ''
		}
	},
	methods: {
		
		SubmitForm: function(e) { // Отправка Формы

			const Form 	 = document.querySelector('#Form'); // Форма
			const Status = document.querySelector('#Status'); // Статус отправки
			const Button = document.querySelector('#Button'); // Кнопка «Отправить»
			const Model = this; // Контекст

			if (Form.checkValidity()){ // Проверяем заполнены ли все обязательные поля
				e.preventDefault(); // Отменяем перезагрузку страницы для отправки по Ajax
				function toJSONString(Form) {
					var obj = {}
					var elements = Form.querySelectorAll('input')
					for (var i = 0; i < elements.length; ++i) {
						var element = elements[i]
						var name = element.name
						var value = element.value
						if (name) {
							obj[ name ] = value
						}
					}
					return JSON.stringify(obj)
				}

				if (Form) {
					const json = toJSONString(Form)
					const formReq = new XMLHttpRequest()
					formReq.open('POST', '/formsend', true,)
					formReq.onload = function() {
						if (formReq.status === 200) {
							Model.StatusText = 'Отправлено';
							Model.ShowStatus();
						}
						if (formReq.status !== 200) {
							Model.StatusText = 'Ошибка';
							Status.style.background = '#FF6347'
							Model.ShowStatus();
						}
					}
					formReq.setRequestHeader('Content-Type', 'application/json')
					formReq.send(json)
				}
				setTimeout(this.ClearForm, 3000); // Запускаем функцию Очистки формы после 2 секунд
			}

		},

		ShowStatus: function() { // Вывод Статуса
			Status.style.right = 24 + 'px'; // Сдвигаем Статус влево, показываем его
			Status.style.opacity = 1; // Делаем Статус полностью непрозрачным
		},

		ClearForm: function() { // Очистка Формы
			Form.reset(); // Очищаем поля
			Status.style.right = '-' + 87 + 'px'; // Сдвигаем Статус за пределы Формы
			Status.style.opacity = 0; // Делаем Статус полностью прозрачным
		}

	}
}
</script>

<style lang="sass">
.form
	position: relative
	display: flex
	flex-direction: column
	max-width: 400px
	width: 100%
	overflow: hidden
	background: #ffffff
	border: 1px solid #dddddd
	border-radius: 4px
	box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.006), 0 6.7px 5.3px rgba(0, 0, 0, 0.008), 0 12.5px 10px rgba(0, 0, 0, 0.01), 0 22.3px 17.9px rgba(0, 0, 0, 0.012), 0 41.8px 33.4px rgba(0, 0, 0, 0.014), 0 100px 80px rgba(0, 0, 0, 0.02)
	&__header
		position: relative
		display: flex
		align-items: center
		padding: 24px
		background: #f5f5f5
	&__logo
		margin-right: 8px
	&__body
		position: relative
		display: flex
		flex-direction: column
		margin: 0
		padding: 24px
		border: none
	&__title
		margin: 0
		font-size: 18px
		font-variation-settings: 'wght' 700
		@media only screen and (max-width: "320px")
			display: none
	&__status
		position: absolute
		top: 50%
		right: -87px
		transform: translate(0, -50%)
		transition: all .4s ease
		display: inline-block
		opacity: 0
		padding: 4px 8px
		background: #28a745	
		border-radius: 4px
		color: #ffffff
	&__label
		margin-bottom: 4px
		font-variation-settings: 'wght' 700
		&::after
			content: ':'
	&__input
		width: 100%
		margin-bottom: 24px
		padding: 8px 12px
		border: 1px solid #dddddd
		border-radius: 4px
		&:focus
			outline: none;
			box-shadow: 0 0 1px 2px #1890FF			
	&__button
		width: 100%
		padding: 8px 16px
		background: #1890FF
		border: 1px solid #1890FF
		border-radius: 4px
		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045)
		font-family: 'Manrope VF', Manrope, sans-serif
		color: #ffffff
		text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12)
		cursor: pointer
		&:hover
			background: darken(#1890FF, 5%)
		&:active
			background: darken(#1890FF, 10%)
		&:focus
			outline: none;
			box-shadow: 0 0 1px 1px #1890FF	
	&__footer
		padding: 24px
		border-top: 1px dashed #dddddd	
		text-align: center
	&__link
		border-bottom: 1px solid #dddddd
		text-decoration: none	
</style>