// State details array 
const stateDetails = [
    {
        "id": "AL",
        "name": "Alabama",
        "population": "5,108,468",
        "capital": "Montgomery",
        "bird": {
            "name": "Yellowhammer",
            "image": "assets/images/alabama-bird.png"
        },
        "flower": {
            "name": "Camellia",
            "image": "assets/images/alabama-flower.png"
        },
        "flagImage": "assets/images/alabama-flag.png"
    },
    {
        "id": "AK",
        "name": "Alaska",
        "population": "733,406",
        "capital": "Juneau",
        "bird": {
            "name": "Willow Ptarmigan",
            "image": "images/alaska-bird.png"
        },
        "flower": {
            "name": "Forget Me Not",
            "image": "images/alaska-flower.png"
        },
        "flagImage": "images/alaska-flag.png"
    },
    {
        "id": "AZ",
        "name": "Arizona",
        "population": "7,431,344",
        "capital": "Phoenix",
        "bird": {
            "name": "Cactus Wren",
            "image": "images/arizona-bird.png"
        },
        "flower": {
            "name": "Saguaro cactus blossom",
            "image": "images/arizona-flower.png"
        },
        "flagImage": "images/arizona-flag.png"
    },
    {
        "id": "AR",
        "name": "Arkansas",
        "population": "3,067,732",
        "capital": "Little Rock",
        "bird": {
            "name": "Mockingbird",
            "image": "images/arkansas-bird.png"
        },
        "flower": {
            "name": "Apple blossom",
            "image": "images/arkansas-flower.png"
        },
        "flagImage": "images/arkansas-flag.png"
    },
    {
        "id": "CA",
        "name": "California",
        "population": "38,965,193",
        "capital": "Sacramento",
        "bird": {
            "name": "California Valley Quail",
            "image": "images/california-bird.png"
        },
        "flower": {
            "name": "Golden poppy",
            "image": "images/california-flower.png"
        },
        "flagImage": "images/california-flag.png"
    },
    {
        "id": "CO",
        "name": "Colorado",
        "population": "5,877,610",
        "capital": "Denver",
        "bird": {
            "name": "Lark Bunting",
            "image": "images/colorado-bird.png"
        },
        "flower": {
            "name": "Rocky Mountain columbine",
            "image": "images/colorado-flower.png"
        },
        "flagImage": "images/colorado-flag.png"
    },
    {
        "id": "CT",
        "name": "Connecticut",
        "population": "3,617,176",
        "capital": "Hartford",
        "bird": {
            "name": "Robin",
            "image": "images/connecticut-bird.png"
        },
        "flower": {
            "name": "Mountain laurel",
            "image": "images/connecticut-flower.png"
        },
        "flagImage": "images/connecticut-flag.png"
    },
    {
        "id": "DE",
        "name": "Delaware",
        "population": "1,031,890",
        "capital": "Dover",
        "bird": {
            "name": "Blue Hen Chicken",
            "image": "images/delaware-bird.png"
        },
        "flower": {
            "name": "Peach blossom",
            "image": "images/delaware-flower.png"
        },
        "flagImage": "images/delaware-flag.png"
    },
    {
        "id": "FL",
        "name": "Florida",
        "population": "22,610,726",
        "capital": "Tallahassee",
        "bird": {
            "name": "Mockingbird",
            "image": "images/florida-bird.png"
        },
        "flower": {
            "name": "Orange blossom",
            "image": "images/florida-flower.png"
        },
        "flagImage": "images/florida-flag.png"
    },
    {
        "id": "GA",
        "name": "Georgia",
        "population": "11,029,227",
        "capital": "Atlanta",
        "bird": {
            "name": "Brown Thrasher",
            "image": "images/georgia-bird.png"
        },
        "flower": {
            "name": "Cherokee rose",
            "image": "images/georgia-flower.png"
        },
        "flagImage": "images/georgia-flag.png"
    },
    {
        "id": "HI",
        "name": "Hawaii",
        "population": "1,435,138",
        "capital": "Honolulu",
        "bird": {
            "name": "Nene",
            "image": "images/hawaii-bird.png"
        },
        "flower": {
            "name": "Hibiscus",
            "image": "images/hawaii-flower.png"
        },
        "flagImage": "images/hawaii-flag.png"
    },
    {
        "id": "ID",
        "name": "Idaho",
        "population": "1,964,726",
        "capital": "Boise",
        "bird": {
            "name": "Mountain Bluebird",
            "image": "images/idaho-bird.png"
        },
        "flower": {
            "name": "Syringa",
            "image": "images/idaho-flower.png"
        },
        "flagImage": "images/idaho-flag.png"
    },
    {
        "id": "IL",
        "name": "Illinois",
        "population": "12,549,689",
        "capital": "Springfield",
        "bird": {
            "name": "Cardinal",
            "image": "images/illinois-bird.png"
        },
        "flower": {
            "name": "Violet",
            "image": "images/illinois-flower.png"
        },
        "flagImage": "images/illinois-flag.png"
    },
    {
        "id": "IN",
        "name": "Indiana",
        "population": "6,862,199",
        "capital": "Indianapolis",
        "bird": {
            "name": "Cardinal",
            "image": "images/indiana-bird.png"
        },
        "flower": {
            "name": "Peony",
            "image": "images/indiana-flower.png"
        },
        "flagImage": "images/indiana-flag.png"
    },
    {
        "id": "IA",
        "name": "Iowa",
        "population": "3,207,004",
        "capital": "Des Moines",
        "bird": {
            "name": "Eastern Goldfinch",
            "image": "images/iowa-bird.png"
        },
        "flower": {
            "name": "Wild rose",
            "image": "images/iowa-flower.png"
        },
        "flagImage": "images/iowa-flag.png"
    },
    {
        "id": "KS",
        "name": "Kansas",
        "population": "2,940,546",
        "capital": "Topeka",
        "bird": {
            "name": "Western Meadowlark",
            "image": "images/kansas-bird.png"
        },
        "flower": {
            "name": "Sunflower",
            "image": "images/kansas-flower.png"
        },
        "flagImage": "images/kansas-flag.png"
    },
    {
        "id": "KY",
        "name": "Kentucky",
        "population": "4,526,154",
        "capital": "Frankfort",
        "bird": {
            "name": "Cardinal",
            "image": "images/kentucky-bird.png"
        },
        "flower": {
            "name": "Goldenrod",
            "image": "images/kentucky-flower.png"
        },
        "flagImage": "images/kentucky-flag.png"
    },
    {
        "id": "LA",
        "name": "Louisiana",
        "population": "4,573,749",
        "capital": "Baton Rouge",
        "bird": {
            "name": "Eastern Brown Pelican",
            "image": "images/louisiana-bird.png"
        },
        "flower": {
            "name": "Magnolia",
            "image": "images/louisiana-flower.png"
        },
        "flagImage": "images/louisiana-flag.png"
    },
    {
        "id": "ME",
        "name": "Maine",
        "population": "1,395,722",
        "capital": "Augusta",
        "bird": {
            "name": "Chickadee",
            "image": "images/maine-bird.png"
        },
        "flower": {
            "name": "White pine cone and tassel",
            "image": "images/maine-flower.png"
        },
        "flagImage": "images/maine-flag.png"
    },
    {
        "id": "MD",
        "name": "Maryland",
        "population": "6,180,253",
        "capital": "Annapolis",
        "bird": {
            "name": "Baltimore Oriole",
            "image": "images/maryland-bird.png"
        },
        "flower": {
            "name": "Black-eyed susan",
            "image": "images/maryland-flower.png"
        },
        "flagImage": "images/maryland-flag.png"
    },
    {
        "id": "MA",
        "name": "Massachusetts",
        "population": "7,001,399",
        "capital": "Boston",
        "bird": {
            "name": "Chickadee",
            "image": "images/massachusetts-bird.png"
        },
        "flower": {
            "name": "Mayflower",
            "image": "images/massachusetts-flower.png"
        },
        "flagImage": "images/massachusetts-flag.png"
    },
    {
        "id": "MI",
        "name": "Michigan",
        "population": "10,037,261",
        "capital": "Lansing",
        "bird": {
            "name": "American Robin",
            "image": "images/michigan-bird.png"
        },
        "flower": {
            "name": "Apple blossom",
            "image": "images/michigan-flower.png"
        },
        "flagImage": "images/michigan-flag.png"
    },
    {
        "id": "MN",
        "name": "Minnesota",
        "population": "5,737,915",
        "capital": "Saint Paul",
        "bird": {
            "name": "Common Loon",
            "image": "images/minnesota-bird.png"
        },
        "flower": {
            "name": "Lady slipper",
            "image": "images/minnesota-flower.png"
        },
        "flagImage": "images/minnesota-flag.png"
    },
    {
        "id": "MS",
        "name": "Mississippi",
        "population": "2,939,690",
        "capital": "Jackson",
        "bird": {
            "name": "Mockingbird",
            "image": "images/mississippi-bird.png"
        },
        "flower": {
            "name": "evergreen magnolia",
            "image": "images/mississippi-flower.png"
        },
        "flagImage": "images/mississippi-flag.png"
    },
    {
        "id": "MO",
        "name": "Missouri",
        "population": "6,196,156",
        "capital": "Jefferson City",
        "bird": {
            "name": "Bluebird",
            "image": "images/missouri-bird.png"
        },
        "flower": {
            "name": "Hawthorn",
            "image": "images/missouri-flower.png"
        },
        "flagImage": "images/missouri-flag.png"
    },
    {
        "id": "MT",
        "name": "Montana",
        "population": "1,132,812",
        "capital": "Helena",
        "bird": {
            "name": "Western Meadowlark",
            "image": "images/montana-bird.png"
        },
        "flower": {
            "name": "Bitterroot",
            "image": "images/montana-flower.png"
        },
        "flagImage": "images/montana-flag.png"
    },
    {
        "id": "NE",
        "name": "Nebraska",
        "population": "1,978,379",
        "capital": "Lincoln",
        "bird": {
            "name": "Western Meadowlark",
            "image": "images/nebraska-bird.png"
        },
        "flower": {
            "name": "Goldenrod",
            "image": "images/nebraska-flower.png"
        },
        "flagImage": "images/nebraska-flag.png"
    },
    {
        "id": "NV",
        "name": "Nevada",
        "population": "3,194,176",
        "capital": "Carson City",
        "bird": {
            "name": "Mountain Bluebird",
            "image": "images/nevada-bird.png"
        },
        "flower": {
            "name": "Sagebrush",
            "image": "images/nevada-flower.png"
        },
        "flagImage": "images/nevada-flag.png"
    },
    {
        "id": "NH",
        "name": "New Hampshire",
        "population": "1,402,054",
        "capital": "Concord",
        "bird": {
            "name": "Purple Finch",
            "image": "images/new-hampshire-bird.png"
        },
        "flower": {
            "name": "Purple lilac",
            "image": "images/new-hampshire-flower.png"
        },
        "flagImage": "images/new-hampshire-flag.png"
    },
    {
        "id": "NJ",
        "name": "New Jersey",
        "population": "9,290,841",
        "capital": "Trenton",
        "bird": {
            "name": "Eastern Goldfinch",
            "image": "images/new-jersey-bird.png"
        },
        "flower": {
            "name": "Purple violet",
            "image": "images/new-jersey-flower.png"
        },
        "flagImage": "images/new-jersey-flag.png"
    },
    {
        "id": "NM",
        "name": "New Mexico",
        "population": "2,114,371",
        "capital": "Santa Fe",
        "bird": {
            "name": "Roadrunner",
            "image": "images/new-mexico-bird.png"
        },
        "flower": {
            "name": "Yucca",
            "image": "images/new-mexico-flower.png"
        },
        "flagImage": "images/new-mexico-flag.png"
    },
    {
        "id": "NY",
        "name": "New York",
        "population": "19,571,216",
        "capital": "Albany",
        "bird": {
            "name": "Bluebird",
            "image": "images/new-york-bird.png"
        },
        "flower": {
            "name": "Rose",
            "image": "images/new-york-flower.png"
        },
        "flagImage": "images/new-york-flag.png"
    },
    {
        "id": "NC",
        "name": "North Carolina",
        "population": "10,835,491",
        "capital": "Raleigh",
        "bird": {
            "name": "Cardinal",
            "image": "images/north-carolina-bird.png"
        },
        "flower": {
            "name": "Dogwood",
            "image": "images/north-carolina-flower.png"
        },
        "flagImage": "images/north-carolina-flag.png"
    },
    {
        "id": "ND",
        "name": "North Dakota",
        "population": "783,926",
        "capital": "Bismarck",
        "bird": {
            "name": "Western Meadowlark",
            "image": "images/north-dakota-bird.png"
        },
        "flower": {
            "name": "Wild prairie rose",
            "image": "images/north-dakota-flower.png"
        },
        "flagImage": "images/north-dakota-flag.png"
    },
    {
        "id": "OH",
        "name": "Ohio",
        "population": "11,785,935",
        "capital": "Columbus",
        "bird": {
            "name": "Cardinal",
            "image": "images/ohio-bird.png"
        },
        "flower": {
            "name": "Scarlet carnation",
            "image": "images/ohio-flower.png"
        },
        "flagImage": "images/ohio-flag.png"
    },
    {
        "id": "OK",
        "name": "Oklahoma",
        "population": "4,053,824",
        "capital": "Oklahoma City",
        "bird": {
            "name": "Scissor-tailed Flycatcher",
            "image": "images/oklahoma-bird.png"
        },
        "flower": {
            "name": "Mistletoe",
            "image": "images/oklahoma-flower.png"
        },
        "flagImage": "images/oklahoma-flag.png"
    },
    {
        "id": "OR",
        "name": "Oregon",
        "population": "4,233,358",
        "capital": "Salem",
        "bird": {
            "name": "Western Meadowlark",
            "image": "images/oregon-bird.png"
        },
        "flower": {
            "name": "Oregon grape",
            "image": "images/oregon-flower.png"
        },
        "flagImage": "images/oregon-flag.png"
    },
    {
        "id": "PA",
        "name": "Pennsylvania",
        "population": "12,961,683",
        "capital": "Harrisburg",
        "bird": {
            "name": "Ruffed Grouse",
            "image": "images/pennsylvania-bird.png"
        },
        "flower": {
            "name": "Mountain laurel",
            "image": "images/pennsylvania-flower.png"
        },
        "flagImage": "images/pennsylvania-flag.png"
    },
    {
        "id": "RI",
        "name": "Rhode Island",
        "population": "1,095,962",
        "capital": "Providence",
        "bird": {
            "name": "Rhode Island Red",
            "image": "images/rhode-island-bird.png"
        },
        "flower": {
            "name": "Violet",
            "image": "images/rhode-island-flower.png"
        },
        "flagImage": "images/rhode-island-flag.png"
    },
    {
        "id": "SC",
        "name": "South Carolina",
        "population": "5,373,555",
        "capital": "Columbia",
        "bird": {
            "name": "Great Carolina Wren",
            "image": "images/south-carolina-bird.png"
        },
        "flower": {
            "name": "Carolina yellow jessamine",
            "image": "images/south-carolina-flower.png"
        },
        "flagImage": "images/south-carolina-flag.png"
    },
    {
        "id": "SD",
        "name": "South Dakota",
        "population": "919,318",
        "capital": "Pierre",
        "bird": {
            "name": "Ring-necked Pheasant",
            "image": "images/south-dakota-bird.png"
        },
        "flower": {
            "name": "American pasqueflower",
            "image": "images/south-dakota-flower.png"
        },
        "flagImage": "images/south-dakota-flag.png"
    },
    {
        "id": "TN",
        "name": "Tennessee",
        "population": "7,126,489",
        "capital": "Nashville",
        "bird": {
            "name": "Mockingbird",
            "image": "images/tennessee-bird.png"
        },
        "flower": {
            "name": "Iris",
            "image": "images/tennessee-flower.png"
        },
        "flagImage": "images/tennessee-flag.png"
    },
    {
        "id": "TX",
        "name": "Texas",
        "population": "30,503,301",
        "capital": "Austin",
        "bird": {
            "name": "Mockingbird",
            "image": "images/texas-bird.png"
        },
        "flower": {
            "name": "Bluebonnet",
            "image": "images/texas-flower.png"
        },
        "flagImage": "images/texas-flag.png"
    },
    {
        "id": "UT",
        "name": "Utah",
        "population": "3,417,734",
        "capital": "Salt Lake City",
        "bird": {
            "name": "Common American Gull",
            "image": "images/utah-bird.png"
        },
        "flower": {
            "name": "Sego lily",
            "image": "images/utah-flower.png"
        },
        "flagImage": "images/utah-flag.png"
    },
    {
        "id": "VT",
        "name": "Vermont",
        "population": "647,464",
        "capital": "Montpelier",
        "bird": {
            "name": "Hermit Thrush",
            "image": "images/vermont-bird.png"
        },
        "flower": {
            "name": "Red clover",
            "image": "images/vermont-flower.png"
        },
        "flagImage": "images/vermont-flag.png"
    },
    {
        "id": "VA",
        "name": "Virginia",
        "population": "8,715,698",
        "capital": "Richmond",
        "bird": {
            "name": "Cardinal",
            "image": "images/virginia-bird.png"
        },
        "flower": {
            "name": "American dogwood",
            "image": "images/virginia-flower.png"
        },
        "flagImage": "images/virginia-flag.png"
    },
    {
        "id": "WA",
        "name": "Washington",
        "population": "7,812,880",
        "capital": "Olympia",
        "bird": {
            "name": "Willow Goldfinch",
            "image": "images/washington-bird.png"
        },
        "flower": {
            "name": "Coast rhododendron",
            "image": "images/washington-flower.png"
        },
        "flagImage": "images/washington-flag.png"
    },
    {
        "id": "WV",
        "name": "West Virginia",
        "population": "1,770,071",
        "capital": "Charleston",
        "bird": {
            "name": "Cardinal",
            "image": "images/west-virginia-bird.png"
        },
        "flower": {
            "name": "Rhododendron",
            "image": "images/west-virginia-flower.png"
        },
        "flagImage": "images/west-virginia-flag.png"
    },
    {
        "id": "WI",
        "name": "Wisconsin",
        "population": "5,910,955",
        "capital": "Madison",
        "bird": {
            "name": "Robin",
            "image": "images/wisconsin-bird.png"
        },
        "flower": {
            "name": "Wood violet",
            "image": "images/wisconsin-flower.png"
        },
        "flagImage": "images/wisconsin-flag.png"
    },
    {
        "id": "WY",
        "name": "Wyoming",
        "population": "584,057",
        "capital": "Cheyenne",
        "bird": {
            "name": "Western Meadowlark",
            "image": "images/wyoming-bird.png"
        },
        "flower": {
            "name": "Indian paintbrush",
            "image": "images/wyoming-flower.png"
        },
        "flagImage": "images/wyoming-flag.png"
    }
];

