<template>
  <div class="w-full h-screen flex flex-col items-center justify-end">
    <div v-if="isCompleted" class="w-full max-w-xl h-full flex flex-col justify-center">
      <div v-for="(question, index) in questions" :key="index" class="text-teal-500 text-2xl">
        <span>{{ question.value }} : </span>
        <span>{{ question.answer }}</span>
      </div>
    </div>
    <div v-if="!isCompleted" class="w-full max-w-xl h-full flex flex-col justify-center">
      <form
        @submit.prevent="next"
        class="rounded px-8 pt-8 pb-8 mb-4 mx-4"
      >
        <transition name="slide-up">
          <component
            :is="formsTypeComponents"
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
            class="absolute bg-transparent hover:bg-teal-500 text-teal-500 font-semibold hover:text-white py-2 px-6 border border-teal-500 hover:border-transparent rounded"
            @click="next"
          >
            Ok
          </button>
        </transition>
      </div>
    </div>
    <div class="w-full px-2">
      <progress-bar :percentage="contentProgress" class="mb-2 h-5">
        <span class="text-xs text-white w-full flex justify-end pr-2">{{contentProgress}}%</span>
      </progress-bar>
    </div>
  </div>
</template>

<script>
import InputBox from "../components/FormElements/InputBox";
import ProgressBar from "../components/ProgressBar";
export default {
  components: {
    InputBox,
    ProgressBar
  },
  data() {
    return {
      isCompleted: false,
      currentQuestion: 0,
      questions: [
        {
          type: 'text',
          value: 'Salut comment ca va ?',
          answer: ''
        },
        {
          type: 'text',
          value: 'Alors bientot noel ?',
          answer: ''
        },
        {
          type: 'text',
          value: 'Ca te rend heureux ?',
          answer: ''
        }
      ]
    }
  },
  computed: {
    contentProgress() {
      if (!this.isCompleted) {
        return Math.round(this.currentQuestion/ this.questions.length * 100)
      }
      return 100
    },
    formsTypeComponents() {
      if (this.questions[this.currentQuestion].type === 'text') {
        return 'InputBox'
      }
    },
    isInputValid() {
      return this.questions[this.currentQuestion].answer.length > 0
    }
  },
  methods: {
    handleAnswer(answer) {
      this.questions[this.currentQuestion].answer = answer
    },
    next () {
      if (!this.isInputValid) {
        return
      }
      if (this.questions.length === this.currentQuestion + 1) {
        this.isCompleted = true
        return
      }
      this.currentQuestion++
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
</style>
