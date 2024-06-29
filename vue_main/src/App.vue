<template>
<!-- rgb(134, 134, 255) -->
    <div  class="navbar navbar-expand-lg fixed-top" style="background-color: rgb(20,67,186); height: 70px; margin: 0; padding: 0;">
        <div class="container-fluid my-auto">
            <div class="dropdown" v-show="showDropdown">
                    <button class="btn my-dropdown-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <router-link to="/" class="dropdown-item">
                            <span class>
                                Home
                            </span>
                        </router-link>
                        <router-link to="/projects" class="dropdown-item">
                            <span class>
                                Projects
                            </span>
                        </router-link>
                        <router-link to="/about" class="dropdown-item">
                            <span class>
                                Info
                            </span>
                        </router-link>
                        <router-link to="/Contact" class="dropdown-item">
                            <span class>
                                Contact
                            </span>
                        </router-link>
                    </ul>
                </div>
			<!-- btn group START -->
            <div class="btn-group ">
                
                <Transition name="swirl">            
                    <router-link to="/" v-show="showTopNavBar" class="myHeaderBtnAnim4">
                        <div class="px-3 pborder-0 hvr-underline-from-center text-start w-100 myNavButtons" id="headerNavBtn1" style="width:max-content" >
                            <span class="hover-text" style="color: rgb(184,209,249);">
                                Home
                            </span>
                        </div>
                    </router-link>
                </Transition>

                <Transition name="swirl" v-show="showTopNavBar" class="myHeaderBtnAnim3">
                    <router-link to="/projects">
                        <div class="px-3 border-0 hvr-underline-from-center text-start w-100 myNavButtons" id="headerNavBtn2">
                            <span class="hover-text" style="color: rgb(184,209,249);">
                                Projects
                            </span>
                        </div>
                    </router-link>
                </Transition>

                <Transition name="swirl" v-show="showTopNavBar" class="myHeaderBtnAnim2">
                    <router-link to="/about">
                        <div class="px-3 border-0 hvr-underline-from-center text-start w-100 myNavButtons" id="headerNavBtn3">
                            <span class="hover-text" style="color: rgb(184,209,249);">
                                Info
                            </span>
                        </div>
                    </router-link>
                </Transition>

                <Transition name="swirl" style="color: rgb(184,209,249);">
                    <router-link to="/contact" v-show="showTopNavBar" class="myHeaderBtnAnim1">
                        <div class="px-3 border-0 hvr-underline-from-center text-start w-100 myNavButtons" id="headerNavBtn4">
                            <span class="hover-text">
                                Contact
                            </span>
                        </div>
                    </router-link>
                </Transition>


            </div>
            <div class="ms-auto" >
			
				<div class="toggle slide">
		 			<input id="languageCheckbox" type="checkbox" checked/>
		  			<label for="languageCheckbox">
	            		<div class="switch_card slide"></div>    
          			</label>
        		</div>

			</div>
        </div>
    </div>


    <div class="container-fluid" style="margin-top: 80px;" >
        <Transition>

        </Transition>
          
        <div class="row">
            <!-- Start of buttons -->
            <div class="col-lg-2">
                <div class="btn-group-vertical"  style="position: absolute; min-width: 50px; min-height: 10px;">
                    
                <Transition appear>
                    <router-link to="/" v-show="showLeftNavBar" class="myBtnAnim1">
                        <div class="p-3 border-0 hvr-sweep-to-right hvr-skew-forward text-start w-100" id="navBtn1">
                            <span class="hover-text">
                                Home
                            </span>
                        </div>
                    </router-link>
                </Transition>

                <Transition appear>
                    <router-link to="/projects" v-show="showLeftNavBar" class="myBtnAnim2">
                        <div class="p-3 border-0 hvr-sweep-to-right hvr-skew-forward text-start w-100" id="navBtn2">
                            <span class="hover-text">
                                Projects
                            </span>
                        </div>
                    </router-link>
                    </Transition>
                    

                <Transition appear>
                    <router-link to="/about" v-show="showLeftNavBar" class="myBtnAnim3">
                        <div class="p-3 border-0 hvr-sweep-to-right hvr-skew-forward text-start w-100" id="navBtn3">
                            <span class="hover-text" style="width: 100%;">
                                Info
                            </span>
                        </div>
                    </router-link>
                </Transition>
                
                <Transition appear>
                    <router-link to="/contact" v-show="showLeftNavBar" class=" myBtnAnim4">
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
            showTopNavBar: false,
            showLeftNavBar: true,
            showDropdown: false,
        }
    },

    methods: {
        
        checkButtonsState() {
            console.log(window.scrollY);
            console.log(this.showNavBar);
            
            if (window.innerWidth < 600) {
                this.showTopNavBar = false;
                this.showLeftNavBar = false;
                this.showDropdown = true;
                console.log("dropdown")
                return
            } else if (window.scrollY > 2 || window.innerWidth < 1000) {
                this.showTopNavBar = true;
                this.showLeftNavBar = false;
                this.showDropdown = false;
                return
            } else {
                this.showTopNavBar = false;
                this.showLeftNavBar = true;
                this.showDropdown = false;
            }
        },
    },

    mounted: function () {

        document.addEventListener("DOMContentLoaded", () => {
            console.log("onload")
            
            this.checkButtonsState();
        });

        window.addEventListener('scroll', this.checkButtonsState),

        window.addEventListener('resize', this.checkButtonsState)

    },
    computed : {
        
    }
}    




</script>

<style scoped> 

.my-dropdown-btn {
    background-color: rgb(184,209,249)
}

/* START of css styles of language switch */
.toggle {
    display:flex;
    position:relative;
    width:6rem;
    height: 2rem; 
    background: white;
    align-self:center;
    user-select:none;
    
    border-radius: 10px;
  }
  
  .switch_card {
    position:relative;  
    background-image: url("@/assets/images/ukraine.svg");
    background-size: cover; /* or contain, depending on your requirement */
    background-position: center; /* Center the image */
    transition:.4s;
    width:50%;
    height: 2rem;
    pointer-events:none;
    padding: auto;
  }
  
  input:checked + label .switch_card {
    background-image: url("@/assets/images/uk.svg");
  }
  
    .toggle:after, .toggle:before {
    flex:1;
    text-align:center;
    line-height:2rem;
  }
  .toggle:after {
    content:"UA";
  }
  .toggle:before {
    content:"EN";
  }
  
  input { display:none; }
  
  label {
    position:absolute;
    top:0; left:0; right:0; bottom:0;
    
    cursor:pointer;
  }
  
  
  
  
  
  
  .slide input:checked + label .switch_card {
    transform:translateX(3rem);
  }

  /* END of css styles of language switch */

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
