"use strict";

const contactForm = document.querySelector("#contact-form");

const contactFormControls = document.forms["contact-form"];
const nameControl = contactFormControls["name"];
const emailControl = contactFormControls["email"];
const messageControl = contactFormControls["message"];

const validateEmailFormat = (emailStr) => {
	const atPos = emailStr.lastIndexOf("@");
	const dotPos = emailStr.lastIndexOf(".");

	if (atPos === -1 || dotPos === -1) {
		return false;
	}

	if (atPos > dotPos) {
		return false;
	}

	if (atPos === 0) {
		return false;
	}

	if (dotPos < 3) {
		return false;
	}

	if (emailStr.length - 1 - dotPos === 0) {
		return false;
	}

	return true;
};

const validateEmail = (emailStr) => {
	const result = { valid: false, errMsg: "Error en email: " };

	if (emailStr === "") {
		result.errMsg += "Campo vacio.";
	} else if (!validateEmailFormat(emailStr)) {
		result.errMsg += "Formato incorrecto. Use 'ejemplo@mail.com'";
	} else {
		result.valid = true;
	}

	return result;
};

contactForm.addEventListener("submit", (e) => {
	const nameVal = nameControl.value;
	if (nameVal === "") {
		alert("Por favor, llene su nombre");
		e.preventDefault();
		return false;
	}

	const emailVal = emailControl.value;
	const emailResult = validateEmail(emailVal);
	if (!emailResult.valid) {
		alert(emailResult.errMsg);
		e.preventDefault();
		return false;
	}

	const messageVal = messageControl.value;
	if (messageVal === "") {
		alert("Por favor, no deje el campo de mensaje vacio.");
		e.preventDefault();
		return false;
	}

	alert("Perfecto, me pondré en contacto contigo pronto. Hasta luego!");
	return true;
});
