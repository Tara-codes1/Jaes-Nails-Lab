const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const service = document.getElementById("service").value;
    const length = document.getElementById("length").value;
    const notes = document.getElementById("notes").value;

    const message =
`Hello Jae's Nails Lab! 💅

I'd like to book an appointment.

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}

💅 Service: ${service}

📏 Length: ${length}

📅 Date: ${date}

🕒 Time: ${time}

📝 Additional Notes:
${notes}`;

    // Show confirmation
    alert("🎉 Thank you! You are now being redirected to WhatsApp to complete your booking.");


    const phoneNumber = "2349054451997";

    const whatsappURL =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        window.open(whatsappURL, "_blank");
    }, 800);

});
