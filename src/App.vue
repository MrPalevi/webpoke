<script setup>

</script>

<template>
    <div class="container ">
    <img alt="lclass-logo" class="logo" src="./assets/pokemon-logo.png"/>
  <div class="card-catch hover:bg-yellow-400 flex item-center justify-between">
    
    <div class="card-lg w-96 bg-base-100 shadow-xl image-full">
  <figure><img class="logo1" src="./assets/pokecatch.png" alt="class-logo" /></figure>
  <div class="card-body-catch">
    <p class="card-title-1">0 Catch</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
</div>
  </div>
  <main class="main-utama">
    <ul class="list-disc">
    
  <div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img class="bg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" /></figure>
  <div class="card-body">
    0001
    <h2 class="card-title">Bulbasaur</h2>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>

</ul>
<ul class="list-disc">
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img class="bg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="bulbasaur" /></figure>
  <div class="card-body">
    0002
    <h2 class="card-title">Ivysaur</h2>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
</ul>
<ul class="list-disc">
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img class="bg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" alt="bulbasaur" /></figure>
  <div class="card-body">
    0003
    <h2 class="card-title">Venusaur</h2>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
</ul>
<ul class="list-disc">
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img class="bg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="bulbasaur" /></figure>
  <div class="card-body">
    0004
    <h2 class="card-title">Charmander</h2>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
</ul>
<ul class="list-disc">
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img class="bg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" alt="bulbasaur" /></figure>
  <div class="card-body">
    0005
    <h2 class="card-title">Charmeleon</h2>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
</ul>
<ul class="list-disc">
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img class="bg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="bulbasaur" /></figure>
  <div class="card-body">
    0006
    <h2 class="card-title">Charizard</h2>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
</ul>
</main>
</template>

<style scoped>

.card-body{

  right: 100px;
  top: 35px;
}

.card-body:hover{
  color: yellow;
}

.main-utama {

  display: flex;
  grid-template-columns:repeat(3);
  margin-right: 100px;
  right: 165px
}

.card-title-1{
position: relative;
right: 35px;
top: 3px;
}

.card-title{

  padding-right: 100px;
  right: 35px;
  top: 15px;
  font-weight: bold;
  color: black;
}

.card-title:hover{
  color: black;
}

.main-utama{

  height: 100px;
  padding: 150px;
}

.gb-pokemon{

  margin-bottom: 50px;
}

.bg{
  position: relative;
  width: 185px;
  display: flex;
  left: 194px;
  bottom: 80px;
}


.item-center{

  align-items: center;
}

.flex{
  display: flex;
}


div {
  display: flex;
  justify-content: space-around;
  padding: auto;
}

header {
  line-height: 1.5;
}

.logo {
 height: 50px;
 cursor: pointer;
}

.logo1{
  left: 65px;
  height: 22px;
  top: 5px;
  cursor: pointer;

}


</style>
