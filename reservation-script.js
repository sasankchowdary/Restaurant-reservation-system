const hotels=[
    {name:'Fried Chicken Dungeon',rating:'3.9',address:'xyz street'},
    {name:'House of Pizza',rating:'4.2',address:'yzx street'},
    {name:'Meal Box',rating:'4.5',address:'xzy street'},
    {name:'Happy Burger',rating:'4.3',address:'xzy street'},
    {name:'Food Palace',rating:'3.8',address:'north ze street'}
];

const hotelList = document.getElementById('hotelList');
const searchInput = document.getElementById('search');

displayHotels(hotels);

function search(){
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = hotels.filter(hotel =>{
        return hotel.name.toLowerCase().includes(searchTerm);
    });
    displayHotels(filtered);
}

function displayHotels(hotelsToShow){
    hotelList.innerHTML ='';
    
    hotelsToShow.forEach(hotel =>{
        const hotelElement = document.createElement('div');
        hotelElement.classList.add('hotel');
        hotelElement.innerHTML =`
            <h2>${hotel.name}</h2>
            <p>Rating: ${hotel.rating}</p>
            <p>Address: ${hotel.address}</p>
            <button onclick="bookTable('${hotel.name}')">Book a Table</button>
        `;
        hotelList.appendChild(hotelElement);
    });
}

function bookTable(hotelName){
    const date = prompt('Enter the reservation needed date (yyyy-mm-dd):');
    const time = prompt('Enter specific time(hh:mm):');
    const quantity = parseInt(prompt('Enter no of guests:'));

    if(date && time && !isNaN(quantity)){
        alert('Your reservation is confirmed');
        const bookingDetails = {
            hotelName: hotelName,
            date: date,
            time: time,
            quantity: quantity
        };
        displayReservationDetails(bookingDetails);
    }else{
        alert('Please enter valid details');
    }
}

function displayReservationDetails(reservation){
    const bookingDetails =`
    <h2>Reservation Details<h2>
    <p><strong>Restaurant:</strong> ${reservation.hotelName}</p>
    <p><strong>Date:</strong> ${reservation.date}</p>
    <p><strong>Time:</strong> ${reservation.time}</p>
    <p><strong>Guests:</strong> ${reservation.quantity}</p>
    `;
    hotelList.innerHTML = bookingDetails
}