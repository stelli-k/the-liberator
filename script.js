
/* =========================================
   1. REKLAMNÉ OKIENKO THE LIBERATOR PREMIUM
   ========================================= */

   const ad = document.getElementById("premium-ad");
   const closeAd = document.getElementById("close-ad");
   const dismissAd = document.getElementById("dismiss-ad");
   
   if (ad && closeAd && dismissAd) {
       const adTimer = setTimeout(function() {
           ad.hidden = false;
       }, 30000);
   
       function hideAd() {
           ad.hidden = true;
           clearTimeout(adTimer);
       }
   
       closeAd.addEventListener("click", hideAd);
       dismissAd.addEventListener("click", hideAd);
   
       ad.addEventListener("click", function(event) {
           if (event.target === ad) {
               hideAd();
           }
       });
   }
   
   
   /* =========================================
      2. FORMULÁR PREDPLATNÉHO
      ========================================= */
   
   const subscriptionForm =
       document.getElementById("subscription-form");
   
   if (subscriptionForm) {
       subscriptionForm.addEventListener("submit", function(event) {
           event.preventDefault();
   
           window.location.href = "overenie.html";
       });
   }
   
   
   /* =========================================
      3. OVEROVACÍ KVÍZ
      ========================================= */
   
   const verificationForm =
       document.getElementById("verification-form");
   
   if (verificationForm) {
       verificationForm.addEventListener("submit", function(event) {
           event.preventDefault();
   
           const selectedAnswer = document.querySelector(
               'input[name="motto-answer"]:checked'
           );
   
           const feedback =
               document.getElementById("quiz-feedback");
   
           if (!selectedAnswer) {
               feedback.textContent = "Najprv vyberte odpoveď.";
               return;
           }
   
           if (selectedAnswer.value === "correct") {
               feedback.textContent =
                   "Správne! Vítame vás medzi podporovateľmi The Liberator.";
   
               // Zapamätáme si úspešné dokončenie kvízu.
               localStorage.setItem("liberatorSubscriber", "true");
   
               setTimeout(function() {
                   window.location.href = "potvrdenie.html";
               }, 1500);
   
           } else {
               feedback.textContent =
                   "Nesprávna odpoveď. Vráťte sa keď si to rozmyslíte.";
           }
       });
   }
   
   
   /* =========================================
      4. ZAMKNUTIE A ODOMKNUTIE VIDEA
      ========================================= */
   
   const garrisonVideo =
       document.getElementById("garrison-video");
   
   const videoLock =
       document.getElementById("video-lock");
   
   if (garrisonVideo && videoLock) {
   
       function updateVideoAccess() {
           const isSubscriber =
               localStorage.getItem("liberatorSubscriber") === "true";
   
           videoLock.hidden = isSubscriber;
           garrisonVideo.controls = isSubscriber;
   
           if (!isSubscriber) {
               garrisonVideo.pause();
           }
       }
   
       updateVideoAccess();
   
       // Ak sa niekto pokúsi spustiť zamknuté video,
       // prehrávanie sa zastaví.
       garrisonVideo.addEventListener("play", function() {
           const isSubscriber =
               localStorage.getItem("liberatorSubscriber") === "true";
   
           if (!isSubscriber) {
               garrisonVideo.pause();
               videoLock.hidden = false;
           }
       });
   }

/* =========================================
   5. TAJNÁ OTÁZKA O HARRIET TUBMANOVEJ
   ========================================= */

   const harrietForm = document.getElementById("harriet-form");

   if (harrietForm) {
       harrietForm.addEventListener("submit", function(event) {
           event.preventDefault();
   
           const selectedAnswer = document.querySelector(
               'input[name="harriet-answer"]:checked'
           );
   
           const feedback =
               document.getElementById("harriet-feedback");
   
           if (!selectedAnswer) {
               feedback.textContent = "Najprv vyberte odpoveď.";
               return;
           }
   
           if (selectedAnswer.value === "correct") {
               feedback.textContent =
                   "Správne! Vaša ďalšia cesta sa začína tu.";
   
               setTimeout(function() {
                   window.location.href = "underground-railroad.html";
               }, 1200);
   
           } else {
               feedback.textContent =
                   "Táto stopa vás nikam nevedie. trapaas";
           }
       });
   }
      