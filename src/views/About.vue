<template>
  <div class="section__container" id="about-me">
    <div class="container--footer">
      <p>
        Sitio web diseñado por Sergio González
        <i class="fas fa-heart" id="heart"></i>
      </p>
      <div class="social">
        Seamos amigos:
        <a id="icons" href="https://www.instagram.com/sagb_24/"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="https://github.com/Sergio9815"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ------------------------------------------------------------------------------------------------ */

/* --- --- -- ABOUT-ME -- --- --- */

.section__container {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #e9e2d0;
}

#about-me {
  height: 80px;
  color: black;
  font-size: 13px;
}

.container--footer {
  width: 90%;
  align-self: center;
  height: 50px;
  border-top: solid 1.5px rgba(0, 0, 0, 0.363);
  border-bottom: solid 1.5px rgba(0, 0, 0, 0.363);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#heart {
  font-size: 14px;
  color: lightcoral;
}

.social {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 180px;
}
a {
  color: black;
  font-size: 20px;
}
a:hover {
  border-bottom: solid 2px black;
}

#icons {
  margin-left: 5px;
}

/* ------------------------------------------------------------------------------------------------ */

/* --- --- -- RESPONSIVE DESIGN -- --- --- */

@media screen and (max-width: 600px) {
  .container--footer {
    padding: 2px;
    flex-direction: column;
  }
}
</style>
