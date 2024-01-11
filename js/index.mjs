document.getElementById("nav_home").onclick = function() {
    document.getElementById("content").innerHTML = `
    <h1 id="name">Ethan Lam</h1>
    <h3 id="welcome_message">Welcome to my personal website.</h3>
    `;
}

document.getElementById("nav_about_me").onclick = function() {
    document.getElementById("content").innerHTML = `
    <div id="about_me">
        <h2>About Me</h2>
        <p>Hi, my name is Ethan. I am currently a 3rd year CS student studying at UTSC, and I am interested in pursuing a career in web development and software engineering.
        As of the moment, I am looking for a Summer 2024 co-op opportunity in a position related to Computer Science.</p>
    </div>
    `;
}

document.getElementById("nav_skills").onclick = function() {
    document.getElementById("content").innerHTML = `
    <div id="skills">
        <h2>Skills</h2>
        <p>Web Development:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Rest API</li>
            <li>React</li>
        </ul>

        <p>General Programming:</p>
        <ul>
            <li>Git</li>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>Haskell (basic)</li>
            <li>SQL</li>
            <li>MySQL</li>
        </ul>

        <p>Other:</p>
        <ul>
            <li>Google Suite</li>
            <li>MS Office</li>
        </ul>
    </div>
    `;
}

document.getElementById("nav_interests").onclick = function() {
    document.getElementById("content").innerHTML = `
    <div id="interests">
        <h2>Interests</h2>
        <ul>
            <li>Light Novels</li>
            <li>Web Novels</li>
            <li>Fanfiction</li>
            <li>Anime</li>
            <li>Cultivation</li>
            <li>Dao</li>
            <li>Food</li>
            <li>Etc</li>
        </ul>
    </div>
    `;
}
//Photo by <a href="https://unsplash.com/@vorosbenisop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Benjamin Voros</a> on <a href="https://unsplash.com/photos/snow-mountain-under-stars-phIFdC6lA4E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

document.getElementById("nav_credits").onclick = function() {
    document.getElementById("content").innerHTML = `
    <div id="credits">
        <h2>Credits</h2>
        <div>
            <p>Icon:</p>
            <ul>
                <li>
                    <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Kiranshastry - Flaticon</a>
                </li>
            </ul>
            <p>Background Picture:</p>
            <ul>
                <li>
                Photo by <a href="https://unsplash.com/@vorosbenisop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Benjamin Voros</a> on <a href="https://unsplash.com/photos/snow-mountain-under-stars-phIFdC6lA4E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </li>
            </ul>
        </div>
    </div>
    `;
}