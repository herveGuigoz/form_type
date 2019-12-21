<template>
  <div @click="keepFocus(true)" class="w-full h-screen flex flex-col items-center justify-end pb-12 sm:pb-0">
    <div v-if="!isCompleted" class="w-full max-w-3xl h-full flex flex-col justify-center">
      <form
        @submit.prevent="next"
        autocomplete="off"
        class="rounded px-8 pb-8 mx-4 h-56"
      >
        <transition :name="currentTransition" mode="out-in">
          <component
              :is="formsTypeComponents"
              :key="currentQuestion"
              ref="formElmt"
              enter-active-class="fadeIn"
              leave-active-class="fadeOut"
              :type="questions[currentQuestion].type"
              :message="questions[currentQuestion].value"
              :value="questions[currentQuestion].answer"
              @handleAnswer="handleAnswer"
            ></component>
        </transition>
      </form>
      <div class="flex justify-center">
        <transition name="slide-up">
          <button
            v-if="isInputValid"
            class="absolute mt-10 bg-transparent hover:bg-teal-500 text-teal-500 font-semibold hover:text-white py-2 px-6 border border-teal-500 hover:border-transparent rounded"
            @click="keepFocus(false)"
          >
            Suivant
          </button>
        </transition>
      </div>
    </div>
    <div class="w-full flex px-2 mb-1">
      <div @click="previous">
        <go-back-icon :isAvailaible="currentQuestion !== 0 && !isCompleted"/>
      </div>
      <div @click="next">
        <go-foward-icon :isAvailaible="isInputValid && !isCompleted"/>
      </div>
    </div>
    <div class="w-full px-2 mb-2">
      <progress-bar :percentage="contentProgress" class="mb-2 h-5">
        <span class="text-xs text-white w-full flex justify-end pr-2">{{contentProgress}}%</span>
      </progress-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InputBox from "../components/FormElements/InputBox";
import TextArea from "../components/FormElements/TextArea";
import ProgressBar from "../components/ProgressBar";
import GoBackIcon from '../components/GoBackIcon'
import GoFowardIcon from '../components/GoFowardIcon'
export default {
  components: {
    InputBox,
    TextArea,
    ProgressBar,
    GoBackIcon,
    GoFowardIcon
  },
  data() {
    return {
      isCompleted: false,
      currentTransition: '',
      currentQuestion: 0,
      totalQuestion: this.$store.state.questions.length
    }
  },
  computed: {
    contentProgress() {
      if (!this.isCompleted) {
        return Math.round(this.currentQuestion/ this.totalQuestion * 100)
      }
      return 100
    },
    formsTypeComponents() {
      if (this.questions[this.currentQuestion].type === 'text') {
        return 'InputBox'
      }
      if (this.questions[this.currentQuestion].type === 'textarea') {
        return 'TextArea'
      }
    },
    isInputValid() {
      return this.questions[this.currentQuestion].answer.length > 0
    },
    ...mapState({
      questions: state => state.questions,
    })
  },
  methods: {
    keepFocus (bool) {
      if (!bool) {
        this.next()
        return
      }
      try {
        this.$refs.formElmt.$refs.input.focus()
      } catch(e) {
        return
      }
      
    },
    handleAnswer (answer) {
      this.$store.commit('SET_ANSWER', { index: this.currentQuestion, answer})
    },
    previous() {
      if (this.currentQuestion === 0) {
        return
      }
      this.currentTransition = 'prev'
      this.currentQuestion--
    },
    next () {
      if (!this.isInputValid) {
        return
      }
      if (this.questions.length === this.currentQuestion + 1) {
        this.isCompleted = true
        this.postData()
        return
      }
      this.currentTransition = 'next'
      this.currentQuestion++
    },
    async postData() {
      const data = {
        Question1: this.questions[0].answer,
        Question2: this.questions[1].answer,
        Question3: this.questions[2].answer,
        email: this.questions[3].answer
      }
      const response = await this.$axios.post('/questionnaire.json', data)
      this.$router.push('/thanks')
    }
  }
}
</script>

<style scoped>
  .slide-up-enter-active {
    transition: all .3s ease;
  }
  .slide-up-leave-active {
    transition: all .3s ease;
  }
  .slide-up-enter, .slide-up-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(20px);
    opacity: 0;
  }

  /* prefixed with "next" so the next button easily changes to this block of CSS */
  .next-enter { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0); }
  .next-enter-to { transform: scale3d(1, 1, 1); }
  .next-enter-active,
  .next-leave-active { transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .next-leave { transform: scale3d(1, 1, 1); }
  .next-leave-to { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0); }

  /* prefixed with "prev" so the prev button easily changes to this block of CSS */
  .prev-enter { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0); }
  .prev-enter-to { transform: scale3d(1, 1, 1); }
  .prev-enter-active,
  .prev-leave-active { transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .prev-leave { transform: scale3d(1, 1, 1); }
  .prev-leave-to { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0); }

  /* if animations are reduced at the OS level, use simpler transitions */
  @media screen and (prefers-reduced-motion: reduce) {
    .next-enter { opacity: 0; transform: translate3d(100px, 0, 0); }
    .next-enter-active,
    .next-leave-active { transition: 0.5s; }
    .next-leave-to { opacity: 0; transform: translate3d(-100px, 0, 0); }

    .prev-enter { opacity: 0; transform: translate3d(-100px, 0, 0); }
    .prev-enter-active,
    .prev-leave-active { transition: 0.5s; }
    .prev-leave-to { opacity: 0; transform: translate3d(100px, 0, 0); }
  }
</style>
