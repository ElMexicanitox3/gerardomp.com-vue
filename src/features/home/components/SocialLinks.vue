<script setup lang="ts">
import GithubIcon from '@/assets/icons/githubIcon.vue';
import LinkedinIcon from '@/assets/icons/linkedinIcon.vue';
import type { SocialLink } from '@/core/data/profileData';
import { computed } from 'vue';

const props = defineProps<{
  social: SocialLink;
}>();

const iconComponent = computed(() => {
  switch (props.social.iconComponent) {
    case 'GithubIcon':
      return GithubIcon;
    case 'LinkedinIcon':
      return LinkedinIcon;
    default:
      return null;
  }
});
</script>

<template>
  <li class="list-row">
    <div>
      <component :is="iconComponent" class="size-10" />
    </div>
    <div class="list-col-grow">
      <a :href="social.url" target="_blank" rel="noopener noreferrer">
        <div>{{ social.name }}</div>
        <div class="text-xs font-semibold opacity-60">{{ social.username }}</div>
      </a>
    </div>
  </li>
</template>
