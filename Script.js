
const strangerThings = {

    title: "Stranger Things",

    year: "2025",

    genre: "Sci-Fi, Horror, Drama",

    rating: "98%",

    type: "TV",

    duration: "5 Seasons",

    description:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",

    image:
        "stranger-things.jpg",

    thumbnail:
        "stranger-things.jpg"

};





const netflixShows = [



    "Stranger Things",
    "Wednesday",
    "Squid Game",
    "Money Heist",
    "Bridgerton",
    "The Witcher",
    "Black Mirror",
    "The Crown",
    "Lucifer",
    "You",
    "Ozark",
    "Narcos",
    "The Umbrella Academy",
    "The Queen's Gambit",
    "Sex Education",
    "The Sandman",
    "Shadow and Bone",
    "Locke & Key",
    "The Haunting of Hill House",
    "The Haunting of Bly Manor",
    "Midnight Mass",
    "Archive 81",

   

    "All of Us Are Dead",
    "Sweet Home",
    "Kingdom",
    "Hellbound",
    "Bloodhounds",
    "My Name",
    "Vincenzo",
    "The Glory",
    "D.P.",
    "Extraordinary Attorney Woo",
    "Alchemy of Souls",
    "Twenty Five Twenty One",
    "Celebrity",
    "Mask Girl",
    "Daily Dose of Sunshine",
    "A Killer Paradox",
    "The Uncanny Counter",
    "My Demon",
    "Hierarchy",
    "Gyeongseong Creature",
    "Parasyte: The Grey",
    "King the Land",



    "Sacred Games",
    "Delhi Crime",
    "Kota Factory",
    "Mismatched",
    "The Fame Game",
    "Trial by Fire",
    "Khakee: The Bihar Chapter",
    "She",
    "Jamtara",
    "Class",
    "Heeramandi",
    "Maamla Legal Hai",
    "The Railway Men",
    "Guns & Gulaabs",
    "Rana Naidu",
    "Choona",
    "Kohrra",
    "Kaala Paani",
    "The Great Indian Kapil Show",
    "Indian Matchmaking",
    "Fabulous Lives of Bollywood Wives",



    "The Night Agent",
    "The Recruit",
    "The Diplomat",
    "Bodyguard",
    "The Stranger",
    "Stay Close",
    "Clickbait",
    "The Innocent",
    "Lupin",
    "The Gentlemen",
    "Top Boy",
    "The Watcher",
    "Fool Me Once",
    "The Lincoln Lawyer",
    "Anatomy of a Scandal",
    "Behind Her Eyes",
    "Unbelievable",
    "Maid",
    "Inventing Anna",



    "3 Body Problem",
    "Altered Carbon",
    "The OA",
    "Travelers",
    "Lost in Space",
    "Another Life",
    "Sweet Tooth",
    "Ragnarok",
    "The Imperfects",
    "Lockwood & Co.",
    "Chilling Adventures of Sabrina",
    "The Order",
    "Fate: The Winx Saga",
    "Warrior Nun",
    "Cursed",
    "The Midnight Club",
    "1899",
    "Bodies",
    "Supacell",

   

    "Never Have I Ever",
    "Emily in Paris",
    "Heartstopper",
    "Ginny & Georgia",
    "Dash & Lily",
    "Firefly Lane",
    "Sweet Magnolias",
    "Virgin River",
    "XO, Kitty",
    "Survival of the Thickest",
    "The Upshaws",
    "Dead to Me",
    "Grace and Frankie",
    "Unbreakable Kimmy Schmidt",

   

    "ONE PIECE",
    "Demon Slayer",
    "Jujutsu Kaisen",
    "Death Note",
    "Black Clover",
    "Castlevania",
    "Arcane",
    "Cyberpunk: Edgerunners",
    "Blue Eye Samurai",
    "The Dragon Prince",
    "Love, Death & Robots",
    "Devilman Crybaby",
    "Violet Evergarden",
    "Beastars",
    "Baki",
    "Kengan Ashura",
    "Dorohedoro",
    "Aggretsuko",
    "Yasuke"

];



