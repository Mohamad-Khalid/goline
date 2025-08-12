import { partnersData } from './partners-data.js';

// Display single partner details (partner.html)
document.addEventListener("DOMContentLoaded", () => {
    const partnerCard = document.getElementById("partner-card");
    if (partnerCard) {
        const urlParams = new URLSearchParams(window.location.search);
        const partnerName = urlParams.get("name")?.toLowerCase();

        const partner = partnersData.find(p => p.name.toLowerCase() === partnerName);

        if (!partner) {
            partnerCard.innerHTML = `<p class="text-red-500">Partner not found.</p>`;
            return;
        }

        partnerCard.innerHTML = `
            <div class="text-center">
                <img src="${partner.image}" alt="${partner.name}" class="mx-auto mb-4 rounded-lg shadow-md">
                <h1 class="text-3xl font-bold mb-4">${partner.name}</h1>
                <p class="text-lg text-gray-600 dark:text-gray-300">${partner.description}</p>
            </div>
        `;
    }
});

// Display all partners list (partners.html)
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".partners-container"); // ✅ use querySelector
    if (container) {
        partnersData.forEach(partner => {
            container.innerHTML += `
                <div>
                    <img src="${partner.image}" 
                         alt="${partner.name}" 
                         class="mb-6 rounded-lg object-cover shadow-md" />
                    <h3 class="text-xl font-semibold text-primary mb-4">${partner.name}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-center max-w-md">
                        ${partner.shortDescription}
                    </p>
                </div>
            `;
        });
    }
});
 