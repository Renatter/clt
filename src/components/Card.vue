<template>
  <div @click="openModal(cardData)">
    <div class="border-[1px]">
      <img :src="cardData.img" alt="" />
      <div class="text-center">
        <div class="bg-[#DCD8D3]">
          <p>{{ cardData.tip }}</p>
        </div>
        <p>{{ cardData.title }}</p>
        <p>{{ cardData.price }} тг</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardData"],
  methods: {
    openModal(cardData) {
      this.$emit("card-clicked", cardData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
