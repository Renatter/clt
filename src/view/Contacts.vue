<template>
  <div class="container px-[10px] pb-[20px]">
    <h1 class="font-bold text-[30px]"> {{ $t('message.contacts.company') }}</h1>
    <div class="pt-[30px]">
      <p class="f font-bold">{{ $t('message.contacts.title') }}</p>
      <p>{{ $t('message.contacts.adres1') }}</p>
      <div class="pt-[30px]">
        <p class="f font-bold">{{ $t('message.contacts.title1') }}</p>
        <p class="f">+7 702 950 73 05</p>
        <p><span class="f">E-mail:</span> rosi@bgmail.com</p>
      </div>
      <p class="f font-bold pt-[30px]">{{ $t('message.contacts.title2') }}</p>
      <p><span class="f">E-mail:</span> rosi@bgmail.com</p>
      <p class="f font-bold pt-[30px]">{{ $t('message.contacts.reclama') }}</p>
      <p class="pb-[20px]">
        {{ $t('message.contacts.adres1') }}
      </p>
      <p class="f font-bold pt-[30px]">{{ $t('message.contacts.maps') }}</p>
      <p class="pb-[20px]">
        {{ $t('message.contacts.adres1') }}
      </p>
    </div>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae29dce3fae674bef095d24bfa8db1c104bdaabf69f4f286ac286fbf77b8f8951&amp;source=constructor"
      width="100%"
      height="400"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
    methods: {
        setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
}
.f {
  font-weight: bold;
  padding-bottom: 5px;
}
</style>
