<template>
<svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
<path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"/>
<path :fill="isAvailaible ? '#52B4E3' : '#dbdbdb'" d="M51.5,67c-0.9,0-1.8-0.4-2.4-1.2c-1-1.3-0.7-3.2,0.6-4.2l20-15c1.3-1,3.2-0.7,4.2,0.6c1,1.3,0.7,3.2-0.6,4.2l-20,15C52.8,66.8,52.1,67,51.5,67z"/>
  <path :fill="isAvailaible ? '#52B4E3' : '#dbdbdb'" d="M71.5,82c-0.6,0-1.3-0.2-1.8-0.6l-20-15c-1.3-1-1.6-2.9-0.6-4.2s2.9-1.6,4.2-0.6l20,15c1.3,1,1.6,2.9,0.6,4.2C73.3,81.6,72.4,82,71.5,82z"/>
</svg>
</template>

<script>
export default {
  props: {
    isAvailaible: {
      type: Boolean,
      required: true
    },
  }
}
</script>