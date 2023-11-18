// * Random Number Generator
function randomNumber(mode = "default", min = 1, max = 99) {
    let x;
    switch (mode) {
        case "even":
            x = 0;
            break;
        case "odd":
            do {
                x = Math.floor(Math.random() * max + min)
            } while (x % 2 == 0);
            break;
        default:
            x = Math.floor(Math.random() * max + min);
    }
    return x;
}
// * Game container
let container = document.getElementById("wrapper");
// * Bingo cards color
let card_colors = ["#0d6efd", "#6610f2", "#d63384", "#dc3545", "#fd7e14", "#ffc107", "#198754", "#20c997", "#0dcaf0"];
// * Start game
function BINGO(...players) {
    players.forEach(player => {
        // * RANDOM ACTIONS
        let random_color_number = randomNumber("default", 0, card_colors.length);
        let random_color = card_colors[random_color_number];
            card_colors.splice(random_color_number, 1);
        // * CONTAINER
        let card_container = document.createElement("section");
            card_container.className = "bingo-card";
            card_container.style.border = `5px solid ${random_color}`;
        // * HEADER
        let card_header = document.createElement("header");
            card_header.style.backgroundColor = random_color;
            card_header.textContent = player;
        // * FOOTER
        let card_footer = document.createElement("footer");

        for (let i = 0; i < 27; i++) {
            let card_number_item = document.createElement("div");
                card_number_item.className = "bingo-card-item";
                card_number_item.style.backgroundColor = random_color;
                // * CHILD
                card_footer.appendChild(card_number_item);
        }

        let cardNumberItems = card_footer.getElementsByClassName("bingo-card-item");

        for (let i = 0; i < 14; i++) {
            cardNumberItems[i*2].innerHTML = randomNumber("", 1, 99);
            cardNumberItems[i*2].style.border = `1px solid ${random_color}`;
            cardNumberItems[i*2].style.backgroundColor = "transparent";
        }
        // TODO Rastgele tek sayı üretme
        let random_odd_number = randomNumber("odd", 0, 27);
        cardNumberItems[random_odd_number].innerHTML = randomNumber("", 1, 99);
        cardNumberItems[random_odd_number].style.border = `1px solid ${random_color}`;
        cardNumberItems[random_odd_number].style.backgroundColor = "transparent";
        // * CHILD
        card_container.appendChild(card_header);
        card_container.appendChild(card_footer);
        container.appendChild(card_container);
    });
} BINGO("Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7");
