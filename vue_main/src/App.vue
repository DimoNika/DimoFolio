<template>
<!-- rgb(134, 134, 255) -->
    <div  class="navbar navbar-expand-lg fixed-top" style="background-color: rgb(20,67,186); height: 70px; margin: 0; padding: 0;">
        <div class="container-fluid my-auto">
            <div class="btn-group position-absolute">
                
                <Transition name="swirl">            
                <router-link to="/" v-show="!showNavBar" class="myHeaderBtnAnim4">
                        <div class="px-3 pborder-0 hvr-underline-from-center text-start w-100 myNavButtons" id="headerNavBtn1" style="width:max-content" >
                            <span class="hover-text" style="color: rgb(184,209,249);">
                                Home
                            </span>
                        </div>
                    </router-link>
                </Transition>

                <Transition name="swirl" v-show="!showNavBar" class="myHeaderBtnAnim3">
                    <router-link to="/projects">
                        <div class="px-3 border-0 hvr-underline-from-center text-start w-100 myNavButtons" id="headerNavBtn2">
                            <span class="hover-text" style="color: rgb(184,209,249);">
                                Projects
                            </span>
                        </div>
                    </router-link>
                </Transition>

                <Transition name="swirl" v-show="!showNavBar" class="myHeaderBtnAnim2">
                    <router-link to="/about">
                        <div class="px-3 border-0 hvr-underline-from-center text-start w-100 myNavButtons" id="headerNavBtn3">
                            <span class="hover-text" style="color: rgb(184,209,249);">
                                Info
                            </span>
                        </div>
                    </router-link>
                </Transition>

                <Transition name="swirl" style="color: rgb(184,209,249);">
                    <router-link to="/contact" v-show="!showNavBar" class="myHeaderBtnAnim1">
                        <div class="px-3 border-0 hvr-underline-from-center text-start w-100 myNavButtons" id="headerNavBtn4">
                            <span class="hover-text">
                                Contact
                            </span>
                        </div>
                    </router-link>
                </Transition>


            </div>
        </div>
    </div>


    <div class="container-fluid" style="margin-top: 80px;">
        <Transition>

        </Transition>
          
        <div class="row">
            <!-- Start of buttons -->
            <div class="col-lg-2">
                <div class="btn-group-vertical"  style="position: absolute; min-width: 50px; min-height: 10px;">
                    
                <Transition appear>
                    <router-link to="/" v-show="showNavBar" class="myBtnAnim1">
                        <div class="p-3 border-0 hvr-sweep-to-right hvr-skew-forward text-start w-100" id="navBtn1">
                            <span class="hover-text">
                                Home
                            </span>
                        </div>
                    </router-link>
                </Transition>

                <Transition appear>
                    <router-link to="/projects" v-show="showNavBar" class="myBtnAnim2">
                        <div class="p-3 border-0 hvr-sweep-to-right hvr-skew-forward text-start w-100" id="navBtn2">
                            <span class="hover-text">
                                Projects
                            </span>
                        </div>
                    </router-link>
                    </Transition>
                    

                <Transition appear>
                    <router-link to="/about" v-show="showNavBar" class="myBtnAnim3">
                        <div class="p-3 border-0 hvr-sweep-to-right hvr-skew-forward text-start w-100" id="navBtn3">
                            <span class="hover-text" style="width: 100%;">
                                Info
                            </span>
                        </div>
                    </router-link>
                </Transition>
                
                <Transition appear>
                    <router-link to="/contact" v-show="showNavBar" class=" myBtnAnim4">
                        <div class="p-3 border-0 hvr-sweep-to-right hvr-skew-forward text-start w-100" id="navBtn4" >
                            <span class="hover-text">
                                Contact 
                            </span>
                        </div>
                    </router-link>
                </Transition>
                

                </div>
            </div>
            <!-- End of buttons -->

            <!-- Start center content -->
            <div class="col-lg-8">
                <!-- Элементы для центрирования -->
                <div class="" style="text-align: center; border: 1px solid red; height: 2000px;">
                    
                    <router-view/>
                </div>
            
            </div>
            <!-- End center content -->

            <!-- reserve START -->
            <div class="col-lg-2">

            </div>
            <!-- reserve END -->

        </div>

    </div>

</template>



<script>


export default {
    data() {
        return {
            activeComp: '',
            showNavBar: true,
        }
    },
    mounted: function () {
        
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);

            console.log(this.showNavBar);
            if (window.scrollY > 2 || window.innerWidth < 1000) {
                this.showNavBar = false;
            } else {
                this.showNavBar = true;
            }
        }),
        window.addEventListener('resize', () => {
            console.log(this.showNavBar);
            if (window.scrollY > 2 || window.innerWidth < 1000) {
                this.showNavBar = false;
            } else {
                this.showNavBar = true;
            }
        })

    },
    computed : {
        
    }
}    




</script>

<style scoped> 


.myNavButtons {
    max-height: 60px;
}



a {
    width: 100%;
}
/* START nav anim */
.v-enter-from {
    opacity: 0;
    translate: -100px 0;
  }
  .v-enter-to {
    opacity: 1;
    translate: 0 0;
  }
  .v-leave-from {
    opacity: 1;
    translate: 0 0;
  }
  .v-leave-to {
    opacity: 0;
    translate: -200px 0;
  }

  /* END nav anim */

  /* START header nav anim */
  .swirl-enter-from {
    opacity: 0;
    translate: 0 -100px;
  }
  .swirl-enter-to {
    opacity: 1;
    translate: 0 0;
  }
  .swirl-leave-from {
    opacity: 1;
    translate: 0 0;
  }
  .swirl-leave-to {
    opacity: 0;
    translate: 0 -100px;
  }
  /* END header nav anim */


.myBtnAnim1 {
    transition: 0.5s;
    transition-delay: 0.75s;
}
.myBtnAnim2 {
    transition: 0.5s;
    transition-delay: 0.5s;
}.myBtnAnim3 {
    transition: 0.5s;
    transition-delay: 0.25s;
}.myBtnAnim4 {
    transition: 0.5s;

}


.myHeaderBtnAnim1 {
    transition: 1.2s;
    transition-delay: 0.75s;
}
.myHeaderBtnAnim2 {
    transition: 1.2s;
    transition-delay: 0.5s;
}
.myHeaderBtnAnim3 {
    transition: 1.2s;
    transition-delay: 0.25s;
}
.myHeaderBtnAnim4 {
    transition: 1.2s;
}

</style>
