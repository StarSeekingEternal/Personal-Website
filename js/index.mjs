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
        <p>Hi, my name is Ethan. I am currently a 3rd year CS student studying at UTSC, and I am interested in pursuing a career in web development and software engineering.</p>
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
        </ul>

        <p>General Programming:</p>
        <ul>
            <li>Git</li>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>Haskell (basic)</li>
            <li>SQL</li>
        </ul>

        <p>General Programming:</p>
        <ul>
            <li>Git</li>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>Haskell (basic)</li>
            <li>SQL</li>
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