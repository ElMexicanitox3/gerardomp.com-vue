<script setup lang="ts">
import EmailIcon from '@/assets/icons/emailIcon.vue';
import PhoneIcon from '@/assets/icons/phoneIcon.vue';
import PinIcon from '@/assets/icons/pinIcon.vue';
import type { ContactInfo } from '@/core/data/profileData';
import { computed } from 'vue';

const props = defineProps<{
  contact: ContactInfo;
}>();

const iconComponent = computed(() => {
  switch (props.contact.iconComponent) {
    case 'EmailIcon':
      return EmailIcon;
    case 'PhoneIcon':
      return PhoneIcon;
    case 'PinIcon':
      return PinIcon;
    default:
      return null;
  }
});

const labelKey = computed(() => `porfileCard.${props.contact.type}`);
</script>

<template>
  <li class="list-row">
    <div>
      <component :is="iconComponent" class="size-10" />
    </div>
    <div class="list-col-grow">
      <component
        :is="contact.url ? 'a' : 'div'"
        :href="contact.url"
        :class="{ 'hover:opacity-80': contact.url }"
      >
        <div>{{ $t(labelKey) }}</div>
        <div class="text-xs font-semibold opacity-60">
          {{ contact.displayValue || contact.value }}
        </div>
      </component>
    </div>
  </li>
</template>
