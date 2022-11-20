<script setup>
import WelcomeItem from './WelcomeItem.vue'

</script>
<script>
export default {
  data() {
    return {
      code: '',
      config: [
        {
          "name": "Joueur",
          "parameters": [
            {
              "name": "Santé mentale initiale",
              "options": [
                {
                  "name": "0%",
                  "value": 2
                },
                {
                  "name": "25%",
                  "value": 1.5
                },
                {
                  "name": "50%",
                  "value": 1
                },
                {
                  "name": "75%",
                  "value": 0.5
                },
                {
                  "name": "100%",
                  "value": 0
                }
              ],
              "selected": 4
            },
            {
              "name": "Santé mentale par pillule",
              "options": [
                {
                  "name": "0%",
                  "value": 2
                },
                {
                  "name": "5%",
                  "value": 1.5
                },
                {
                  "name": "10%",
                  "value": 1
                },
                {
                  "name": "20%",
                  "value": 0.5
                },
                {
                  "name": "25%",
                  "value": 0
                }
              ],
              "selected": 4
            },
            {
              "name": "Multiplicateur de perte de santé mentale",
              "options": [
                {
                  "name": "0",
                  "value": 0
                },
                {
                  "name": "0.5",
                  "value": 1
                },
                {
                  "name": "1",
                  "value": 1.5
                },
                {
                  "name": "2",
                  "value": 2
                }
              ],
              "selected": 1
            }
          ]
        },
        {
          "name": "Entité",
          "parameters": [
            {
              "name": "Vitesse de déplacement",
              "options": [
                {
                  "name": "50%",
                  "value": 0
                },
                {
                  "name": "75%",
                  "value": 1
                },
                {
                  "name": "100%",
                  "value": 1.5
                },
                {
                  "name": "125%",
                  "value": 2
                },
                {
                  "name": "150%",
                  "value": 2.5
                }
              ],
              "selected": 2
            }
          ]
        }
      ]
    }
  },
  methods: {
    formatDifference(value1, value2) {
      let value = value2 - value1;
      if (value > 0) value = "+" + value;
      return value;
    },
    loadCode(code) {
      code = code.split('');
      let index = 0;
      this.config.forEach((subconfig, idxSubconfig) => {
        subconfig.parameters.forEach((parameter, idxParameter) => {
          this.config[idxSubconfig].parameters[idxParameter].selected = parseInt(code[index]);
          index++;
        })
      })
    }
  },
  computed: {
    totalDifficulty() {
      let hash = this.config.map(subconfig => subconfig.parameters.map(parameter => parameter.selected)).flat().join("")
      window.location.hash = hash;
      this.code = hash;
      return this.config.map(subconfig => subconfig.parameters.map(parameter => parameter.options[parameter.selected].value)).flat().reduce((acc, o) => acc + parseFloat(o), 0)
    }
  },
  created: function () {
    let splittedHash = window.location.hash.split('#');
    if (splittedHash.length !== 2) return;
    this.loadCode(splittedHash[1])
  }
}
</script>
<template>
  <h1>Générateur de config Phasmophobia</h1>
  <input type="text" v-model="code" placeholder="Code">
  <button @click="loadCode(code)">
    Charger
  </button>
  <div v-for="subconfig in config">
    <h2>{{ subconfig.name }}</h2>
    <div v-for="parameter in subconfig.parameters">
      <h3>{{parameter.name}}</h3>
      <select v-model="parameter.selected">
        <option v-for="(option, index) in parameter.options" :value="index">
          {{ option.name }} <template v-if="index !== parameter.selected"> ({{ formatDifference(parameter.options[parameter.selected].value,option.value) }})</template>
        </option>
      </select>
    </div>

  </div>

  <div>Multiplicateur de difficulté : x{{ totalDifficulty }}</div>

</template>