const categories = {

    trending: [

        "Stranger Things",
        "Wednesday",
        "Squid Game",
        "Money Heist",
        "Bridgerton",
        "The Witcher",
        "The Night Agent",
        "The Gentlemen",
        "3 Body Problem",
        "The Diplomat"

    ],


    originals: [

        "Stranger Things",
        "Wednesday",
        "Bridgerton",
        "The Witcher",
        "The Crown",
        "The Umbrella Academy",
        "The Queen's Gambit",
        "Sex Education",
        "The Sandman",
        "Shadow and Bone"

    ],


    indian: [

        "Sacred Games",
        "Delhi Crime",
        "Kota Factory",
        "Mismatched",
        "Trial by Fire",
        "Khakee: The Bihar Chapter",
        "Jamtara",
        "Heeramandi",
        "The Railway Men",
        "Maamla Legal Hai"

    ],


    korean: [

        "Squid Game",
        "All of Us Are Dead",
        "Sweet Home",
        "Kingdom",
        "Hellbound",
        "Bloodhounds",
        "My Name",
        "The Glory",
        "Vincenzo",
        "Alchemy of Souls"

    ],


    action: [

        "The Witcher",
        "The Night Agent",
        "The Recruit",
        "The Diplomat",
        "Bloodhounds",
        "The Gentlemen",
        "Top Boy",
        "Warrior Nun",
        "Supacell",
        "Lupin"

    ],


    scifi: [

        "Stranger Things",
        "Black Mirror",
        "Dark",
        "3 Body Problem",
        "Altered Carbon",
        "The OA",
        "Lost in Space",
        "Another Life",
        "Sweet Tooth",
        "Supacell"

    ],


    comedy: [

        "Never Have I Ever",
        "Emily in Paris",
        "Sex Education",
        "Heartstopper",
        "Ginny & Georgia",
        "Dash & Lily",
        "The Upshaws",
        "Dead to Me",
        "Grace and Frankie",
        "Survival of the Thickest"

    ],


    anime: [

        "ONE PIECE",
        "Demon Slayer",
        "Jujutsu Kaisen",
        "Death Note",
        "Black Clover",
        "Castlevania",
        "Arcane",
        "Cyberpunk: Edgerunners",
        "Blue Eye Samurai",
        "Dorohedoro"

    ]

};



let catalog = [];

let myList =
    JSON.parse(
        localStorage.getItem(
            "streamflixMyList"
        )
    ) || [];

let currentMovie = null;




async function getShow(title) {

    /*
        Stranger Things uses the official
        local image instead of TVMaze.
    */

    if (
        title.toLowerCase() ===
        "stranger things"
    ) {

        return strangerThings;

    }


    try {

        const response =
            await fetch(
                `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(title)}`
            );


        if (!response.ok) {

            throw new Error(
                "Unable to fetch"
            );

        }


        const show =
            await response.json();


        const image =
            show.image?.original ||
            show.image?.medium ||
            createFallbackImage(
                title
            );


        const thumbnail =
            show.image?.medium ||
            image;


        const genres =
            show.genres &&
                show.genres.length
                ? show.genres
                    .slice(0, 3)
                    .join(", ")
                : "Drama";


        const description =
            show.summary
                ? show.summary.replace(
                    /<[^>]*>/g,
                    ""
                )
                : "A Netflix streaming series.";


        return {

            title: show.name,

            year:
                show.premiered
                    ? show.premiered
                        .substring(0, 4)
                    : "2024",

            genre: genres,

            rating:
                show.rating?.average
                    ? Math.round(
                        show.rating.average * 10
                    ) + "%"
                    : "95%",

            type:
                show.type || "TV",

            duration:
                show.runtime
                    ? `${show.runtime} min`
                    : "Series",

            description,

            image,

            thumbnail

        };

    }

    catch (error) {

        console.log(
            "Image error:",
            title
        );


        return {

            title,

            year: "2024",

            genre: "Netflix",

            rating: "95%",

            type: "TV",

            duration: "Series",

            description:
                "A Netflix streaming series.",

            image:
                createFallbackImage(
                    title
                ),

            thumbnail:
                createFallbackImage(
                    title
                )

        };

    }

}




function createFallbackImage(title) {

    return (
        "https://placehold.co/300x450/181818/ffffff?text="
        +
        encodeURIComponent(title)
    );

}




async function loadCatalog() {

    const loading =
        document.getElementById(
            "loading"
        );



    const uniqueTitles =
        [...new Set(netflixShows)];




    const batchSize = 8;


    for (
        let i = 0;
        i < uniqueTitles.length;
        i += batchSize
    ) {

        const batch =
            uniqueTitles.slice(
                i,
                i + batchSize
            );


        const results =
            await Promise.all(
                batch.map(
                    title =>
                        getShow(title)
                )
            );


        catalog.push(
            ...results
        );


        renderAll();

    }


    loading.style.display =
        "none";

}




function findMovie(title) {

    return catalog.find(
        movie =>
            movie.title.toLowerCase() ===
            title.toLowerCase()
    );

}



