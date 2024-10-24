document.addEventListener('DOMContentLoaded', function () {

   
    const namePlaceholder = document.getElementById('namePlaceholder');
    const userName = prompt("Please enter your name:");
    if (userName) {
        namePlaceholder.textContent = userName;
    }


    const form = document.getElementById('contactForm');
    const output = document.getElementById('formOutput');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.getElementById('gender').value;
        const message = document.getElementById('message').value;

        output.innerHTML = `
            <p>Name: ${name}</p>
            <p>Birthdate: ${birthdate}</p>
            <p>Gender: ${gender}</p>
            <p>Message: ${message}</p>
        `;
    });

   
    function responsiveDesign() {
        let screenWidth = window.innerWidth;

       
        const nav = document.querySelector("nav");
        const logo = document.querySelector(".logo img");
        const welcomeSection = document.querySelector(".welcome");
        const facilities = document.querySelectorAll(".facility");

        if (screenWidth <= 768) {  
           
            nav.style.flexDirection = "column";  
            nav.style.textAlign = "center";  

            logo.style.maxWidth = "150px";  

            
            welcomeSection.style.padding = "10px";
            welcomeSection.style.fontSize = "14px";

            // Ubah tampilan skills menjadi satu kolom
            facilities.forEach(facility => {
                facility.style.width = "100%";
                facility.style.marginBottom = "20px";
            });

        } else {  
            nav.style.flexDirection = "row";
            nav.style.textAlign = "left";

            logo.style.maxWidth = "200px";  

            welcomeSection.style.padding = "20px";
            welcomeSection.style.fontSize = "18px";

            
            facilities.forEach(facility => {
                facility.style.width = "30%";
                facility.style.marginBottom = "0";
            });
        }
    }


    
    responsiveDesign();
    window.addEventListener("resize", responsiveDesign);

   
    const infoBox = document.querySelector(".info-box");
    infoBox.style.transition = "all 0.5s ease";

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
            infoBox.style.border = "2px solid #FF5722";  
        } else {
            infoBox.style.border = "2px solid #000";  
        }
    });
    
   
    infoBox.style.transition = "border 1s ease-in-out, box-shadow 1s ease-in-out";
    
    infoBox.addEventListener("mouseover", function() {
        infoBox.style.border = "4px solid #4CAF50";  
        infoBox.style.boxShadow = "0 0 15px rgba(76, 175, 80, 0.7)";  
    });
    
    infoBox.addEventListener("mouseout", function() {
        infoBox.style.border = "2px solid #000";  
        infoBox.style.boxShadow = "none";
    });

    
    const formInputs = document.querySelectorAll("input, textarea, select");
    formInputs.forEach(input => {
        input.style.transition = "border 0.3s ease-in-out";

        input.addEventListener("focus", function() {
            input.style.border = "2px solid #2196F3";  
        });

        input.addEventListener("blur", function() {
            input.style.border = "1px solid #ccc";  
        });
    });

  
    const skillImages = document.querySelectorAll(".facility img");
    skillImages.forEach(img => {
        img.style.opacity = "0";  
        img.style.transition = "opacity 2s ease-in-out";  
        setTimeout(() => {
            img.style.opacity = "1"; 
        }, 500);
    });

});
