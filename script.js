function generatePoster() {
    let input = document.getElementById("imageInput");

    if (!input.files[0]) {
        alert("Please upload an image!");
        return;
    }

    let img = document.getElementById("productImage");
    img.src = URL.createObjectURL(input.files[0]);

    document.getElementById("posterSection").classList.remove("hidden");

    document.getElementById("brandName").innerText = "Ritika Garments & Cosmetics";
    document.getElementById("productName").innerText = "Premium Product";
    document.getElementById("mrp").innerText = "MRP: ₹499";
    document.getElementById("desc").innerText = "High Quality Product";
}

function downloadPoster() {
    alert("Download feature activated!");
}

function sharePoster() {
    alert("Share feature activated!");
}