function createCard(movie) {

    if (!movie) {
        return "";
    }


    const isInList =
        myList.some(
            item =>
                item.title ===
                movie.title
        );


    return `

        <article
            class="movie-card"
            data-title="${escapeHTML(movie.title)}"
        >

            <img
                class="movie-poster"
                src="${movie.thumbnail}"
                alt="${escapeHTML(movie.title)}"
                loading="lazy"
                onerror="
                    this.src='${createFallbackImage(
        movie.title
    )}'
                "
            >


            <div class="card-overlay">

                <div class="card-title">

                    ${escapeHTML(
        movie.title
    )}

                </div>


                <div class="card-meta">

                    <span class="green">
                        ${movie.rating}
                    </span>

                    <span>
                        ${movie.year}
                    </span>

                    <span>
                        ${movie.duration}
                    </span>

                </div>


                <div class="card-buttons">

                    <button
                        class="card-button play-card"
                    >

                        <i class="bi bi-play-fill"></i>

                    </button>


                    <button
                        class="card-button secondary list-card"
                    >

                        <i
                            class="bi ${isInList
            ? "bi-check-lg"
            : "bi-plus-lg"
        }"
                        ></i>

                    </button>


                    <button
                        class="card-button secondary info-card"
                    >

                        <i class="bi bi-info-lg"></i>

                    </button>

                </div>

            </div>

        </article>

    `;

}




function renderRow(
    elementId,
    titles
) {

    const row =
        document.getElementById(
            elementId
        );


    if (!row) {
        return;
    }


    const movies =
        titles
            .map(
                title =>
                    findMovie(title)
            )
            .filter(Boolean);


    row.innerHTML =
        movies
            .map(
                movie =>
                    createCard(movie)
            )
            .join("");


    attachCardEvents(row);

}




function renderAll() {

    renderRow(
        "trendingRow",
        categories.trending
    );


    renderRow(
        "originalsRow",
        categories.originals
    );


    renderRow(
        "indianRow",
        categories.indian
    );


    renderRow(
        "koreanRow",
        categories.korean
    );


    renderRow(
        "actionRow",
        categories.action
    );


    renderRow(
        "scifiRow",
        categories.scifi
    );


    renderRow(
        "comedyRow",
        categories.comedy
    );


    renderRow(
        "animeRow",
        categories.anime
    );


    renderMyList();

}





function attachCardEvents(container) {

    container
        .querySelectorAll(".movie-card")
        .forEach(card => {


            const title =
                card.dataset.title;


            const movie =
                findMovie(title);


            if (!movie) {
                return;
            }


            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            "button"
                        )
                    ) {
                        return;
                    }


                    openModal(movie);

                }
            );


            card
                .querySelector(
                    ".play-card"
                )
                .addEventListener(
                    "click",
                    () => {

                        playMovie(movie);

                    }
                );


            card
                .querySelector(
                    ".list-card"
                )
                .addEventListener(
                    "click",
                    () => {

                        toggleList(movie);

                    }
                );


            card
                .querySelector(
                    ".info-card"
                )
                .addEventListener(
                    "click",
                    () => {

                        openModal(movie);

                    }
                );

        });

}





function openModal(movie) {

    currentMovie = movie;


    document.getElementById(
        "modalTitle"
    ).textContent =
        movie.title;


    document.getElementById(
        "modalImage"
    ).style.backgroundImage =
        `url("${movie.image}")`;


    document.getElementById(
        "modalRating"
    ).textContent =
        movie.rating;


    document.getElementById(
        "modalYear"
    ).textContent =
        movie.year;


    document.getElementById(
        "modalDuration"
    ).textContent =
        movie.duration;


    document.getElementById(
        "modalDescription"
    ).textContent =
        movie.description;


    document.getElementById(
        "modalGenre"
    ).textContent =
        movie.genre;


    document.getElementById(
        "modalType"
    ).textContent =
        movie.type;


    updateModalButton();


    document.getElementById(
        "modal"
    ).classList.add("active");


    document.body.style.overflow =
        "hidden";

}





function closeModal() {

    document.getElementById(
        "modal"
    ).classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}





function updateModalButton() {

    if (!currentMovie) {
        return;
    }


    const button =
        document.getElementById(
            "modalList"
        );


    const exists =
        myList.some(
            item =>
                item.title ===
                currentMovie.title
        );


    if (exists) {

        button.innerHTML =
            `
                <i class="bi bi-check-lg"></i>
                In My List
            `;

    }

    else {

        button.innerHTML =
            `
                <i class="bi bi-plus-lg"></i>
                My List
            `;

    }

}




