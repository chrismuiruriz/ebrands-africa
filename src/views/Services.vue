<template>
  <div class="overflow-x-hidden">
    <Header />

    <section class="relative bg-black">
      <div class="relative z-20 h-80">
        <div
          class="container relative mx-auto flex h-full max-w-screen-lg items-center p-4 md:px-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
        >
          <div
            class="absolute right-0 top-1/2 flex h-full -translate-y-2/4 items-end pb-8"
          >
            <img
              src="@/assets/img/footer/map.png"
              alt=""
              class="map mr-8 h-3/5 w-auto opacity-60"
            />
          </div>

          <div class="mx-auto pt-6 text-center">
            <h1 class="text-6xl font-extrabold text-white">Services</h1>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 w-full">
          <img src="@/assets/img/ribbon.png" class="h-4 w-full" alt="" />
        </div>
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

    <Footer backgroundColor="#ffffff" />
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
