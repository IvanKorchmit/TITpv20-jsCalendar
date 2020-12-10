const calendarButton = document.querySelector(`.btn-start`);
const calendarContainer = document.querySelector(`.container`);
const months = 12;
calendarButton.addEventListener(`click`, (event) => {
    console.log("Clicked");
    for (let index = 0; index < months; index++) {
        console.log(index);
        const calendarDoor = document.createElement(`div`);
        calendarDoor.classList.add('image');

        calendarDoor.style.gridArea = `door${index+1}`;

        const calendarDoorText = document.createElement("div");
        calendarDoorText.classList.add('text');
        calendarDoorText.innerHTML = index+1;

        calendarDoor.appendChild(calendarDoorText);
        calendarContainer.appendChild(calendarDoor);

        let picNumb = index+1;

        let picPath = `./img/pic${picNumb}.jpg`;
        calendarDoorText.addEventListener(`click`,(e) => {
            e.target.parentNode.style.backgroundImage = `url(${picPath})`
            e.target.style.backgroundColor = "#333";
            e.target.style.opacity = "0";
        });


    }
    event.preventDefault();
});