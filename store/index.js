// State object
export const state = () => ({
  questions: [
    {
      type: 'textarea',
      value: 'Salut comment ça va ?',
      answer: ''
    },
    {
      type: 'text',
      value: 'Alors comme ça on code ?',
      answer: ''
    },
    {
      type: 'text',
      value: 'Ok une dernière question, tu as quelque chose à ajouter ?',
      answer: ''
    },
    {
      type: 'text',
      value: 'Merci d\'indiquer votre email',
      answer: ''
    }
  ]
});

// Mutations
export const mutations = {
  SET_ANSWER (state, payload) {
    state.questions[payload.index].answer = payload.answer
  }
}