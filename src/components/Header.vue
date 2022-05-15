<template>
  <header class="z-50 w-full text-white md:fixed md:top-0 md:left-0">
    <div
      class="container relative mx-auto flex max-w-screen-lg items-center justify-between p-4 md:px-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
    >
      <a href="/">
        <img src="@/assets/img/logo.png" :srcset="`${img} 2x`" class="h-20" />
      </a>

      <div class="inline-flex items-center">
        <img
          src="@/assets/img/phone-icon.png"
          alt=""
          class="mr-8 h-auto w-16"
        />

        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-auto w-16"
            viewBox="0 0 82.027 54.685"
          >
            <path
              id="menu_FILL0_wght400_GRAD0_opsz48"
              d="M6,66.685V59.849H88.027v6.836ZM6,42.76V35.925H88.027V42.76ZM6,18.836V12H88.027v6.836Z"
              transform="translate(-6 -12)"
              fill="#fc0d1b"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="hidden h-auto w-16"
            viewBox="0 0 70.193 70.193"
          >
            <path
              id="close_FILL0_wght400_GRAD0_opsz48"
              d="M15.57,78.216,10.35,73,39.062,44.283,10.35,15.57l5.22-5.22L44.283,39.062,73,10.35l5.22,5.22L49.5,44.283,78.216,73,73,78.216,44.283,49.5Z"
              transform="matrix(0.999, -0.035, 0.035, 0.999, -10.705, -7.614)"
              fill="#fc0d1b"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import img from "@/assets/img/logo@2x.png";

export default {
  name: "Header",
  data() {
    return {
      img,
    };
  },
};
</script>
