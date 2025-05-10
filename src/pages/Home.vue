

<script setup>
  import FloralLayout from '@/components/FloralLayout.vue';
  import MainNav from '../components/MainNav.vue'
</script>


<template>
  <FloralLayout>
    <template #title>
      Hello, traveler.
    </template>
    <template #nav>
      <MainNav />
    </template>

    <section class="about">
      <h2>About Me</h2>
      <p>
        I'm Jonathan, a software developer from Atlanta, GA. I originally studied physics, but 
        changed paths when I realized that building software was what I wanted to do most. In 
        a past life, I was a farmer, artist, and webcomic author. Nowadays cooking and fitness 
        are my main hobbies. 
      </p>
    </section>

    <section class="skills">
      <h2>Skills</h2>
      <p>I have significant experience in the following areas: </p>
      <ul>
        <li><span class="accent">Languages / Frameworks: </span>
          JS / TS, React / React Native, Python, Django, MySQL
        </li>
        <li><span class="accent">Tools: </span>
          Jira, Figma, Git / GitHub, Linux, NumPy, Pandas, MatPlotLib
        </li>
        <li><span class="accent">Other: </span>
          SDLC & Agile project management, Mobile development, Databases & data analytics 
        </li>
      </ul>

      <div class="spacer"></div>
      <p>I also have some familiarity with the following: </p>
      <ul>
        <li><span class="accent">Languages / Frameworks: </span>
          C / C++, Java, Vue.js
        </li>
        <li><span class="accent">Tools: </span>
          AWS, Docker, Neo4j, MongoDB, D3.js
        </li>
        <li><span class="accent">Other: </span>
          Security, Privacy regulations (HIPAA, FERPA), Computer networking
        </li>
      </ul>
    </section>

    <section class="projects">
      <h2>Past Projects</h2>
      <p>Brief summary of everything I've done since I first started to program, excluding a 
        lot of class projects and smaller things. Looking back, it's been a long road . . . 
        Hard to believe this is only the beginning!</p>
      <div class="spacer"></div>
      <ul>
        <li><a class="accent">DryWeightWatchers</a> &nbsp;&mdash;&nbsp; 
          Connecting congestive heart failure patients and healthcare providers.
        </li>
        <li><a class="accent">Papergraph</a> &nbsp;&mdash;&nbsp; 
          Visualize the body of academic research in a topic. 
        </li>
        <li><a class="accent">FireSim</a> &nbsp;&mdash;&nbsp; 
          Simulate wildfire spread and mitigation strategies. 
        </li>
        <li><a class="accent">Dun Dun Dungeon</a> &nbsp;&mdash;&nbsp; 
          2D RPG game for Android. 
        </li>
        <li><a class="accent">University Club Explorer</a> &nbsp;&mdash;&nbsp; 
          Help students find campus organizations. 
        </li>
        <li><a class="accent">Productivity Analysis</a> &nbsp;&mdash;&nbsp; 
          Analyze RescueTime API data to find patterns in daily productivity. 
        </li>
        <li><a class="accent">Polymer simulation research</a> &nbsp;&mdash;&nbsp; 
          Use ML to find phase transitions of magnetic polymers. 
        </li>
        <li><a class="accent">Student grades & feedback analysis</a> &nbsp;&mdash;&nbsp; 
          Inform teaching practices for freshman physics labs. 
        </li>
        <li><a class="accent">Circuit simulator</a> &nbsp;&mdash;&nbsp; 
          General analog circuit solver written in Python. 
        </li>
        <li><a class="accent">Basketball scorekeeper</a> &nbsp;&mdash;&nbsp; 
          Arduino project to learn about electronics. 
        </li>
        <li><a class="accent">Space Invaders</a> &nbsp;&mdash;&nbsp; 
          Arcade game clone made in Unity / C#. 
        </li>
        <li><a class="accent">Encypher</a> &nbsp;&mdash;&nbsp; 
          Naïve encryption app made in Visual Basic. My first 'real' program.
        </li>
      </ul>
    </section>
    <div class="big-spacer"></div>
  </FloralLayout>
</template>


<style scoped>
body {
  background: var(--color-bg);
}

.accent {
  color: var(--color-accent); 
  font-weight: bold; 
}

section {
  margin-bottom: 2rem;
}
.spacer {
  height: 0.75rem;
}
.big-spacer {
  height: 2.5rem; 
}

h2 {
  padding-bottom: 0;
  width: 100%; 
  border-bottom: 1px solid var(--color-accent); 
}

.skills ul {
  padding-left: 2rem;
}

.projects ul {
  list-style: none;
}

.contact {
  text-align: center;
}



a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}

p {
  color: var(--text);
}

</style>