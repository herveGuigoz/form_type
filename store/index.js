/*
  State object where you define questions to ask

  possible type of questions :
    text -> single an shot line of text
    textarea -> long text with multi lines allowed
    check -> checkbox with multiples responses
    radio -> checbok with only one response
  
  You have to respect this structure:
  {
    type: 'text' or 'textarea' or 'radio' or 'check'
    value: 'message to display',
    answer: '' or [], // FOR 'check' TYPE ANSWER WILL BE AN ARRAY
    options: [] // ONLY FOR 'check' OR 'radio' TYPES
  }
*/
export const state = () => ({
  questions: [
    {
      type: 'check',
      value: 'Salut comment ça va ?',
      answer: [],
      options: ['Trés bien', 'Bien', 'Moyen'],
    },
    {
      type: 'radio',
      value: 'Tu as fais tes cadeaux de noel ?',
      answer: '',
      options: ['Oui', 'Non', 'En partie'],
    },
    {
      type: 'textarea',
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