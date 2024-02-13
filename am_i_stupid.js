let rate = 0;

const button = document.querySelector('.add-stars');
const ratingDisplay = document.querySelector('#value');
const starDisplay = document.querySelector('#stars');
const minus = document.querySelector('.minus-stars')
const button2 = document.querySelector('#Alternative .add-stars')
const ratingDisplay2 = document.querySelector('#Alternative #value');
const starDisplay2 = document.querySelector('#Alternative #stars');
const minus2 = document.querySelector('#Alternative .minus-stars')

        button.addEventListener('click', function() {
            // Increment the rating
            if (rate< 5){
                rate++;
            }

            

    
            ratingDisplay.textContent = rate;
            
            starDisplay.innerHTML = '';

            // Add stars based on the current rate
            for (let i = 0; i < rate; i++) {
                const starImg = document.createElement('img');
                starImg.src = 'media/star.png'; // Adjust the path as necessary
                starImg.height = 50; // Set the height
                starImg.width = 50; // Set the width
                starDisplay.appendChild(starImg); // Append the new star to the display
            }
            
        });

        minus.addEventListener('click', function(){
            if (rate > 0){
                rate--;
            }

            ratingDisplay.textContent = rate;

            starDisplay.innerHTML = '';

    // Re-add stars based on the new rate
    for (let i = 0; i < rate; i++) {
        const starImg = document.createElement('img');
        starImg.src = 'media/star.png'; // Adjust the path as necessary
        starImg.height = 50; // Set the height
        starImg.width = 50; // Set the width
        starDisplay.appendChild(starImg); // Append the new star to the display
    }

        })

        function openTab(tabName) {
            // Hide all tabs
            const tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => {
            tab.style.display = 'none';
            });

            // Show the selected tab
            const selectedTab = document.getElementById(tabName);
            if (selectedTab) {
                 selectedTab.style.display = 'block';
            }
}

        function nextChoice(){

        }

        button2.addEventListener('click', function() {
            // Increment the rating
            if (rate< 5){
                rate++;
            }

            

    
            ratingDisplay2.textContent = rate;
            
            starDisplay2.innerHTML = '';

            // Add stars based on the current rate
            for (let i = 0; i < rate; i++) {
                const starImg = document.createElement('img');
                starImg.src = 'media/star.png'; // Adjust the path as necessary
                starImg.height = 50; // Set the height
                starImg.width = 50; // Set the width
                starDisplay2.appendChild(starImg); // Append the new star to the display
            }
            
        });

        minus2.addEventListener('click', function(){
            if (rate > 0){
                rate--;
            }

            ratingDisplay2.textContent = rate;

            starDisplay2.innerHTML = '';
            for (let i = 0; i < rate; i++) {
                const starImg = document.createElement('img');
                starImg.src = 'media/star.png'; // Adjust the path as necessary
                starImg.height = 50; // Set the height
                starImg.width = 50; // Set the width
                starDisplay2.appendChild(starImg); // Append the new star to the display
            }
        })

        const images = [
            'media/albums/Blonde_-_Frank_Ocean.jpeg',
            'media/albums/Clairo_-_Immunity.png',
            'media/albums/FayeWebster_AtlantaMillionairesClub.jpg.webp',
            // Add as many images as you like
        ];


        let lastIndex = -1;

        function displayRandomImage() {
            const imageContainer = document.getElementById('imageContainer');
            let randomIndex;
        
            // Ensure the new random index is different from the last one
            do {
                randomIndex = Math.floor(Math.random() * images.length);
            } while(images.length > 1 && randomIndex === lastIndex);
        
            lastIndex = randomIndex; // Update the lastIndex with the new index
        
            const selectedImage = images[randomIndex];
            imageContainer.src = selectedImage;
        }

        const images2 = [
            'media/albums/Drake_-_For_All_The_Dogs.png',
            'media/albums/Graduation_(album).jpg',
            'media/albums/The_life_of_pablo_alternate.jpg',
            'media/albums/Travis Scott - Utopia.jpeg',
            // Add as many images as you like
        ];

        let lastIndex2 = -1;

        function displayRandomImage2() {
            const imageContainer2 = document.getElementById('imageContainer2');
            let randomIndex2;
        
            // Ensure the new random index is different from the last one
            do {
                randomIndex2 = Math.floor(Math.random() * images2.length);
            } while(images2.length > 1 && randomIndex2 === lastIndex2);
        
            lastIndex2 = randomIndex2; // Update the lastIndex with the new index
        
            const selectedImage2 = images2[randomIndex2];
            imageContainer2.src = selectedImage2;
        }