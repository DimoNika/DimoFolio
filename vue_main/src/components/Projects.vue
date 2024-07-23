<template>
    
<div class="pagePreviewHolder"> <!-- container for full scrreen size holding -->
    <h3 class="mt-5">
        {{ $t("projects.heading") }}
    </h3>


    <div style="max-width: 550px; margin-top: 150px;" class="mx-auto">

        <!-- First elem -->
        <div v-on:click="accClick('accRef1', 'accRef1Panel')">
            <button ref="accRef1" class="myaccordion"><span class="accText" style="color: grey;">04.11.2023 - <span style="margin: 0 1.4rem 0;">{{ $t("projects.now") }}</span> </span> - Spokusa.kiev.ua</button>
        </div>
        <div ref="accRef1Panel" class="panel">
            <p class="text-start">
                <b>Spokusa.kiev.ua</b> {{ $t("projects.spokusaDesc1") }} <b> Django </b> {{ $t("projects.spokusaDesc2") }} 
                <br>
                <a href="#spokusa" >Details</a>
            </p>
        </div>


        <!-- Second elem -->
        <div v-on:click="accClick('accRef2', 'accRef2Panel')">
            <button ref="accRef2" class="myaccordion"><span class="accText" style="color: grey;">22.05.2024 - <span style="margin: 0 1.4rem 0;">{{ $t("projects.now") }}</span> </span> - PhotoArch</button>
        </div>
        <div ref="accRef2Panel" class="panel">
            <p class="text-start">
                <b>PhotoArch</b> {{ $t("projects.photoArchDesc1") }} <b> Django </b>  {{ $t("projects.photoArchDesc2") }}
                <br>
                <a href="#photoArch" >Details</a>
            </p>
        </div>


        <!-- Third elem -->
        <div v-on:click="accClick('accRef3', 'accRef3Panel')">
            <button ref="accRef3" v-bind:class="{active: activeVar}" class="myaccordion"><span style="color: grey;">27.10.2023 - <span >30.10.2023</span> </span> - CB_game</button>
        </div>
        <div ref="accRef3Panel" class="panel">
            <p class="text-start">
                <b>CB_game</b> {{ $t("projects.cbgameDesc1") }}
            <br>
            <a href="#cb_game" >Details</a>
            </p>
        </div>
        


    </div>
</div>  <!-- end of container for full scrreen size holding -->

<hr>

<!-- Spokusa site div -->
<div id="spokusa" style="min-height: calc(100vh - 70px);"> 
    <!-- calc(100%-70px) -->
    <h1 >
        spokusa.kiev.com
    </h1>

    <div class="text-start m-auto" style="max-width: 800px; max-height: 470px; ">
        <a target="_blank" href="https://spokusa.kiev.ua/">
            <img src="@/assets/images/macImageSpokusa2.png" class="hvr-grow" alt="Spokusa site image" style="max-width: 100%;">
        </a>
        <!-- <img src="@/assets/images/macImagePresset.png" alt="Spokusa Image" style="width: 800px; position: absolute;">
        <iframe src="https://test.spokusa.kiev.ua/" class="spokusaIFrame"></iframe> -->
        <!-- 2560x1600 -->
    </div>


    <div class="row">
        <div class="col-xxl-6">
            <h3 class="mt-3">
                {{ $t("projects.techLangsUsed") }}
            </h3>
            <div class="row">
                <div class="col-md-6">
                    <h5 class="mt-2">
                        <b>
                            {{ $t("projects.techs") }}
                        </b>
                    </h5>
                    <ul class="text-start mt-4" style="min-width: 190px;">
                        <b>
                        <li><img class="techIcon" src="@/assets/images/icons/djangoIcon.svg" alt="Django icon">Django</li>
                        <li><img class="techIcon" src="@/assets/images/icons/mySQLicon.svg">MySql</li>
                        <li><img class="techIcon" src="@/assets/images/icons/BootstrapIcon.png">Bootstrap 5</li>
                        <li><img class="techIcon" src="@/assets/images/icons/GitIcon.png">Git</li>
                        <li><img class="techIcon" src="@/assets/images/icons/jQueryIcon.webp">jQuery</li>
                        <li><img class="techIcon" src="@/assets/images/icons/ApacheIcon.png">Apache</li>
                        </b>
                    </ul>
                </div>

                <div class="col-md-6">
                    <h5 class="mt-2">
                        <b>
                            {{ $t("projects.langs") }}
                        </b>    
                    </h5>
                    <ul class="text-start mt-4" style="min-width: 326px;">
                        <b>
                        <li><img class="bigTechIcon" src="@/assets/images/icons/PythonIcon.png">Python 3.12</li>
                        <li><img class="bigTechIcon" src="@/assets/images/icons/htmlcssjsIcon.png">html/JavaScript/CSS</li>
                        </b>
                    </ul>
                </div>

            </div> 



        </div>
        <div class="col-xxl-6">
            <div style="margin-top: 3rem;"> <!-- Description -->
                <b>Spokusa.kiev.ua</b>
                {{ $t("projects.spokusaDesc1") }}
                <b> Django </b>
                {{ $t("projects.spokusaDesc2") }}

            </div>
            
        </div>



    </div> 

