let rate = 0;

const button = document.querySelector('.add-stars');
const ratingDisplay = document.querySelector('#value');
const starDisplay = document.querySelector('#stars');
const minus = document.querySelector('.minus-stars')

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

