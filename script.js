
let icons = ['unsplash.png',
    'notion.png',
    'intercom.png',
    'descript.png',
    'grammarly.png',
];

let htmlIcons = ""

for (const iconsImage of icons) {

    htmlIcons += `<div class="">
                        <div class="team-container p-3">
                            <img src="images/${iconsImage}" class="team-image">
                        </div>
                    </div>`

}

document.getElementById('teamPlace').innerHTML = htmlIcons;

let benefitHtml = ""

let benefits = [
    'Free Consulting With Expert Saving Money',
    'Online Banking',
    'Investment Report Every Month',
    'Saving Money For The Future',
    'Online Transaction',
];

for (const benefitH of benefits) {

    benefitHtml += `<div class="flex flex-row md:col-span-4 text-center items-center gap-2 pt-3">
                            <img src="images/subtract.png" class="w-auto h-auto object-fit">
                            <p class="text-[16px] md:text-[18px] text-[#A6A6A6]">${benefitH}</p>
                        </div>`

}
document.getElementById('benefitPlace').innerHTML = benefitHtml;



let card1 = ""

let card1Array = [
    '2 Users',
    '2 Files',
    'Public Share & Comments',
    'Chat Support ',
    'New income apps',
];

for (const cards of card1Array) {

    card1 += `   <div class="flex flex-row md:col-span-4 text-center items-center gap-2 p-4">
                                <img src="images/subtract.png" class="max-w-[30px]">
                                <p class="text-[16px] md:text-[18px] ">${cards}</p>
                            </div>`

}

document.getElementById('cardPlace').innerHTML = card1;
document.getElementById('cardPlace2').innerHTML = card1;
document.getElementById('cardPlace3').innerHTML = card1;


let ratings = ""
for (let i = 0; i < 5; i++) {
    ratings += ` <img src="images/start.png" class="">`
}

document.getElementById('ratings1').innerHTML = ratings;
document.getElementById('ratings2').innerHTML = ratings;