</div><!-- END of Spokusa site div -->
<hr>
<!-- PhotoArch site div -->
<div id="photoArch" style="min-height: calc(100vh - 70px);"> 

<h1 >
    PhotoArch
</h1>

<div class="text-start m-auto" style="max-width: 800px; max-height: 470px;">
    <a href="#photoArch">
        <img src="@/assets/images/macImagePhotoArch.png" class="hvr-grow" alt="Spokusa site image" style="max-width: 100%;">
    </a>
    <!-- <img src="@/assets/images/macImagePresset.png" alt="Spokusa Image" style="width: 800px; position: absolute;">
    <iframe src="https://test.spokusa.kiev.ua/" class="spokusaIFrame"></iframe> -->
    <!-- 2560x1600 -->
</div>


<div class="row">
    <div class="col-xxl-6">
        <h3 class="mt-3">
            {{ $t("projects.techLangsUsed") }}
        </h3>
        <div class="row">
            <div class="col-md-6">
                <h5 class="mt-2">
                    <b>
                        {{ $t("projects.techs") }}
                    </b>
                </h5>
                <ul class="text-start mt-4" style="min-width: 190px;">
                    <b>
                    <li><img class="techIcon" src="@/assets/images/icons/djangoIcon.svg" alt="Django icon">Django</li>
                    <li><img class="techIcon" src="@/assets/images/icons/mySQLicon.svg">MySql</li>
                    <li><img class="techIcon" src="@/assets/images/icons/BootstrapIcon.png">Bootstrap 5</li>
                    <li><img class="techIcon" src="@/assets/images/icons/GitIcon.png">Git</li>
                    <!-- <li><img class="techIcon" src="@/assets/images/icons/jQueryIcon.webp">jQuery</li> -->
                    <li><img class="techIcon" src="@/assets/images/icons/fancyappsIcon.svg">fancyapps/fancybox</li>
                    <li><img class="techIcon" src="@/assets/images/icons/ApacheIcon.png">Apache</li>
                    </b>
                </ul>
            </div>

            <div class="col-md-6">
                <h5 class="mt-2">
                    <b>
                        {{ $t("projects.langs") }}
                    </b>    
                </h5>
                <ul class="text-start mt-4" style="min-width: 326px;">
                    <b>
                    <li><img class="bigTechIcon" src="@/assets/images/icons/PythonIcon.png">Python 3.12</li>
                    <li><img class="bigTechIcon" src="@/assets/images/icons/htmlcssjsIcon.png">html/JavaScript/CSS</li>
                    </b>
                </ul>
            </div>

        </div> 



    </div>
    <div class="col-xxl-6">
        <div style="margin-top: 3rem;"> <!-- Description -->
            
            <span>{{ $t("projects.photoArchDetailedDesc1") }}</span>
            <span><b>{{ $t("projects.photoArchDetailedDesc2") }}</b></span>
            <span>{{ $t("projects.photoArchDetailedDesc3") }}</span>
            <span><b>{{ $t("projects.photoArchDetailedDesc4") }}</b></span>
            <span>{{ $t("projects.photoArchDetailedDesc5") }}</span>
            <span><b>{{ $t("projects.photoArchDetailedDesc6") }}</b></span> 
            <span>{{ $t("projects.photoArchDetailedDesc7") }}</span>
            
        </div>
        
    </div>



