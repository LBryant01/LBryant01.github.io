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
            "image": "assets/images/alaska-bird.png"
        },
        "flower": {
            "name": "Forget Me Not",
            "image": "assets/images/alaska-flower.png"
        },
        "flagImage": "assets/images/alaska-flag.png"
    },
    {
        "id": "AZ",
        "name": "Arizona",
        "population": "7,431,344",
        "capital": "Phoenix",
        "bird": {
            "name": "Cactus Wren",
            "image": "assets/images/arizona-bird.png"
        },
        "flower": {
            "name": "Saguaro cactus blossom",
            "image": "assets/images/arizona-flower.png"
        },
        "flagImage": "assets/images/arizona-flag.png"
    },
    {
        "id": "AR",
        "name": "Arkansas",
        "population": "3,067,732",
        "capital": "Little Rock",
        "bird": {
            "name": "Mockingbird",
            "image": "assets/images/arkansas-bird.png"
        },
        "flower": {
            "name": "Apple blossom",
            "image": "assets/images/arkansas-flower.png"
        },
        "flagImage": "assets/images/arkansas-flag.png"
    },
    {
        "id": "CA",
        "name": "California",
        "population": "38,965,193",
        "capital": "Sacramento",
        "bird": {
            "name": "California Valley Quail",
            "image": "assets/images/california-bird.png"
        },
        "flower": {
            "name": "Golden poppy",
            "image": "assets/images/california-flower.png"
        },
        "flagImage": "assets/images/california-flag.png"
    },
    {
        "id": "CO",
        "name": "Colorado",
        "population": "5,877,610",
        "capital": "Denver",
        "bird": {
            "name": "Lark Bunting",
            "image": "assets/images/colorado-bird.png"
        },
        "flower": {
            "name": "Rocky Mountain columbine",
            "image": "assets/images/colorado-flower.png"
        },
        "flagImage": "assets/images/colorado-flag.png"
    },
    {
        "id": "CT",
        "name": "Connecticut",
        "population": "3,617,176",
        "capital": "Hartford",
        "bird": {
            "name": "Robin",
            "image": "assets/images/connecticut-bird.png"
        },
        "flower": {
            "name": "Mountain laurel",
            "image": "assets/images/connecticut-flower.png"
        },
        "flagImage": "assets/images/connecticut-flag.png"
    },
    {
        "id": "DE",
        "name": "Delaware",
        "population": "1,031,890",
        "capital": "Dover",
        "bird": {
            "name": "Blue Hen Chicken",
            "image": "assets/images/delaware-bird.png"
        },
        "flower": {
            "name": "Peach blossom",
            "image": "assets/images/delaware-flower.png"
        },
        "flagImage": "assets/images/delaware-flag.png"
    },
    {
        "id": "FL",
        "name": "Florida",
        "population": "22,610,726",
        "capital": "Tallahassee",
        "bird": {
            "name": "Mockingbird",
            "image": "assets/images/florida-bird.png"
        },
        "flower": {
            "name": "Orange blossom",
            "image": "assets/images/florida-flower.png"
        },
        "flagImage": "assets/images/florida-flag.png"
    },
    {
        "id": "GA",
        "name": "Georgia",
        "population": "11,029,227",
        "capital": "Atlanta",
        "bird": {
            "name": "Brown Thrasher",
            "image": "assets/images/georgia-bird.png"
        },
        "flower": {
            "name": "Cherokee rose",
            "image": "assets/images/georgia-flower.png"
        },
        "flagImage": "assets/images/georgia-flag.png"
    },
    {
        "id": "HI",
        "name": "Hawaii",
        "population": "1,435,138",
        "capital": "Honolulu",
        "bird": {
            "name": "Nene",
            "image": "assets/images/hawaii-bird.png"
        },
        "flower": {
            "name": "Hibiscus",
            "image": "assets/images/hawaii-flower.png"
        },
        "flagImage": "assets/images/hawaii-flag.png"
    },
    {
        "id": "ID",
        "name": "Idaho",
        "population": "1,964,726",
        "capital": "Boise",
        "bird": {
            "name": "Mountain Bluebird",
            "image": "assets/images/idaho-bird.png"
        },
        "flower": {
            "name": "Syringa",
            "image": "assets/images/idaho-flower.png"
        },
        "flagImage": "assets/images/idaho-flag.png"
    },
    {
        "id": "IL",
        "name": "Illinois",
        "population": "12,549,689",
        "capital": "Springfield",
        "bird": {
            "name": "Cardinal",
            "image": "assets/images/illinois-bird.png"
        },
        "flower": {
            "name": "Violet",
            "image": "assets/images/illinois-flower.png"
        },
        "flagImage": "assets/images/illinois-flag.png"
    },
    {
        "id": "IN",
        "name": "Indiana",
        "population": "6,862,199",
        "capital": "Indianapolis",
        "bird": {
            "name": "Cardinal",
            "image": "assets/images/indiana-bird.png"
        },
        "flower": {
            "name": "Peony",
            "image": "assets/images/indiana-flower.png"
        },
        "flagImage": "assets/images/indiana-flag.png"
    },
    {
        "id": "IA",
        "name": "Iowa",
        "population": "3,207,004",
        "capital": "Des Moines",
        "bird": {
            "name": "Eastern Goldfinch",
            "image": "assets/images/iowa-bird.png"
        },
        "flower": {
            "name": "Wild rose",
            "image": "assets/images/iowa-flower.png"
        },
        "flagImage": "assets/images/iowa-flag.png"
    },
    {
        "id": "KS",
        "name": "Kansas",
        "population": "2,940,546",
        "capital": "Topeka",
        "bird": {
            "name": "Western Meadowlark",
            "image": "assets/images/kansas-bird.png"
        },
        "flower": {
            "name": "Sunflower",
            "image": "assets/images/kansas-flower.png"
        },
        "flagImage": "assets/images/kansas-flag.png"
    },
    {
        "id": "KY",
        "name": "Kentucky",
        "population": "4,526,154",
        "capital": "Frankfort",
        "bird": {
            "name": "Cardinal",
            "image": "assets/images/kentucky-bird.png"
        },
        "flower": {
            "name": "Goldenrod",
            "image": "assets/images/kentucky-flower.png"
        },
        "flagImage": "assets/images/kentucky-flag.png"
    },
    {
        "id": "LA",
        "name": "Louisiana",
        "population": "4,573,749",
        "capital": "Baton Rouge",
        "bird": {
            "name": "Eastern Brown Pelican",
            "image": "assets/images/louisiana-bird.png"
        },
        "flower": {
            "name": "Magnolia",
            "image": "assets/images/louisiana-flower.png"
        },
        "flagImage": "assets/images/louisiana-flag.png"
    },
    {
        "id": "ME",
        "name": "Maine",
        "population": "1,395,722",
        "capital": "Augusta",
        "bird": {
            "name": "Chickadee",
            "image": "assets/images/maine-bird.png"
        },
        "flower": {
            "name": "White pine cone and tassel",
            "image": "assets/images/maine-flower.png"
        },
        "flagImage": "assets/images/maine-flag.png"
    },
    {
        "id": "MD",
        "name": "Maryland",
        "population": "6,180,253",
        "capital": "Annapolis",
        "bird": {
            "name": "Baltimore Oriole",
            "image": "assets/images/maryland-bird.png"
        },
        "flower": {
            "name": "Black-eyed susan",
            "image": "assets/images/maryland-flower.png"
        },
        "flagImage": "assets/images/maryland-flag.png"
    },
    {
        "id": "MA",
        "name": "Massachusetts",
        "population": "7,001,399",
        "capital": "Boston",
        "bird": {
            "name": "Chickadee",
            "image": "assets/images/massachusetts-bird.png"
        },
        "flower": {
            "name": "Mayflower",
            "image": "assets/images/massachusetts-flower.png"
        },
        "flagImage": "assets/images/massachusetts-flag.png"
    },
    {
        "id": "MI",
        "name": "Michigan",
        "population": "10,037,261",
        "capital": "Lansing",
        "bird": {
            "name": "American Robin",
            "image": "assets/images/michigan-bird.png"
        },
        "flower": {
            "name": "Apple blossom",
            "image": "assets/images/michigan-flower.png"
        },
        "flagImage": "assets/images/michigan-flag.png"
    },
    {
        "id": "MN",
        "name": "Minnesota",
        "population": "5,737,915",
        "capital": "Saint Paul",
        "bird": {
            "name": "Common Loon",
            "image": "assets/images/minnesota-bird.png"
        },
        "flower": {
            "name": "Lady slipper",
            "image": "assets/images/minnesota-flower.png"
        },
        "flagImage": "assets/images/minnesota-flag.png"
    },
    {
        "id": "MS",
        "name": "Mississippi",
        "population": "2,939,690",
        "capital": "Jackson",
        "bird": {
            "name": "Mockingbird",
            "image": "assets/images/mississippi-bird.png"
        },
        "flower": {
            "name": "evergreen magnolia",
            "image": "assets/images/mississippi-flower.png"
        },
        "flagImage": "assets/images/mississippi-flag.png"
    },
    {
        "id": "MO",
        "name": "Missouri",
        "population": "6,196,156",
        "capital": "Jefferson City",
        "bird": {
            "name": "Bluebird",
            "image": "assets/images/missouri-bird.png"
        },
        "flower": {
            "name": "Hawthorn",
            "image": "assets/images/missouri-flower.png"
        },
        "flagImage": "assets/images/missouri-flag.png"
    },
    {
        "id": "MT",
        "name": "Montana",
        "population": "1,132,812",
        "capital": "Helena",
        "bird": {
            "name": "Western Meadowlark",
            "image": "assets/images/montana-bird.png"
        },
        "flower": {
            "name": "Bitterroot",
            "image": "assets/images/montana-flower.png"
        },
        "flagImage": "assets/images/montana-flag.png"
    },
    {
        "id": "NE",
        "name": "Nebraska",
        "population": "1,978,379",
        "capital": "Lincoln",
        "bird": {
            "name": "Western Meadowlark",
            "image": "assets/images/nebraska-bird.png"
        },
        "flower": {
            "name": "Goldenrod",
            "image": "assets/images/nebraska-flower.png"
        },
        "flagImage": "assets/images/nebraska-flag.png"
    },
    {
        "id": "NV",
        "name": "Nevada",
        "population": "3,194,176",
        "capital": "Carson City",
        "bird": {
            "name": "Mountain Bluebird",
            "image": "assets/images/nevada-bird.png"
        },
        "flower": {
            "name": "Sagebrush",
            "image": "assets/images/nevada-flower.png"
        },
        "flagImage": "assets/images/nevada-flag.png"
    },
    {
        "id": "NH",
        "name": "New Hampshire",
        "population": "1,402,054",
        "capital": "Concord",
        "bird": {
            "name": "Purple Finch",
            "image": "assets/images/new-hampshire-bird.png"
        },
        "flower": {
            "name": "Purple lilac",
            "image": "assets/images/new-hampshire-flower.png"
        },
        "flagImage": "assets/images/new-hampshire-flag.png"
    },
    {
        "id": "NJ",
        "name": "New Jersey",
        "population": "9,290,841",
        "capital": "Trenton",
        "bird": {
            "name": "Eastern Goldfinch",
            "image": "assets/images/new-jersey-bird.png"
        },
        "flower": {
            "name": "Purple violet",
            "image": "assets/images/new-jersey-flower.png"
        },
        "flagImage": "assets/images/new-jersey-flag.png"
    },
    {
        "id": "NM",
        "name": "New Mexico",
        "population": "2,114,371",
        "capital": "Santa Fe",
        "bird": {
            "name": "Roadrunner",
            "image": "assets/images/new-mexico-bird.png"
        },
        "flower": {
            "name": "Yucca",
            "image": "assets/images/new-mexico-flower.png"
        },
        "flagImage": "assets/images/new-mexico-flag.png"
    },
    {
        "id": "NY",
        "name": "New York",
        "population": "19,571,216",
        "capital": "Albany",
        "bird": {
            "name": "Bluebird",
            "image": "assets/images/new-york-bird.png"
        },
        "flower": {
            "name": "Rose",
            "image": "assets/images/new-york-flower.png"
        },
        "flagImage": "assets/images/new-york-flag.png"
    },
    {
        "id": "NC",
        "name": "North Carolina",
        "population": "10,835,491",
        "capital": "Raleigh",
        "bird": {
            "name": "Cardinal",
            "image": "assets/images/north-carolina-bird.png"
        },
        "flower": {
            "name": "Dogwood",
            "image": "assets/images/north-carolina-flower.png"
        },
        "flagImage": "assets/images/north-carolina-flag.png"
    },
    {
        "id": "ND",
        "name": "North Dakota",
        "population": "783,926",
        "capital": "Bismarck",
        "bird": {
            "name": "Western Meadowlark",
            "image": "assets/images/north-dakota-bird.png"
        },
        "flower": {
            "name": "Wild prairie rose",
            "image": "assets/images/north-dakota-flower.png"
        },
        "flagImage": "assets/images/north-dakota-flag.png"
    },
    {
        "id": "OH",
        "name": "Ohio",
        "population": "11,785,935",
        "capital": "Columbus",
        "bird": {
            "name": "Cardinal",
            "image": "assets/images/ohio-bird.png"
        },
        "flower": {
            "name": "Scarlet carnation",
            "image": "assets/images/ohio-flower.png"
        },
        "flagImage": "assets/images/ohio-flag.png"
    },
    {
        "id": "OK",
        "name": "Oklahoma",
        "population": "4,053,824",
        "capital": "Oklahoma City",
        "bird": {
            "name": "Scissor-tailed Flycatcher",
            "image": "assets/images/oklahoma-bird.png"
        },
        "flower": {
            "name": "Mistletoe",
            "image": "assets/images/oklahoma-flower.png"
        },
        "flagImage": "assets/images/oklahoma-flag.png"
    },
    {
        "id": "OR",
        "name": "Oregon",
        "population": "4,233,358",
        "capital": "Salem",
        "bird": {
            "name": "Western Meadowlark",
            "image": "assets/images/oregon-bird.png"
        },
        "flower": {
            "name": "Oregon grape",
            "image": "assets/images/oregon-flower.png"
        },
        "flagImage": "assets/images/oregon-flag.png"
    },
    {
        "id": "PA",
        "name": "Pennsylvania",
        "population": "12,961,683",
        "capital": "Harrisburg",
        "bird": {
            "name": "Ruffed Grouse",
            "image": "assets/images/pennsylvania-bird.png"
        },
        "flower": {
            "name": "Mountain laurel",
            "image": "assets/images/pennsylvania-flower.png"
        },
        "flagImage": "assets/images/pennsylvania-flag.png"
    },
    {
        "id": "RI",
        "name": "Rhode Island",
        "population": "1,095,962",
        "capital": "Providence",
        "bird": {
            "name": "Rhode Island Red",
            "image": "assets/images/rhode-island-bird.png"
        },
        "flower": {
            "name": "Violet",
            "image": "assets/images/rhode-island-flower.png"
        },
        "flagImage": "assets/images/rhode-island-flag.png"
    },
    {
        "id": "SC",
        "name": "South Carolina",
        "population": "5,373,555",
        "capital": "Columbia",
        "bird": {
            "name": "Great Carolina Wren",
            "image": "assets/images/south-carolina-bird.png"
        },
        "flower": {
            "name": "Carolina yellow jessamine",
            "image": "assets/images/south-carolina-flower.png"
        },
        "flagImage": "assets/images/south-carolina-flag.png"
    },
    {
        "id": "SD",
        "name": "South Dakota",
        "population": "919,318",
        "capital": "Pierre",
        "bird": {
            "name": "Ring-necked Pheasant",
            "image": "assets/images/south-dakota-bird.png"
        },
        "flower": {
            "name": "American pasqueflower",
            "image": "assets/images/south-dakota-flower.png"
        },
        "flagImage": "assets/images/south-dakota-flag.png"
    },
    {
        "id": "TN",
        "name": "Tennessee",
        "population": "7,126,489",
        "capital": "Nashville",
        "bird": {
            "name": "Mockingbird",
            "image": "assets/images/tennessee-bird.png"
        },
        "flower": {
            "name": "Iris",
            "image": "assets/images/tennessee-flower.png"
        },
        "flagImage": "assets/images/tennessee-flag.png"
    },
    {
        "id": "TX",
        "name": "Texas",
        "population": "30,503,301",
        "capital": "Austin",
        "bird": {
            "name": "Mockingbird",
            "image": "assets/images/texas-bird.png"
        },
        "flower": {
            "name": "Bluebonnet",
            "image": "assets/images/texas-flower.png"
        },
        "flagImage": "assets/images/texas-flag.png"
    },
    {
        "id": "UT",
        "name": "Utah",
        "population": "3,417,734",
        "capital": "Salt Lake City",
        "bird": {
            "name": "Common American Gull",
            "image": "assets/images/utah-bird.png"
        },
        "flower": {
            "name": "Sego lily",
            "image": "assets/images/utah-flower.png"
        },
        "flagImage": "assets/images/utah-flag.png"
    },
    {
        "id": "VT",
        "name": "Vermont",
        "population": "647,464",
        "capital": "Montpelier",
        "bird": {
            "name": "Hermit Thrush",
            "image": "assets/images/vermont-bird.png"
        },
        "flower": {
            "name": "Red clover",
            "image": "assets/images/vermont-flower.png"
        },
        "flagImage": "assets/images/vermont-flag.png"
    },
    {
        "id": "VA",
        "name": "Virginia",
        "population": "8,715,698",
        "capital": "Richmond",
        "bird": {
            "name": "Cardinal",
            "image": "assets/images/virginia-bird.png"
        },
        "flower": {
            "name": "American dogwood",
            "image": "assets/images/virginia-flower.png"
        },
        "flagImage": "assets/images/virginia-flag.png"
    },
    {
        "id": "WA",
        "name": "Washington",
        "population": "7,812,880",
        "capital": "Olympia",
        "bird": {
            "name": "Willow Goldfinch",
            "image": "assets/images/washington-bird.png"
        },
        "flower": {
            "name": "Coast rhododendron",
            "image": "assets/images/washington-flower.png"
        },
        "flagImage": "assets/images/washington-flag.png"
    },
    {
        "id": "WV",
        "name": "West Virginia",
        "population": "1,770,071",
        "capital": "Charleston",
        "bird": {
            "name": "Cardinal",
            "image": "assets/images/west-virginia-bird.png"
        },
        "flower": {
            "name": "Rhododendron",
            "image": "assets/images/west-virginia-flower.png"
        },
        "flagImage": "assets/images/west-virginia-flag.png"
    },
    {
        "id": "WI",
        "name": "Wisconsin",
        "population": "5,910,955",
        "capital": "Madison",
        "bird": {
            "name": "Robin",
            "image": "assets/images/wisconsin-bird.png"
        },
        "flower": {
            "name": "Wood violet",
            "image": "assets/images/wisconsin-flower.png"
        },
        "flagImage": "assets/images/wisconsin-flag.png"
    },
    {
        "id": "WY",
        "name": "Wyoming",
        "population": "584,057",
        "capital": "Cheyenne",
        "bird": {
            "name": "Western Meadowlark",
            "image": "assets/images/wyoming-bird.png"
        },
        "flower": {
            "name": "Indian paintbrush",
            "image": "assets/images/wyoming-flower.png"
        },
        "flagImage": "assets/images/wyoming-flag.png"
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
