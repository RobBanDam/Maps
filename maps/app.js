function iniciarMap(){
    let coor = {lat: 18.888649572697684, lng: -99.17858034724388}
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coor
    })

    let marker = new google.maps.Marker({
        position: coor,
        map: map
    })
}