</div>
</div>
<hr>

<!-- CB_game site div -->
<div id="cb_game" style="min-height: calc(100vh - 70px);"> 

<h1 >
    CB_game
</h1>

<div class="text-start m-auto" style="max-width: 800px; max-height: 470px;">
    <a target="_blank" href="https://dimonika.github.io/CB_game/">
        <img src="@/assets/images/macImageCBgame.png" class="hvr-grow" alt="Spokusa site image" style="max-width: 100%;">
    </a>
    <!-- <img src="@/assets/images/macImagePresset.png" alt="Spokusa Image" style="width: 800px; position: absolute;">
    <iframe src="https://test.spokusa.kiev.ua/" class="spokusaIFrame"></iframe> -->
    <!-- 2560x1600 -->
</div>


<div class="row">
    <div class="col-xxl-6">
        <h3 class="mt-3">
            {{ $t("projects.techLangsUsed") }}
        </h3>
        <h5 class="mt-2 ms-4 text-start">
            <b>
                {{ $t("projects.langs") }}
            </b>    
        </h5>
        <b>
        <ul class="text-start">
            <li><img class="bigTechIcon" src="@/assets/images/icons/htmlcssjsIcon.png">html/JavaScript/CSS</li>
        </ul>
        </b>    
    </div>
    <div class="col-xxl-6">
        <div style="margin-top: 3rem;"> <!-- Description -->
            <b>{{ $t("projects.cbgameDetailedDesc1") }}</b>
            {{ $t("projects.cbgameDetailedDesc2") }}
            <b>{{ $t("projects.cbgameDetailedDesc3") }}</b>
        </div>
        
    </div>



</div>
</div>
    



    
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
        show1: true,
        activeVar: false,
        }
    },
    computed: {
    // Вычисляемое свойство
    computedValue: function () {
        console.log(document.body.scrollHeight);
      
    }},
    
    methods: {

        scrollTo(anchor) {
            $('html, body').animate({
            scrollTop: $(anchor).offset().top
            }, 1000);
        },

        accClick(myAcc, myPannel) {
            console.log("something");
            
            let thisAcc = this.$refs[myAcc];
            let thisPanel = this.$refs[myPannel]
            
            if (thisAcc.classList.contains("active")){
                console.log("contains")
                thisAcc.classList.remove("active");
                thisPanel.style.maxHeight = 0;
                
            } else {
                console.log("not contains")
                thisAcc.classList.add("active");
                thisPanel.style.maxHeight = thisPanel.scrollHeight + "px";
            }

        },
    }
}

</script>

<style>
.techIcon {
    height: 30px;
    
    margin-right: 1rem;
}

.bigTechIcon {
    width: 100px;
    margin-right: 1rem;
}

.spokusaIFrame {
    top: 33px;
    left: 90px;
    height: 1066px;
    width: 1706px;
    z-index: 1;
    transform: scale(0.3649);
    position: absolute;
    transform-origin: 0 0;
    
}

.pagePreviewHolder {
  height: calc(100vh - 70px);
  min-height: 600px;
  width: 100%;
}


.myaccordion {
  background-color: #fff;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .myaccordion:hover {
  background-color: #ccc;
}

.myaccordion:after {
  content: '\002B';
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
</style>
    