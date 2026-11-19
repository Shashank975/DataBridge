
const excelButton = document.getElementById("excelButton");
const excelSection = document.getElementById("excelSection");
const excelFile = document.getElementById("excelFile");

// Show Excel upload section
excelButton.addEventListener("click", function () {
    excelSection.classList.remove("hidden");

    excelSection.scrollIntoView({
        behavior: "smooth"
    });
});

// Handle selected Excel file
excelFile.addEventListener("change", function () {
    const file = excelFile.files[0];

    if (file) {
        alert("Selected file: " + file.name);
    }
});
