const stepper = new mdb.Stepper(document.getElementById('stepper-form-example'));

document.getElementById('form-example-next-step').addEventListener('click', () => {
  stepper.nextStep();
});

document.getElementById('form-example-prev-step').addEventListener('click', () => {
  stepper.previousStep();
});