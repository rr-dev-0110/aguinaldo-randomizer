# 🎄 Aguinaldo Randomizer (The "Rigged" Gift Game)

A fun, interactive web application designed for *Ninongs* and *Ninangs* to gamify giving Christmas cash gifts (*Aguinaldo*). It creates the illusion of a high-stakes randomizer, but the odds are secretly controlled!

## 🎮 How it Works (The Logic)
The randomizer spins through **₱50**, **₱100**, and **₱500** rapidly for 5 seconds. However, the result is decided before the wheel even stops:

* **₱500:** The "Bait." It appears frequently during the spin to excite the player, but **it will never be chosen** as the final result.
* **₱100:** The "Lucky Jackpot." It has a **10% chance** of winning. Once won, it locks itself so it cannot be won again in the same session.
* **₱50:** The "Default." This is the result 90% of the time (or 100% if the lucky jackpot was already won).

## ✨ Features
* **Suspenseful Audio:** Plays tension music for 5 seconds while spinning.
* **Celebration Effects:** Plays a victory sound when the result is revealed.
* **Responsive Design:** Works perfectly on Mobile Phones, Tablets, and Laptops.
* **Visuals:** Christmas-themed background with falling snow animation and flashing gold text.

## 🚀 How to Run
1.  Clone this repository.
2.  Ensure you have your audio files ready in the root folder:
    * `music.mp3` (Suspense music)
    * `win.mp3` (Celebration sound)
3.  Open `index.html` in any web browser.
4.  Connect your device to a TV or big screen for maximum fun!

## 🛠️ Tech Stack
* HTML5
* CSS3 (Animations & Responsive Layout)
* JavaScript (Game Logic & Audio Control)

---
*Happy Holidays! Mabuhay ang mga Ninong at Ninang!* 🎅
