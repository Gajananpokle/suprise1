const correctPassword = "2507";

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const errorMsg = document.getElementById("errorMsg");

    if (input === correctPassword) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        errorMsg.innerText = "Wrong password 😢 Try again.";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    const noBtn = document.getElementById("noBtn");

    // 🎵 Music Toggle
    musicBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });

    // 💌 Scroll
    window.scrollToLetter = function () {
        document.getElementById("letter")
            .scrollIntoView({ behavior: "smooth" });
    };

    // 💖 Surprise
    window.showSurprise = function () {
        const msg = document.getElementById("hiddenMessage");
        msg.classList.remove("hidden");
        msg.innerText = "Shriyuuu..... lots of ghass,hugs n kisses fromm uhh😘🫂🧏💕";
    };

    // 💍 Forever
    window.showForever = function () {
        document.getElementById("foreverBox")
            .classList.remove("hidden");
    };

    window.sayYes = function () {
        const yesMsg = document.getElementById("yesMessage");
        yesMsg.classList.remove("hidden");
        yesMsg.innerText =
            "hihiiii😉🤭..... hate uhh Shriyuuu 💍✨";

        // Heart burst
        for (let i = 0; i < 20; i++) {
            createHeart();
        }
    };

    // 🙈 Moving No Button
    noBtn.addEventListener("mouseover", function () {
        noBtn.style.position = "relative";
        noBtn.style.left = Math.random() * 200 - 100 + "px";
        noBtn.style.top = Math.random() * 200 - 100 + "px";
    });

    // 💕 Floating Hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        document.querySelector(".hearts-container")
            .appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }

    setInterval(createHeart, 1500);

});
