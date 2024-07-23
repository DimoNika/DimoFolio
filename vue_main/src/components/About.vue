<template>
<div class="mt-4">

    <div class="row text-start">
        <div class="col-md-6">
            <h4 class="text-center">{{ $t("about.mainTechSkills") }}</h4>

            <ul style="list-style-type: circle;">
                <li>{{ $t("about.mainLangs") }}</li>
                <li>{{ $t("about.mainFrameTools") }}</li>
                <li>{{ $t("about.mainOS") }}</li>
                <li>{{ $t("about.mainDB") }}</li>
                <li>{{ $t("about.mainVCS") }}</li>
            </ul>


            <h4 class="text-center">{{ $t("about.otherTechSkills") }}</h4>
            <ul style="list-style-type: circle;">
                <li>{{ $t("about.otherLangs") }}</li>
                <li>{{ $t("about.otherTG") }}</li>
            </ul>
            <p class="m-3">
                <router-link to="/projects" class="d-inline">{{ $t("about.projectsHref") }}</router-link>
                <span>
                {{ $t("about.projectsDeveloped") }}
            </span> 
            </p>
        </div>
        <!-- Next column -->
        <div class="col-md-6">
            <h4 class="text-center">{{ $t("about.educationWord") }}</h4>
            <b>
                <p class="">{{ $t("about.KITUdate") }}</p>
            </b>
            <p class="">{{ $t("about.KITUname") }}<a class="ms-2" target="_blank" href="https://kitu.nau.edu.ua/">Check</a></p>
            <!-- <p class="text-center">{{ $t("about.KITUplace") }}</p> -->
            <p class="">{{ $t("about.KITUspecialization") }}</p>

            <hr>
            <p>To be continued...</p>
            
        </div>
    </div>
    <!-- Top part above -->
    <hr>
    <p>thinking about writing story about me and programming here</p>



</div>
</template>


<script>
</script>


<style>


</style>
