<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { onMounted } from 'vue'

import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <!-- navbar -->
  <nav
    class="bg-primary z-50 bg-opacity-50 shadow-md fixed left-1/2 transform -translate-x-1/2 w-[95%] mt-5 rounded-3xl border-secondary dark:bg-gray-900"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
        <img class="h-16 fixed" src="../src/assets/E.png" />
        <svg
          class="ml-24"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#ffffff"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          /></svg
        ><span
          class="ml-2 self-center text-xs text-white font-black whitespace-nowrap dark:text-white"
          >+639 495 948 969</span
        >
        <div class="mx-5 text-white">|</div>
        <svg
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"
            fill="#ffffff"
          ></path>
        </svg>
        <span
          class="ml-2 self-center text-xs text-white font-black whitespace-nowrap dark:text-white"
          >eric.deguzman0012@gmail.com</span
        >
      </a>

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full bg-transparent md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium bg-transparent flex flex-col p-4 md:p-0 mt-4 border border-secondary md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="/"
              class="block py-2 pl-3 pr-4 text-white font-montserrat rounded hover:bg-primary hover:text-primary md:hover:bg-transparent md:border-0 md:hover:text-pach md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/projects"
              class="block py-2 pl-3 pr-4 text-white font-montserrat rounded hover:bg-primary hover:text-primary md:hover:bg-transparent md:border-0 md:hover:text-pach md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Projects</a
            >
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />

  <footer
    class="bg-primary z-50 fixed bottom-0 w-full h-10 shadow-md left-1/2 transform -translate-x-1/2 mt-5 border-secondary dark:bg-gray-900"
  >
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm p-2 font-montserrat text-white sm:text-center dark:text-gray-400"
        >© 2023 <a href="#" class="font-montserrat hover:underline">De Guzman, Eric Brian</a>. All Rights Reserved.
      </span>
      <div class="flex mt-4 mr-5 space-x-5 sm:justify-center sm:mt-0">
        <a href="mailto:eric.deguzman0012@gmail.com" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"
              fill="#ffffff"
            ></path>
          </svg>
          <span class="sr-only">Discord community</span>
        </a>
        <a
          href="https://www.linkedin.com/in/eric-brian-de-guzman-69aa47266/"
          class="text-gray-200 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              fill="#ffffff"
            />
          </svg>
          <span class="sr-only">LinkedIn profile</span>
        </a>
        <a
          href="https://github.com/Ericx44"
          class="text-gray-200 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="sr-only">GitHub account</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<style>
body {
  background-color: #181a1b;
}
</style>
