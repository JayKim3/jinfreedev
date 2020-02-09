let experienced = document.getElementById("experienced");
let Interested = document.getElementById("Interested");

// 12개
let ExperiencedSkills = [
  "url(./images/Android.png)",
  "url(./images/CSS3.png)",
  "url(./images/Git.png)",
  "url(./images/HTML5.png)",
  "url(./images/JQuery.png)",
  "url(./images/JS.png)",
  "url(./images/Mysql.png)",
  "url(./images/Next.png)",
  "url(./images/Node.png)",
  "url(./images/React.png)",
  "url(./images/Redux.png)",
  "url(./images/Sass.png)"
];

// 6개
let InterestedSkills = [
  "url(./images/Apollo.png)",
  "url(./images/Graphql.png)",
  "url(./images/Spring.png)",
  "url(./images/Ts.png)",
  "url(./images/Vue.png)",
  "url(./images/Webpack.png)",
  "url('./images/mongodb.png')",
  "url('./images/django.png')",
  "url('./images/svelte.png')"
];

function leftInit() {
  // Row 지정
  let leftrowOne = document.createElement("div");
  let leftrowTwo = document.createElement("div");
  let leftrowThree = document.createElement("div");
  let leftrowFour = document.createElement("div");

  // Experienced Skill 내 div 태그 생성
  let Android = document.createElement("div");
  let CSS3 = document.createElement("div");
  let Git = document.createElement("div");
  let HTML5 = document.createElement("div");
  let JQuery = document.createElement("div");
  let JS = document.createElement("div");
  let Mysql = document.createElement("div");
  let Next = document.createElement("div");
  let Node = document.createElement("div");
  let React = document.createElement("div");
  let Redux = document.createElement("div");
  let Sass = document.createElement("div");

  experienced.appendChild(leftrowOne);
  leftrowOne.className = "experienced-skill-row";
  experienced.appendChild(leftrowTwo);
  leftrowTwo.className = "experienced-skill-row";
  experienced.appendChild(leftrowThree);
  leftrowThree.className = "experienced-skill-row";
  experienced.appendChild(leftrowFour);
  leftrowFour.className = "experienced-skill-row";

  leftrowOne.appendChild(Android);
  Android.style.backgroundImage = ExperiencedSkills[0];
  Android.className = "experienced-skills";

  leftrowOne.appendChild(CSS3);
  CSS3.style.backgroundImage = ExperiencedSkills[1];
  CSS3.className = "experienced-skills";

  leftrowOne.appendChild(Git);
  Git.style.backgroundImage = ExperiencedSkills[2];
  Git.className = "experienced-skills";

  leftrowTwo.appendChild(HTML5);
  HTML5.style.backgroundImage = ExperiencedSkills[3];
  HTML5.className = "experienced-skills";

  leftrowTwo.appendChild(JQuery);
  JQuery.style.backgroundImage = ExperiencedSkills[4];
  JQuery.className = "experienced-skills";

  leftrowTwo.appendChild(JS);
  JS.style.backgroundImage = ExperiencedSkills[5];
  JS.className = "experienced-skills";

  leftrowThree.appendChild(Mysql);
  Mysql.style.backgroundImage = ExperiencedSkills[6];
  Mysql.className = "experienced-skills";

  leftrowThree.appendChild(Next);
  Next.style.backgroundImage = ExperiencedSkills[7];
  Next.className = "experienced-skills";

  leftrowThree.appendChild(Node);
  Node.style.backgroundImage = ExperiencedSkills[8];
  Node.className = "experienced-skills";

  leftrowFour.appendChild(React);
  React.style.backgroundImage = ExperiencedSkills[9];
  React.className = "experienced-skills";

  leftrowFour.appendChild(Redux);
  Redux.style.backgroundImage = ExperiencedSkills[10];
  Redux.className = "experienced-skills";

  leftrowFour.appendChild(Sass);
  Sass.style.backgroundImage = ExperiencedSkills[11];
  Sass.className = "experienced-skills";
}

function rightInit() {
  // Row 지정
  let leftrowOne = document.createElement("div");
  let leftrowTwo = document.createElement("div");
  let leftrowThree = document.createElement("div");

  // Interested Skill 내 div 태그 생성
  let Apollo = document.createElement("div");
  let Graphql = document.createElement("div");
  let Spring = document.createElement("div");
  let Ts = document.createElement("div");
  let Vue = document.createElement("div");
  let Webpack = document.createElement("div");
  let Mongo = document.createElement("div");
  let Django = document.createElement("div");
  let Svelte = document.createElement("div");

  Interested.appendChild(leftrowOne);
  leftrowOne.className = "experienced-skill-row";
  Interested.appendChild(leftrowTwo);
  leftrowTwo.className = "experienced-skill-row";
  Interested.appendChild(leftrowThree);
  leftrowThree.className = "experienced-skill-row";

  leftrowOne.appendChild(Apollo);
  Apollo.style.backgroundImage = InterestedSkills[0];
  Apollo.className = "experienced-skills";

  leftrowOne.appendChild(Graphql);
  Graphql.style.backgroundImage = InterestedSkills[1];
  Graphql.className = "experienced-skills";

  leftrowOne.appendChild(Spring);
  Spring.style.backgroundImage = InterestedSkills[2];
  Spring.className = "experienced-skills";

  leftrowTwo.appendChild(Ts);
  Ts.style.backgroundImage = InterestedSkills[3];
  Ts.className = "experienced-skills";

  leftrowTwo.appendChild(Vue);
  Vue.style.backgroundImage = InterestedSkills[4];
  Vue.className = "experienced-skills";

  leftrowTwo.appendChild(Webpack);
  Webpack.style.backgroundImage = InterestedSkills[5];
  Webpack.className = "experienced-skills";

  leftrowThree.appendChild(Mongo);
  Mongo.style.backgroundImage = InterestedSkills[6];
  Mongo.className = "experienced-skills";

  leftrowThree.appendChild(Django);
  Django.style.backgroundImage = InterestedSkills[7];
  Django.className = "experienced-skills";

  leftrowThree.appendChild(Svelte);
  Svelte.style.backgroundImage = InterestedSkills[8];
  Svelte.className = "experienced-skills";
}

leftInit();
rightInit();
