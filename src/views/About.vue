<template>
  <div class="overflow-x-hidden">
    <Header />

    <section class="relative bg-black">
      <video
        autoplay
        loop
        muted
        class="absolute top-0 left-0 z-10 min-h-full w-full min-w-full max-w-none"
      >
        <source
          src="https://res.cloudinary.com/code-moran-ltd/video/upload/v1652345662/ebrands/reel.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div class="relative z-20 h-screen">
        <div
          class="container relative mx-auto flex h-full max-w-screen-lg items-center p-4 md:px-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
        >
          <div class="social-icons">
            <SocialMediaLinksVue />
          </div>
        </div>

        <div class="absolute bottom-0 left-0 w-full text-center">
          <button type="button" class="scroll-down mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-auto w-8"
              viewBox="0 0 54.703 76.656"
            >
              <path
                id="mouse_FILL0_wght400_GRAD0_opsz48"
                d="M37.351,79.656a27.046,27.046,0,0,1-19.439-7.572A24.744,24.744,0,0,1,10,53.481V29.175a24.744,24.744,0,0,1,7.912-18.6A27.046,27.046,0,0,1,37.351,3,27.046,27.046,0,0,1,56.79,10.572a24.744,24.744,0,0,1,7.912,18.6V53.481a24.744,24.744,0,0,1-7.912,18.6A27.046,27.046,0,0,1,37.351,79.656Zm2.93-50.481h18.56a19.81,19.81,0,0,0-5.177-13.462A20.586,20.586,0,0,0,40.282,8.8Zm-24.421,0h18.56V8.8a20.586,20.586,0,0,0-13.383,6.918A19.81,19.81,0,0,0,15.861,29.175Zm21.49,44.872a21.178,21.178,0,0,0,15.19-6.03,19.394,19.394,0,0,0,6.3-14.537v-18.7H15.861v18.7a19.394,19.394,0,0,0,6.3,14.537A21.178,21.178,0,0,0,37.351,74.047Zm0-39.263Zm2.93-5.609Zm-5.861,0Zm2.93,5.609Z"
                transform="translate(-10 -3)"
                fill="#fff"
              />
            </svg>
          </button>

          <div class="mt-6">
            <img src="@/assets/img/ribbon.png" alt="" class="h-6 w-full" />
          </div>
        </div>
      </div>
    </section>

    <section class="about relative">
      <div class="bg">&nbsp;</div>
      <div
        class="container relative mx-auto flex max-w-screen-lg px-8 md:py-16 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      >
        <div class="w-3/7">&nbsp;</div>

        <div
          class="relative z-40 col-span-2 mb-6 ml-auto inline-flex items-center rounded-sm bg-white py-16 px-16 shadow-2xl md:w-3/5"
        >
          <div class="">
            <h4 class="text-2xl font-bold leading-normal">
              eBrands Africa is the global hub of creative Communication and
              Marketing strategy. We are an innovative digital agency that
              develops globally impressive strategies, builds tailor-made
              digital experiences, and brings brand identities to life through
              storytelling.
            </h4>
          </div>
        </div>
      </div>
    </section>

    <section class="mission relative">
      <div
        class="bg absolute top-0 left-0 h-full w-full -rotate-2 bg-primary-black"
      >
        &nbsp;
      </div>

      <div class="absolute top-0 h-full w-full">
        <img
          src="@/assets/img/patterns/middle-left.png"
          alt=""
          class="absolute -top-36 -left-72 h-56"
        />

        <img
          src="@/assets/img/patterns/middle-right.png"
          alt=""
          class="absolute -right-48 h-40"
        />
      </div>

      <div
        class="container relative mx-auto flex max-w-screen-lg px-8 md:py-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      >
        <h4 class="text-center text-2xl font-bold leading-tight text-white">
          We believe in the power of transformation whilst retaining the best
          features of your brand. When you tell us about yourself, we show the
          world who you are.
        </h4>
      </div>
    </section>

    <section class="services relative">
      <div
        class="container relative mx-auto max-w-screen-lg px-8 md:py-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      >
        <div class="text-center">
          <h3
            class="relative mb-12 inline-block text-center text-6xl font-extrabold"
          >
            <span class="text-primary-red"
              >OUR <span class="text-with-outline">SERVICES</span></span
            >

            <span
              class="absolute left-2/4 mt-4 block h-2 w-20 -translate-x-1/2 bg-primary-red"
            ></span>
          </h3>

          <div class="mx-auto md:max-w-5xl">
            <h4
              class="text-center text-2xl font-bold leading-tight text-secondary-black"
            >
              We are a digital agency and consulting firm which focuses on
              catering to the demands of our clients by offering them innovative
              and quality-driven solutions. Here's how we do it:
            </h4>
          </div>
        </div>

        <div class="pt-16 pb-0">
          <Services />
        </div>
      </div>
    </section>

    <section class="works relative">
      <div
        class="container relative mx-auto max-w-screen-lg px-8 pt-0 md:pb-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      >
        <div class="text-center">
          <h3
            class="relative mb-12 inline-block text-center text-6xl font-extrabold"
          >
            <span class="text-primary-red"
              >FEATURED <span class="text-with-outline">WORKS</span></span
            >

            <span
              class="absolute left-2/4 mt-4 block h-2 w-20 -translate-x-1/2 bg-primary-red"
            ></span>
          </h3>
        </div>

        <div class="mx-auto md:max-w-5xl">
          <div class="py-4">
            <a
              href="#"
              class="mx-4 inline-block bg-primary-red py-1 px-4 text-lg font-medium text-white"
              ><span>All</span></a
            >
            <a
              href="#"
              class="mx-4 inline-block py-1 px-4 text-lg font-medium text-black hover:bg-primary-red hover:text-white"
              ><span>Websites</span></a
            >
            <a
              href="#"
              class="mx-4 inline-block py-1 px-4 text-lg font-medium text-black hover:bg-primary-red hover:text-white"
              ><span>Applications</span></a
            >
            <a
              href="#"
              class="mx-4 inline-block py-1 px-4 text-lg font-medium text-black hover:bg-primary-red hover:text-white"
              ><span>Strategy</span></a
            >
            <a
              href="#"
              class="mx-4 inline-block py-1 px-4 text-lg font-medium text-black hover:bg-primary-red hover:text-white"
              ><span>Digital Marketing</span></a
            >
          </div>
        </div>

        <div class="mt-6 grid h-screen grid-cols-3 grid-rows-3 gap-4">
          <div class="service-1 relative row-span-2 bg-black">
            <div
              :style="{
                'background-image': `url(${service1})`,
              }"
              class="bg absolute top-0 left-0 h-full w-full bg-cover bg-no-repeat"
            >
              &nbsp;
            </div>
          </div>
          <div class="service-2 relative bg-black">
            <div
              :style="{
                'background-image': `url(${service2})`,
              }"
              class="bg absolute top-0 left-0 h-full w-full bg-cover bg-no-repeat"
            >
              &nbsp;
            </div>
          </div>
          <div class="service-3 relative row-span-2 bg-black">
            <div
              :style="{
                'background-image': `url(${service3})`,
              }"
              class="bg absolute top-0 left-0 h-full w-full bg-cover bg-no-repeat"
            >
              &nbsp;
            </div>
          </div>
          <div class="service-4 relative row-span-2 bg-black">
            <div
              :style="{
                'background-image': `url(${service4})`,
              }"
              class="bg absolute top-0 left-0 h-full w-full bg-cover bg-no-repeat"
            >
              &nbsp;
            </div>
          </div>
          <div class="service-5 relative bg-black">
            <div
              :style="{
                'background-image': `url(${service5})`,
              }"
              class="bg absolute top-0 left-0 h-full w-full bg-cover bg-no-repeat"
            >
              &nbsp;
            </div>
          </div>
          <div class="service-6 relative bg-black">
            <div
              :style="{
                'background-image': `url(${service6})`,
              }"
              class="bg absolute top-0 left-0 h-full w-full bg-cover bg-no-repeat"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="blog relative pt-12" style="background: #efefff">
      <div
        class="container relative mx-auto max-w-screen-lg px-8 pt-0 md:pb-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      >
        <div class="text-center">
          <h3
            class="relative mb-12 inline-block text-center text-6xl font-extrabold"
          >
            <span class="text-primary-red"
              >OUR <span class="text-with-outline">BLOG</span></span
            >

            <span
              class="absolute left-2/4 mt-4 block h-2 w-20 -translate-x-1/2 bg-primary-red"
            ></span>
          </h3>
        </div>

        <div class="mt-6">
          <Blog />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SocialMediaLinksVue from "@/components/SocialMediaLinks.vue";
