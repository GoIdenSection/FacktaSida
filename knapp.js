document.addEventListener("DOMContentLoaded", function () {
    const colors = ["RebeccaPurple", "lightcoral", "PaleTurquoise", "MediumOrchid", "plum"]; // Lägg till fler färger här vid behov
    let colorIndex = 0;

    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('hidden');

            // Byt färg klick (˶ᵔ ᵕ ᵔ˶)
            this.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length; // Nästa färg ٩(ˊᗜˋ*)و
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.change-bg-btn');
    const colors = ["Lavender", "Thistle", "Orchid", "MediumPurple", "BlueViolet", "DarkOrchid", "RebeccaPurple", "SlateBlue", "PowderBlue", "SkyBlue", "RoyalBlue", "DodgerBlue", "CornflowerBlue"]; 
    let colorIndex = 0;

    btn.addEventListener('click', function () {
        // Byt bakgrundsfärg 
        document.body.style.backgroundColor = colors[colorIndex];

        // Ny färg
        colorIndex = (colorIndex + 1) % colors.length; 
    });
});