function toggleList(movie) {

    const index =
        myList.findIndex(
            item =>
                item.title ===
                movie.title
        );


    if (index >= 0) {

        myList.splice(
            index,
            1
        );


        showToast(
            movie.title +
            " removed from My List"
        );

    }

    else {

        myList.push(movie);


        showToast(
            movie.title +
            " added to My List"
        );

    }


    localStorage.setItem(
        "streamflixMyList",
        JSON.stringify(
            myList
        )
    );


    renderAll();


    updateModalButton();

}




function renderMyList() {

    const grid =
        document.getElementById(
            "myListGrid"
        );


    const empty =
        document.getElementById(
            "emptyList"
        );


    if (
        !grid ||
        !empty
    ) {
        return;
    }


    if (
        myList.length === 0
    ) {

        grid.innerHTML =
            "";

        empty.style.display =
            "block";

        return;

    }


    empty.style.display =
        "none";


    grid.innerHTML =
        myList
            .map(
                movie =>
                    createCard(movie)
            )
            .join("");


    attachCardEvents(grid);

}




function playMovie(movie) {

    showToast(
        "▶ Playing " +
        movie.title
    );

}



let toastTimeout;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    const text =
        document.getElementById(
            "toastText"
        );


    text.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}





const searchButton =
    document.getElementById(
        "searchButton"
    );


const searchBox =
    document.getElementById(
        "searchBox"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const closeSearch =
    document.getElementById(
        "closeSearch"
    );


searchButton.addEventListener(
    "click",
    () => {

        searchBox.classList.toggle(
            "active"
        );


        if (
            searchBox.classList.contains(
                "active"
            )
        ) {

            searchInput.focus();

        }

    }
);


closeSearch.addEventListener(
    "click",
    () => {

        searchBox.classList.remove(
            "active"
        );


        searchInput.value = "";


        clearSearch();

    }
);


searchInput.addEventListener(
    "input",
    () => {

        searchShows(
            searchInput.value
        );

    }
);





function searchShows(query) {

    const section =
        document.getElementById(
            "searchResults"
        );


    const grid =
        document.getElementById(
            "searchGrid"
        );


    const count =
        document.getElementById(
            "resultCount"
        );


    query =
        query
            .trim()
            .toLowerCase();


    if (!query) {

        clearSearch();

        return;

    }


    const results =
        catalog.filter(
            movie =>
                movie.title
                    .toLowerCase()
                    .includes(query)
        );


    section.classList.remove(
        "hidden"
    );


    count.textContent =
        results.length +
        " result" +
        (
            results.length === 1
                ? ""
                : "s"
        );


    grid.innerHTML =
        results
            .map(
                movie =>
                    createCard(movie)
            )
            .join("");


    attachCardEvents(grid);

}




function clearSearch() {

    const section =
        document.getElementById(
            "searchResults"
        );


    section.classList.add(
        "hidden"
    );


    document.getElementById(
        "searchGrid"
    ).innerHTML = "";

}




window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.getElementById(
                "navbar"
            );


        if (
            window.scrollY > 50
        ) {

            navbar.classList.add(
                "scrolled"
            );

        }

        else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);





const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


mobileMenuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "active"
        );

    }
);


mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    });





document
    .querySelectorAll(
        ".scroll-left"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    document.getElementById(
                        button.dataset.target
                    );


                target.scrollBy({

                    left: -700,

                    behavior: "smooth"

                });

            }
        );

    });


document
    .querySelectorAll(
        ".scroll-right"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    document.getElementById(
                        button.dataset.target
                    );


                target.scrollBy({

                    left: 700,

                    behavior: "smooth"

                });

            }
        );

    });





document
    .getElementById(
        "modalClose"
    )
    .addEventListener(
        "click",
        closeModal
    );


document
    .getElementById(
        "modalBackground"
    )
    .addEventListener(
        "click",
        closeModal
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);





document
    .getElementById(
        "modalPlay"
    )
    .addEventListener(
        "click",
        () => {

            if (currentMovie) {

                playMovie(
                    currentMovie
                );

            }

        }
    );





document
    .getElementById(
        "modalList"
    )
    .addEventListener(
        "click",
        () => {

            if (currentMovie) {

                toggleList(
                    currentMovie
                );

            }

        }
    );




document
    .getElementById(
        "heroPlay"
    )
    .addEventListener(
        "click",
        () => {

            playMovie(
                strangerThings
            );

        }
    );





document
    .getElementById(
        "heroInfo"
    )
    .addEventListener(
        "click",
        () => {

            openModal(
                strangerThings
            );

        }
    );




document
    .getElementById(
        "notificationButton"
    )
    .addEventListener(
        "click",
        () => {

            showToast(
                "No new notifications"
            );

        }
    );




function escapeHTML(text) {

    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}




document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadCatalog();

    }
);