// Function to populate the dropdown
function populateDropdown() {
    const dropdown = document.getElementById("states");
    stateDetails.forEach((state) => {
        const option = document.createElement("option");
        option.value = state.id;
        option.textContent = state.name;
        dropdown.appendChild(option);
    });

    // Add event listener to dropdown
    dropdown.addEventListener("change", (event) => {
        const stateId = event.target.value;
        const state = stateDetails.find((s) => s.id === stateId);
        if (state) {
            showStateDetails(state);
        }
    });
}

// Function to handle map clicks and highlights
function addMapEventListeners() {
    const paths = document.querySelectorAll("svg path");

    paths.forEach((path) => {
        // Add hover highlight functionality
        path.addEventListener("mouseenter", () => {
            path.style.fill = "#007BFF"; // Highlight color
        });

        path.addEventListener("mouseleave", () => {
            path.style.fill = ""; // Reset color
        });

        // Add click functionality
        path.addEventListener("click", () => {
            const stateId = path.id;
            const state = stateDetails.find((s) => s.id === stateId);
            if (state) {
                showStateDetails(state);
            }
        });
    });
}

// Function to show state details in the info box
function showStateDetails(state) {
    const infoBox = document.getElementById("info-box");

    // Update the dropdown to match the clicked state
    const dropdown = document.getElementById("states");
    dropdown.value = state.id; // Set the dropdown value to the clicked state's ID

    infoBox.innerHTML = `
    <h2>${state.name}</h2>
    <p><strong>Population:</strong> ${state.population}</p>
    <p><strong>Capital:</strong> ${state.capital}</p>
    <div>
        <h3>State Bird</h3>
        <p>${state.bird.name}</p>
        <img src="${state.bird.image}" alt="${state.bird.name}" />
    </div>
    <div>
        <h3>State Flower</h3>
        <p>${state.flower.name}</p>
        <img src="${state.flower.image}" alt="${state.flower.name}" />
    </div>
    <div>
        <h3>State Flag</h3>
        <img src="${state.flagImage}" alt="Flag of ${state.name}" />
    </div>
    <button id="back-to-map">Back to Map</button>
`;


    // Show info box and hide map
    document.getElementById("map-container").style.display = "none";
    infoBox.style.display = "block";

    // Add event listener for back button
    document.getElementById("back-to-map").addEventListener("click", () => {
        infoBox.style.display = "none";
        document.getElementById("map-container").style.display = "block";

        // Reset the dropdown to the default option
        dropdown.value = ""; // Reset to no state selected
    });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    populateDropdown();
    addMapEventListeners();
});
