<template>
    <div id="about">
      <h1 style="padding: 1rem">Why do you need KNSR?</h1>
      <div id="bs">
        <div class="attrib">
          <div class="icon">
            <font-awesome-icon class="fa-icon" icon="tools"/>
          </div>
          <h2>Self Sufficient</h2>
          <p>We grow unchecked without any external signals or influences.</p>

        </div>
        <div class="attrib">
          <div class="icon">
            <font-awesome-icon class="fa-icon" icon="fist-raised"/>
          </div>

          <h2>Adaptability</h2>
          <p>We are able to rapidly expand even in the harshest environments.</p>
        </div>
        <div class="attrib">
          <div class="icon">
            <font-awesome-icon class="fa-icon" icon="dice-d20"/>
          </div>
          <h2>Limitless</h2>
          <p>Our potential for growth and expansion is limitless.</p>

        </div>
      </div>

        <div class="quote">
          <blockquote>
            <p class="lead">KNSR gave me exponential growth. No matter what impediments we came across,
              there was no stopping KNSR.</p>
            <h2>Gwas Ball
            <br>
            New York, NY</h2>
          </blockquote>
        </div>

    </div>
</template>

<script>

  export default {

        name: "About",
    fontawesome: {
      component: 'fa'
    },

  }

</script>

<style scoped>
  #about {
    padding-top: 100px;
    margin: auto;
    max-width: 1000px;
    height: 50vh;
    vertical-align: middle;
    text-align: center;
  }
  #bs {
    display: flex;
  }
  .attrib {
    flex-basis: 100%;
    text-align: center;

  }
  .icon {
    width: 140px;
    height: 140px;
    color: #fff;
    background-color: #222;
    border-radius: 50%;
    margin: auto;
    font-size: 90px;
    text-align: center;
    padding-top: 5px;
  }
  .fa-icon {
    font-style: unset;
  }
  .quote {
    align-self: center;
    padding-top: 0px;
    padding-bottom: 0px;
    max-width: 1000px;
    display: inline-table;
  }
  blockquote {
    position: relative;
    padding: 30px 120px;
    font-family: Georgia, serif;
    font-size: 240px;
    font-style: italic;
    color: white;
    text-align: center;
    margin: 30px 0 0;
    border: 0px;
  }
  blockquote p {
    font-size: 1.8rem;
  }

  blockquote h2 {
    text-align: right;
    font-size: 2.0rem;
  }

  blockquote:before {
    top: 10px;
    left: -10px;
    content: "\201C";
  }
  blockquote:after {
    top: 10px;
    right: 80px;
    content: "\201D";
  }

  blockquote:before, blockquote:after {
    position: absolute;
    width: 60px;
    height: 60px;
    line-height: 1;
  }

  @media (max-width: 440px){
    #about {
      padding-top: 25px;
      height: 100vh;
      display: grid;
    }

    .icon {
      padding-top: 1px;
      font-size: 45px;
      width: 70px;
      height: 70px;
    }

    .attrib h2 {
      font-size: 1.3em;
    }

    blockquote {
      font-size:  60px;
      padding: 15px 60px 15px 60px;
    }

    blockquote p {
      font-size: 1rem;
    }
    blockquote h2 {
      font-size: 1.5rem;
    }
    blockquote:before {
      top: 10px;
      left: -10px;
      content: "\201C";
    }
    blockquote:after {
      top: 10px;
      right: 0;
      content: "\201D";
    }

  }

</style>
