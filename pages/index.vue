<template>
  <main role="main" class="telegramForm">
    <Form />
  </main>
</template>

<script>
import Form from "~/components/Form.vue";

export default {
  components: {
    Form
  }
};
</script>

<style lang="sass">
.telegramForm
	display: flex
	justify-content: center
	align-items: center
	height: 100vh
	padding: 0 15px
</style>