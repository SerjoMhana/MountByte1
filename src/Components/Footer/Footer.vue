<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Site Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="@/assets/logo.png" alt="MountByte Logo" class="h-14 w-auto" />
            <h2 class="text-2xl font-bold text-primary-400">MountByte</h2>
          </div>
          <p class="text-gray-400">{{ $t('footer.description') }}</p>
          <div class="flex space-x-4 rtl:space-x-reverse">
            <a href="https://www.facebook.com/profile.php?id=100067036129373" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h3 class="text-lg font-semibold text-gray-200">{{ $t('footer.links') }}</h3>
          <ul class="mt-4 space-y-2">
            <li><router-link to="/" class="text-gray-400 hover:text-white">{{ $t('nav.home') }}</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-white">{{ $t('nav.about') }}</router-link></li>
            <li><router-link to="/works" class="text-gray-400 hover:text-white">{{ $t('nav.works') }}</router-link></li>
            <li><router-link to="/contact" class="text-gray-400 hover:text-white">{{ $t('nav.contact') }}</router-link></li>
          </ul>
        </div>

        <!-- Newsletter Subscription -->
        <div>
          <h3 class="text-lg font-semibold text-gray-200">{{ $t('footer.newsletter') }}</h3>
          <p class="mt-4 text-gray-400">{{ $t('footer.newsletter_prompt') }}</p>
          <form class="mt-4 flex">
            <input type="email" :placeholder="$t('footer.email_placeholder')" class="w-full px-4 py-2 text-gray-800 bg-white ltr:rounded-l-md rtl:rounded-r-md focus:outline-none">
            <button type="submit" class="px-4 py-2 bg-primary-600 hover:bg-primary-700 ltr:rounded-r-md rtl:rounded-l-md">{{ $t('footer.subscribe') }}</button>
          </form>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} MountByte. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
