<template>
<svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
<path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"/>
<path :fill="isAvailaible ? '#52B4E3' : '#dbdbdb'" d="M76.5,67c-0.6,0-1.3-0.2-1.8-0.6l-20-15c-1.3-1-1.6-2.9-0.6-4.2c1-1.3,2.9-1.6,4.2-0.6l20,15c1.3,1,1.6,2.9,0.6,4.2C78.3,66.6,77.4,67,76.5,67z"/>
<path :fill="isAvailaible ? '#52B4E3' : '#dbdbdb'" d="M56.5,82c-0.9,0-1.8-0.4-2.4-1.2c-1-1.3-0.7-3.2,0.6-4.2l20-15c1.3-1,3.2-0.7,4.2,0.6c1,1.3,0.7,3.2-0.6,4.2l-20,15C57.8,81.8,57.1,82,56.5,82z"/>
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