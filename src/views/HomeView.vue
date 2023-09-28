<template>
  <div class="h-full w-[360px] md:w-[1000px] mx-auto">
    <div class="flex flex-col-reverse md:flex-row">
      <div class="h-12 w-full hidden md:block md:h-56"></div>
      <div class="h-12 w-full hidden md:block md:h-56"></div>
    </div>

    <!-- 2nd flex -->
    <div class="flex mt-24 md:mt-0">
      <div class="w-full p-5 mx-auto md:w-3/4 md:h-56">
        <div class="text-4xl font-anton md:text-6xl text-justify tracking-widest text-white">
          HELLO!
        </div>
        <div class="text-4xl font-anton md:text-6xl text-justify tracking-widest text-white">
          I AM ERIC BRIAN
        </div>
        <div class="text-4xl font-anton md:text-6xl text-justify tracking-widest text-white">
          MEJIA DE GUZMAN
        </div>
        <hr class="m-5 w-3/4 md:w-full" />
        <div
          class="indent-5 font-montserrat text-xs w-full md:w-full md:text-base leading-relaxed md:indent-10 text-justify tracking-wide text-white"
        >
          I'm a DOST scholar who studied Information Technology at Universidad de Dagupan. I
          excelled in creating impactful systems, like the award-winning Social Amelioration Program
          and an Augmented Reality Android app, which earned top honors in the research symposium.
          I've also led in university organizations and taken on challenging freelance projects.
        </div>
        <br />
        <div
          class="indent-5 font-montserrat text-xs w-full md:w-full md:text-base tracking-wide leading-relaxed md:indent-10 text-justify text-white"
        >
          Now, I'm eager to soar even higher with your company's support. I thrive in unfamiliar
          terrain, fearlessly embracing new technologies. With 2-3 years of PHP development
          experience and expertise in PHP, MySQL, and front-end technologies, I'm ready to excel as
          a backend developer. Let's inspire greatness together
        </div>
        <br />
        <div class="font-montserrat mt-2 text-xs md:mt-10 md:text-sm text-white">
          Download Curriculum Vitae
          <a
            class="text-blue-500 tracking-widest"
            href="https://drive.google.com/uc?export=download&id=1WLk8pu5FYDMzmdKwW4sEko9pksgTi5tt"
            download="DeGuzman_Eric_CV"
            >Here</a
          >.
        </div>
      </div>

      <div class="w-1/2 h-56 absolute md:relative">
        <div
          class="un-photo border border-1 w-full h-full md:fixed"
          style="
            background-image: url('https://res.cloudinary.com/dwhyxh1zm/image/upload/v1695708038/my-pic_h9pcya.png');
            --row-total: 5;
          "
        >
          <img
            class="h-[15%] right-0 bottom-12 md:h-[60%] md:right-0 fixed md:sticky"
            src="../assets/my-pic.png"
          />

          <div class="un-photo__popup">
            <img src="../assets/my-pic.png" alt="pic" />
            <div class="un-photo__row" style="--row-index: 0; --random: 0.23">
              <div class="un-photo__row-inner">
                <div class="text-xs p-1 md:text-5xl font-bold text-white md:p-5 bg-[#181a1b] w-3/4">
                  Web Developer
                </div>
              </div>
            </div>
            <div class="un-photo__row" style="--row-index: 1; --random: 0.72">
              <div class="un-photo__row-inner"></div>
            </div>
            <div class="un-photo__row" style="--row-index: 2; --random: 0.11">
              <div class="un-photo__row-inner"></div>
            </div>
            <div class="un-photo__row" style="--row-index: 3; --random: 0.5">
              <div class="un-photo__row-inner"></div>
            </div>
            <div class="un-photo__row" style="--row-index: 4; --random: 0.39">
              <div class="un-photo__row-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 3rd flex -->
  <div class="flex flex-col-reverse md:flex-row">
    <div class="h-12 w-full hidden md:block md:h-56"></div>
    <div class="h-12 w-full hidden md:block md:h-56"></div>
  </div>
</template>
<style>
body {
  background-color: #181a1b;
}
.un-photo {
  max-width: 100%;
  margin: auto;
  visibility: hidden;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.un-photo > img {
  visibility: visible;
  display: block;
  transition:
    opacity 0.3s linear,
    transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1) !important;
}

.un-photo:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 2;
  visibility: visible;
  opacity: 0;
  transition: opacity 0.4s linear;
  pointer-events: none;
}

.un-photo:hover {
  z-index: 999;
}

.un-photo:hover > img {
  opacity: 1;
  transform: scale(1.2);
}

.un-photo__popup {
  z-index: 99;
  position: fixed;
  display: inline-block;
  width: 80%;
  max-width: 40%;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px red;
  pointer-events: none;
  background: inherit;
  visibility: visible;
  z-index: 999;
}

.un-photo__popup img {
  opacity: 1;
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  outline: solid 1px blue;
}

@supports (--row-size: calc(100% / var(--row-total))) {
  .un-photo__popup {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s linear;
  }

  .un-photo__row {
    --row-size: calc(100% / var(--row-total));
    position: absolute;
    width: 100%;
    left: 0%;
    top: calc(0% + (var(--row-size) * var(--row-index)));
    height: var(--row-size);
    background: inherit;
    overflow: hidden;
    transform-origin: 0 0;
    transform-origin: calc(var(--random) * 50%) 50%;
    transform: scale(0.8) translate(0%, calc(var(--random) * 20%));
    transform: translate(0, 0) scale(1);
    animation-name: photo-bounce;
    animation-fill-mode: both;
    animation-direction: forwards;
    animation-delay: 0.1s;
    animation-duration: 0.4s;
    animation-timing-function: steps(1);
  }

  .un-photo__row-inner {
    opacity: 1;
    visibility: visible;
    position: absolute;
    background: inherit;
    width: 100%;
    height: calc(100% * var(--row-total));
    transform: translateY(calc(-1 * (100% / var(--row-total)) * var(--row-index)));
  }

  .un-photo:hover .un-photo__popup {
    opacity: 1;
  }

  .un-photo:hover:before {
    opacity: 0.4;
  }

  .un-photo:hover .un-photo__row {
    animation-name: photo-bounce2;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: reverse;
    animation-timing-function: steps(1);
  }
}

@keyframes photo-bounce {
  25% {
    transform: translate(-10%, 0%) scale(1);
  }
  50% {
    transform: translate(10%, -2%) scale(1.3);
  }
  75% {
    transform: translate(-3%, 2%) scale(0.9);
  }
}

@keyframes photo-bounce2 {
  25% {
    transform: translate(5%, 0%) scale(1);
  }
  50% {
    transform: translate(-10%, -2%) scale(1.3);
  }
  75% {
    transform: translate(10%, 5%) scale(0.9);
  }
}

@media screen and (max-width: 768px) {
  .flex-col-reverse {
    flex-direction: column-reverse; /* Reverse the order of columns */
  }
}
</style>
