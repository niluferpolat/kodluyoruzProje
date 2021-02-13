const CLIENT_ID = "R33AWINCE1OMCEZSQP5YVCZUC5BJTI5LG1PRWSXPV21A4J3W";
const CLIENT_SECRET = "BFNFK5YEV3R3LGLBWMKKXRSSDRULAGOFYSCIDADQH1PPCK0Q";
const urlToFetch = "https://api.foursquare.com/v2/venues/explore?categoryId=4d954af4a243a5684765b473&near="
export const getLocations = (input) => {
    return fetch(`${urlToFetch}=ÇORLU&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=202102010`
    ).then(response => response.json())
        .then(result => result.response.groups[0].items);
};