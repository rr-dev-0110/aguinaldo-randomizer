// --- CONFIGURATION ---
const values = [50, 100, 500];
let has100BeenWon = false; 
const luckyChance = 0.10; // 10% chance for 100

// --- ELEMENTS ---
const resultBox = document.getElementById('result-box');
const msgBox = document.getElementById('message');
const btn = document.getElementById('spinBtn');

// Audio Elements
const spinAudio = document.getElementById('spinMusic');
const winAudio = document.getElementById('winMusic');

// --- EVENT LISTENER ---
btn.addEventListener('click', spinWheel);

function spinWheel() {
    // 1. Reset UI
    btn.disabled = true;
    btn.innerText = "Spinning...";
    msgBox.innerText = "Wait lang... Pinapa-init pa ang 500! 🔥";
    
    // 2. Reset and Play Spin Music
    winAudio.pause();
    winAudio.currentTime = 0;
    
    spinAudio.currentTime = 0;
    spinAudio.play().catch(e => console.log("Audio error:", e));

    let counter = 0;
    
    // --- TIMING (approx 12 seconds) ---
    // 50ms speed * 240 ticks = 12000ms (12 secs)
    let speed = 50; 
    let maxSpins = 240; 

    // 3. The Animation Loop
    const interval = setInterval(() => {
        const randomVisual = values[Math.floor(Math.random() * values.length)];
        
        // Show random numbers
        resultBox.innerHTML = `<span class="currency">₱</span>${randomVisual}`;
        
        // Visual excitement (Yellow for 500)
        if(randomVisual === 500) {
            resultBox.style.color = "#ffeb3b"; 
            resultBox.style.transform = "scale(1.1)"; 
        } else {
            resultBox.style.color = "#fff";
            resultBox.style.transform = "scale(1)";
        }

        counter++;

        // Change text halfway for suspense
        if (counter === 100) {
             msgBox.innerText = "Malapit na! Kaya ba ang 500?? 😱";
        }

        // 4. Stop Animation
        if (counter > maxSpins) {
            clearInterval(interval);
            finalizeResult();
        }
    }, speed);
}

function finalizeResult() {
    let finalAmount = 50; 
    const randomChance = Math.random(); 

    // 5. Rigged Logic (Calculates the winner)
    if (!has100BeenWon && randomChance < luckyChance) {
        finalAmount = 100;
        has100BeenWon = true; 
    } 
    
    // 6. Stop Spin Music -> Play Win Music
    spinAudio.pause();
    winAudio.play().catch(e => console.log("Win audio error:", e));

    // 7. Display Final Result
    resultBox.style.transform = "scale(1)";
    
    if (finalAmount === 100) {
        resultBox.innerHTML = `<span class="currency">₱</span>${finalAmount}`;
        resultBox.style.color = "#ffeb3b";
        msgBox.innerText = "WOW! ANG SWERTE! ONE TIME ONLY! 🎉";
    } else {
        resultBox.innerHTML = `<span class="currency">₱</span>${finalAmount}`;
        resultBox.style.color = "#fff";
        msgBox.innerText = "Merry Christmas! Thank you! 😂";
    }

    // Re-enable button
    btn.disabled = false;
    btn.innerText = "SPIN ULIT";
}