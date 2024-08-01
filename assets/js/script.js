
        document.addEventListener("DOMContentLoaded", function() {
            const selectionPage = document.getElementById('selectionPage');
            const incidentForm = document.getElementById('incidentForm');
            const firstAidForm = document.getElementById('firstAidForm');

            document.querySelectorAll('.button').forEach(button => {
                button.addEventListener('click', function(event) {
                    event.preventDefault();
                    const formType = event.target.getAttribute('href');
                    selectionPage.style.opacity = '0';
                    setTimeout(() => {
                        selectionPage.style.display = 'none';
                        if (formType === 'incidentForm.html') {
                            incidentForm.classList.add('form-container-active');
                        } else if (formType === 'firstAidForm.html') {
                            firstAidForm.classList.add('form-container-active');
                        }
                        selectionPage.style.opacity = '1';
                    }, 300);
                });
            });

            const incidentReportForm = document.getElementById('incidentReportForm');
            const firstAidRegisterForm = document.getElementById('firstAidRegisterForm');

            incidentReportForm.addEventListener('submit', function(event) {
                event.preventDefault();
                alert('Incident Report Form submitted successfully!');
                location.reload();
            });

            firstAidRegisterForm.addEventListener('submit', function(event) {
                event.preventDefault();
                alert('First Aid Register Form submitted successfully!');
                location.reload();
            });

            const steps = document.querySelectorAll('.form-step');
            const nextBtns = document.querySelectorAll('.next-btn');
            const prevBtns = document.querySelectorAll('.prev-btn');
            const returnToSelectionIncident = document.getElementById('returnToSelectionIncident');
            const returnToSelectionFirstAid = document.getElementById('returnToSelectionFirstAid');

            let formStepIndex = 0;

            nextBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    steps[formStepIndex].classList.remove('form-step-active');
                    steps[formStepIndex].style.opacity = '0';
                    formStepIndex++;
                    steps[formStepIndex].classList.add('form-step-active');
                    steps[formStepIndex].style.opacity = '1';
                });
            });

            prevBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    steps[formStepIndex].classList.remove('form-step-active');
                    steps[formStepIndex].style.opacity = '0';
                    formStepIndex--;
                    steps[formStepIndex].classList.add('form-step-active');
                    steps[formStepIndex].style.opacity = '1';
                });
            });

            returnToSelectionIncident.addEventListener('click', () => {
                incidentForm.classList.remove('form-container-active');
                selectionPage.style.display = 'block';
                selectionPage.style.opacity = '1';
            });

            returnToSelectionFirstAid.addEventListener('click', () => {
                firstAidForm.classList.remove('form-container-active');
                selectionPage.style.display = 'block';
                selectionPage.style.opacity = '1';
            });
        });
    