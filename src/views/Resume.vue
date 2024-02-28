<template>
  <div class="container">
    <div class="header">
      <div class="name">Phillip Curry</div>
      <div class="address">1136 Mason Woods Dr | Atlanta, GA 30329</div>
      <div class="contact">(404) 825 6231 | step3software@gmail.com</div>
    </div>
    <h1>Core Skills</h1>
    <div><span class="category">Project Management: </span>Agile, Scrum, Certified SAFe® 6 Practitioner, Analysis, Estimation, KPIs</div>
    <div><span class="category">Languages: </span> Java, JavaScript, TypeScript, Node.js</div>
    <div><span class="category">Frameworks: </span> Angular.js, Vue.js, Spring (MVC, Boot, Batch, Test), AWS</div>
    <div><span class="category">Databases: </span> PostgreSQL, Oracle SQL, Liquibase, ElasticSearch, DynamoDB</div>
    <div><span class="category">Tools: </span> IntelliJ, Jira, Git, Excel</div>
    <div><span class="category">Skills: </span> Object-oriented design, debugging, continuous integration, test-driven development, internationalization, test automation</div>
    <h1>Employment History</h1>
      <div class="section">
        <div class="headline">
          <span class="company">Product Development Manager at Jonah Group (now 3Pillar Global)</span>
          <span class="time">July 2012 - present</span>
        </div>
        <div class="indent">
          <div class="technologies">Workday, OpenAir, Lever, Gmail</div>
          <div class="responsibility">Continuously grew into progressive responsibilities, seeking out new challenges</div>
          <div class="responsibility">Interviewed and evaluated developers of all levels, drove hiring standards</div>
          <div class="responsibility">Coached 4 more junior colleagues, including annual reviews</div>
        </div>
      </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Product Development Manager at Client: Dye & Durham</span>
        <span class="time">August 2023 – January 2024</span>
      </div>
      <div class="indent">
        <div class="technologies">Flutter, C#, AWS, Jira, Excel</div>
        <div class="responsibility">Wore many hats as required to keep development moving on a tight timeline</div>
        <div class="responsibility">Directly managed 7 team-members</div>
        <div class="responsibility">Collaborated w/ product teams to generate desired business outcomes and translate into user stories</div>
        <div class="responsibility">Generated development timeline estimates and velocity reports</div>
        <div class="responsibility">Prioritized development work according to dependencies on/from other teams</div>
        <div class="responsibility">Facilitated scrum ceremonies</div>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Lead Developer at Client: Farm Credit Canada</span>
        <span class="time">July 2021 – August 2023</span>
      </div>
      <div class="indent">
        <div class="technologies">SAFe, Angular 14, TypeScript, Tailwind, Java 17, Spring Boot & Batch, AWS, PostgreSQL, Liquibase</div>
        <div class="responsibility">Lead a pioneer team of 4 which grew to a 10+ over 2 years</div>
        <div class="responsibility">Code reviews</div>
        <div class="responsibility">Onboarded and mentored developers including 3 dev leads </div>
        <div class="responsibility">Introduced time-sheet reconciliation process to get invoice error rate to 0</div>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Founder at Step 3 Software</span>
        <span class="time">July 2020 – August 2021</span>
      </div>
      <div class="indent">
        <div class="technologies">Vue.js, Babel, Node.js, SQLite</div>
        <div class="responsibility">Developed client relationships</div>
        <div class="responsibility">Worked with vendor management</div>
        <div class="responsibility">Delivered full SDLC</div>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Senior Developer at Client: Ontario Teachers Pension Plan</span>
        <span class="time">September 2015 – March 2020</span>
      </div>
      <div class="indent">
        <div class="technologies">Angular.js, TypeScript, Java 8, Spring MVC, Hibernate, DB2, Gulp, Selenium, Bamboo, Git</div>
        <div class="responsibility">Drove full SDLC for several applications as part of a large legacy migration</div>
        <div class="responsibility">Owned Front-End and UX standards for several teams</div>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Intermediate Developer at Client: Blue Care Network</span>
        <span class="time">July 2014 – March 2015</span>
      </div>
      <div class="indent">
        <div class="technologies">Oracle SQL, Harvest SCM</div>
        <div class="responsibility">Wrote and improved sql queries to optimize performance</div>
      </div>
    </div>
    <div class="section">
      <div class="headline">
        <span class="company">Assistant Lecturer at Hong Kong University S.P.A.C.E. Global College</span>
        <span class="time">2009 – 2011</span>
      </div>
      <div class="indent">
        <div class="responsibility">Taught English</div>
      </div>
    </div>
    <h1>Education</h1>
    <div>Computer Science <span class="bold">Georgia State</span> | Atlanta, GA</div>
    <div>Bachelor's of Arts <span class="bold">McGill University</span> | Montreal, QC</div>
    <h1>Personal</h1>
    <div>Dual-citizen of US and Canada</div>
    <div>Fluent in English, German, Conversational in Chinese, French, Spanish</div>
    <div>Summer 2015: Hiked the Appalachian Trail</div>
  </div>
</template>
<script>
export default {
  name: "ResumePage"
};
</script>
<style scoped>
a {
  padding-right: 4px;
  text-decoration: underline;
  cursor: pointer;
}

h1 {
  padding-left: 1rem;
  margin-top:.4rem;
  margin-bottom:.3rem;
  font-size:1.6rem;
}

.container {
  text-align: left;
}

.header {
  display: grid;
  grid-template-areas: "a b" "a c";
}

.name {
  grid-area: a;
  font-size: 2.2rem;
  text-align: left;
}

.address {
  grid-area: b;
}

.contact {
  grid-area: c;
}

.headline {
  font-size: 1.2rem;
}

.time {
  padding-left: .6rem;
  font-size:1rem;
}

.company {
  font-size:1rem;
  font-weight: bolder;
}

.role {
  font-weight: bold;
  font-style: italic;
}

.location {
}

.section {
  padding-bottom: .2rem;
}

.client {
}


.responsibility {
  display: list-item;
  margin-left: .8rem;
}

.technologies {
  font-style: italic;
}

.header {
  text-align: right;
}

.indent {
  padding-left: 1rem;
}

.bold {
  font-weight: bold;
}
.category {
  font-weight: bold;
}
.push-down {
  padding-top:1rem;
}
</style>
