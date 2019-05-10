<template>
  <div class="quote">
    <blockquote>
      <p class="lead">{{quote}}</p>
      <h2>{{name}}
        <br>
        {{location}}</h2>
    </blockquote>
  </div>
</template>

<script>
    export default {
        name: "Quote",
      props: {
        quote: {
          quote: String,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        location: {
          type: String,
          required: true
        }
      }
    }
</script>

<style scoped>

  .quote {
    align-self: center;
    padding-top: 0;
    padding-bottom: 0;
    width: 100%;
  }

  blockquote {
    position: relative;
    padding: 30px 120px;
    font-family: Georgia, serif;
    font-size: 240px;
    font-style: italic;
    color: white;
    text-align: center;
    max-width: 1000px;
    margin: auto;
    border: 0;
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
