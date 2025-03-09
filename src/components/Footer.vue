<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Add icons to library
library.add(faEnvelope, faGithub, faLinkedin, faWhatsapp);
</script>

<template>
  <footer class="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 py-6 text-center transition-all">
    <p>© 2024 Eric Brian De Guzman. All Rights Reserved.</p>

    <div class="flex justify-center mt-3 space-x-6">
      <!-- Email -->
      <a href="mailto:eric.deguzman0012@gmail.com" class="hover:text-blue-400 transition">
        <font-awesome-icon :icon="['fas', 'envelope']" class="text-xl" />
      </a>
      
      <!-- GitHub -->
      <a href="https://github.com/Eric-DG" target="_blank" class="hover:text-gray-400 transition">
        <font-awesome-icon :icon="['fab', 'github']" class="text-xl" />
      </a>

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/eric-brian" target="_blank" class="hover:text-blue-500 transition">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-xl" />
      </a>

      <!-- WhatsApp -->
      <a href="https://wa.me/your_whatsapp_number" target="_blank" class="hover:text-green-500 transition">
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-xl" />
      </a>
    </div>
  </footer>
</template>
