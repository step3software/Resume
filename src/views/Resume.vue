<template>
  <div class="container">
    <div class="header">
      <div class="name">Phillip Curry</div>
      <div class="address">1136 Mason Woods Dr | Atlanta, GA 30329</div>
      <div class="contact">(404) 825 6231 | step3software@gmail.com</div>
    </div>
    <h1>Core Skills</h1>
    <div><span class="category">Project Management: </span>Agile, Scrum, Certified SAFe® 6 Practitioner, Analysis, Estimation, KPIs</div>
    <div><span class="category">Languages: </span> Java, JavaScript, TypeScript, C#</div>
    <div><span class="category">Frameworks: </span> Angular.js, Vue.js, Spring (MVC, Boot, Batch, Test)</div>
    <div><span class="category">Database: </span> PostgreSQL, Oracle SQL, Liquibase, ElasticSearch</div>
    <div><span class="category">Tools: </span> IntelliJ, Jira, Git, npm</div>
    <h1>Employment</h1>
    <div class="section">
      <div class="headline">
        <span class="company">Founder at Step 3 Software</span>
        <span class="time">July 2020 – present</span>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Client: Virtual Behavioral Skills Training</span>
        <span class="time">July 2020 – present</span>
      </div>
      <div class="indent">
        <div class="technologies">Vue.js, Babel, nodejs, SQLite</div>
        <div class="responsibility">Solely responsible for entire SDLC</div>
      </div>
    </div>
    <div class="section">
      <div class="headline">
        <span class="company">Technical Architect at Jonah Group (now 3Pillar Global)</span>
        <span class="time">July 2012 - March 2020, July 2021 - present</span>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Lead Developer at Client: Farm Credit Canada</span>
        <span class="time">July 2021 – present</span>
      </div>
      <div class="indent">
        <div class="technologies">SAFe, Angular 14, TypeScript, Tailwind, Java 17, Spring Boot and Batch, AWS, PostgreSQL, Liquibase</div>
        <div class="responsibility">Lead a pioneer team of four which grew to a 2m+ account over 2 years</div>
        <div class="responsibility">Onboarded and mentored 10+ developers and 3 dev leads </div>
        <div class="responsibility">Interviewed and evaluated developers of all levels</div>
        <div class="responsibility">Introduced time-sheet reconciliation process to get invoice error rate to near 0</div>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Senior Developer at Client: Ontario Teachers Pension Plan</span>
        <span class="time">September 2015 – March 2020</span>
      </div>
      <div class="indent">
        <div class="technologies">Angular.js, TypeScript, Java 8, Spring, Hibernate, DB2, Gulp, TestNG, Jasmine, Bamboo, Git</div>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Intermediate Developer at Client: Blue Care Network</span>
        <span class="time">July 2014 – March 2015</span>
      </div>
      <div class="indent">
        <div class="technologies">Oracle SQL, Harvest SCM</div>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Intermediate Developer Client: Bank of Montreal</span>
        <span class="time">January 2014 – June 2014</span>
      </div>
      <div class="indent">
        <div class="technologies">C#, .NET, Silverlight, Telerik, ReSharper, IIS, MSBuild, SQL Server, SVN</div>
      </div>
    </div>
    <div class="client section">
      <div class="headline">
        <span class="company">Junior Developer at Client: Blue Cross Blue Shield of Michigan</span>
        <span class="time">July 2012 – December 2013</span>
      </div>
      <div class="indent">
        <div class="technologies">Java 6, J2EE, Spring, JavaScript, JSP, VB6, Oracle SQL, SVN</div>
      </div>
    </div>
    <div class="section">
      <div class="headline">
        <span class="company">Interning Developer at Diamond Computing Company</span>
        <span class="time">May 2012 - August 2012</span>
      </div>
    </div>
    <div class="section">
      <div class="headline">
        <span class="company">Assistant Lecturer at Hong Kong University S.P.A.C.E. Global College</span>
        <span class="time">2009 – 2011</span>
      </div>
    </div>
    <h1>Education</h1>
    <div><span class="bold">Georgia State University</span>, Atlanta, US and <span class="bold">Simon Frasier University</span>, Vancouver, Canada</div>
    <div class="indent">Course work in Computer Science</div>
    <div><span class="bold">McGill University</span>, Montreal, Canada</div>
    <div class="indent">B.A. in Linguistics, Classics</div>
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
</style>