import Services from "@/components/Services.vue";
import Blog from "@/components/Blog.vue";

import Footer from "@/components/Footer.vue";

import service1 from "@/assets/img/services/1.jpg";
import service2 from "@/assets/img/services/2.jpg";
import service3 from "@/assets/img/services/3.jpg";
import service4 from "@/assets/img/services/4.jpg";
import service5 from "@/assets/img/services/5.jpg";
import service6 from "@/assets/img/services/6.jpg";

export default {
  data() {
    return {
      service1,
      service2,
      service3,
      service4,
      service5,
      service6,
    };
  },
  components: {
    Header,
    SocialMediaLinksVue,
    Services,
    Blog,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
section.about .container {
  min-height: 570px;
}
section.about .bg {
  background-image: url("@/assets/img/home-about.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 55%;
  height: 100%;
  content: "";
  position: absolute;
  top: -12px;
  left: 0;
}

section.services {
  background-image: url("@/assets/img/patterns/map-pattern.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

section.mission .bg::before {
  position: absolute;
  left: -6px;
  top: 0;
  width: 10px;
  @apply bg-primary-black;
  content: "";
  height: 100%;
}

section.mission .bg::after {
  position: absolute;
  right: -6px;
  top: 0;
  width: 10px;
  @apply bg-primary-black;
  content: "";
  height: 100%;
}
</style>
