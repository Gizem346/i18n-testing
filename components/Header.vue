<script setup>
import { useI18n } from '#imports'
const { locale } = useI18n()
const { t } = useI18n()
const localePath = useLocalePath()

</script>

<template>
  <div>
    <p>{{ $t('header.header') }}</p>
    <div class="language-container">
      <form>
        <select v-model="locale">
          <option selected value="en">en</option>
          <option value="de">de</option>
        </select>
      </form>
    </div>

    <div class="navbar">
      <ul>
        <li><NuxtLink :to="localePath('about-us')">{{ $t('header.aboutUs') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('contact-us')">{{ $t('header.contactUs') }}</NuxtLink></li>

        <li><NuxtLinkLocale to='about'>{{ $t('header.aboutUs') }}</NuxtLinkLocale></li>
        <li><NuxtLinkLocale to='contact'>{{ $t('header.contactUs') }}</NuxtLinkLocale></li>
      </ul>
    </div>
  </div>
</template>