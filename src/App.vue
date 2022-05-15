<template>
  <div id="app" class="relative h-screen">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const mq = window.matchMedia("(max-device-width: 480px)");
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  let body = document.querySelector("body");
  if (isMobile && mq.matches) {
    body.classList.add("is-mobile");

    let el = document.getElementById("app");

    el.addEventListener("click", (e) => {
      //check if it's fullscreen
      if (
        !el.fullscreenElement ||
        !el.webkitFullscreenElement ||
        !el.mozFullScreenElement ||
        !el.msFullscreenElement
      ) {
        el.requestFullscreen();
      }
    });
  }
});
</script>
