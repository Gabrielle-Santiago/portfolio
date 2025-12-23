const container = document.getElementById("grid-container");
const contentElements = document.querySelectorAll("h1, h2, p, a, img");

function createTiles() {
    const cols = Math.ceil(window.innerWidth / 60);
    const rows = Math.ceil(window.innerHeight / 60);
    const total = cols * rows;

    container.innerHTML = "";

    for (let i = 0; i < total; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
}

createTiles();
window.addEventListener("resize", createTiles);

document.addEventListener("mousemove", (e) => {
    const tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
        const rect = tile.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        tile.classList.toggle("active", distance < 80);
    });
});

document.addEventListener("mousemove", (e) => {
    const el = document.elementFromPoint(e.clientX, e.clientY);

    if (el && (el.tagName === "P" || el.tagName === "H1" || el.tagName === "H2" || el.tagName === "A")) {
        el.style.color = "white";
    } 
});

function updateTileVisibility() {
    const tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
        const tileRect = tile.getBoundingClientRect();
        let isBehindText = false;

        contentElements.forEach(el => {
            const elRect = el.getBoundingClientRect();

            const overlapping =
                tileRect.left < elRect.right &&
                tileRect.right > elRect.left &&
                tileRect.top < elRect.bottom &&
                tileRect.bottom > elRect.top;

            if (overlapping) {
                isBehindText = true;
            }
        });

        tile.style.opacity = isBehindText ? "0.1" : "1";
    });
}

document.addEventListener("mousemove", updateTileVisibility);
window.addEventListener("resize", updateTileVisibility);
setTimeout(updateTileVisibility, 300);
