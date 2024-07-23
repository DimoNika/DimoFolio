
<template>
<div style="min-height: calc(100vh - 170px);">
    <img class="m-auto" src="@/assets/images/ava_croped.png" alt="DimoNika avatar" style="width: 25%; min-width: 250px;"  aspect-ratio="1/1">
    
    <h4>{{ $t("home.name") }}</h4>
    
    <p style="margin-bottom: 0px;">{{ $t("home.ageAndProf") }}</p>
    <p><a target="_blank" href="https://github.com/DimoNika">GitHub</a></p>
    
    <p>
        <b>
        <span>{{ $t('home.description0') }}</span>
        </b>
        <span>{{ $t('home.description1') }}</span>
        <br>
        <span>{{ $t('home.description2') }}</span>
        <br>
        <span>{{ $t('home.description3') }}</span>
        <br>
        <span>
        <router-link to="/about">
            <span class="mx-3">{{ $t('home.detailedAboutLink') }}</span>
        </router-link>
        <!-- <br> -->
        <router-link to="/contact">
            <span class="mx-3">{{ $t('home.contactLink') }}</span>
        </router-link>
        </span>
    </p>
    

    

</div>
</template>



<script setup>
  
</script>

<style>
    
</style>