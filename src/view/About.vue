<template>
  <div class="container px-[20px]">
    <h1 class="text-[30px] font-bold pb-[10px]">{{ $t('message.about.title') }}</h1>
    <p class="leading-[2] pb-[10px]">
     {{ $t('message.about.p1') }}
    </p>
    <img width="100%" src="https://bellavka.kz/img/other/hist.jpg" alt=""  class="pb-[10px]"/>
    <p class="pt-[10px] leading-[2]">
      {{ $t('message.about.p2') }}
      <br class="pt-[10px]" /> 
      <br />
     {{ $t('message.about.p3') }}
    </p>
    <h1 class="text-[20px] font-bold pt-[30px] pb-[10px]">{{ $t('message.about.title2') }}</h1>
    <p class="leading-[2]">
     {{ $t('message.about.p4') }}
    </p>
    
    <h1 class="text-[20px] font-bold pt-[30px] pb-[10px]">{{ $t('message.about.title3') }}</h1>
    <div class="flex gap-[10px] flex-wrap">
      <div class="bg-[#F3F3F6] p-[25px] max-w-[380px]">
        <p class="name font-bold">Айгерим</p>
        <p class="prof text-[#bd9365] my-[20px] font-bold">{{ $t('message.about.prof') }}</p>
        <p class="phone">
          <span class="font-bold">+7 702 950 73 04</span>({{ $t('message.about.kz') }})
        </p>
        <p class="phone mt-[20px]">
          <span class="font-bold">+7 702 950 73 06</span> ({{ $t('message.about.sng') }})
        </p>
      </div>
    <div class="bg-[#F3F3F6] p-[25px] max-w-[380px]">
        <p class="name font-bold">Айгерим</p>
        <p class="prof text-[#bd9365] my-[20px] font-bold">{{ $t('message.about.prof') }}</p>
        <p class="phone">
          <span class="font-bold">+7 702 950 73 04</span>({{ $t('message.about.kz') }})
        </p>
        <p class="phone mt-[20px]">
          <span class="font-bold">+7 702 950 73 06</span> ({{ $t('message.about.sng') }})
        </p>
      </div>
<div class="bg-[#F3F3F6] p-[25px] max-w-[380px]">
        <p class="name font-bold">Айгерим</p>
        <p class="prof text-[#bd9365] my-[20px] font-bold">{{ $t('message.about.prof') }}</p>
        <p class="phone">
          <span class="font-bold">+7 702 950 73 04</span>( {{ $t('message.about.kz') }})
        </p>
        <p class="phone mt-[20px]">
          <span class="font-bold">+7 702 950 73 06</span> ({{ $t('message.about.sng') }})
        </p>
      </div>
    </div>
    <p class="pt-[20px] leading-[2]">
      {{ $t('message.about.p5') }}
    </p>
  </div>
</template>

<script>
export default {
  methods: {
        setLocale(locale) {
      this.$i18n.locale = locale;
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 570px) {
  ul {
    font-size: 15px;
  }
  h1 {
    font-size: 20px;
    text-align: center;
  }
}
</style>
