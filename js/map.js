function initMap() {
    const location = { lat: 50.030146, lng: 20.221248 };

    const map = new google.maps.Map(document.getElementById("map"), {zoom: 18, center: location});

    const marker = new google.maps.Marker({position: location, map: map});
}