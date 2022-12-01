<script>
import {config} from '@/assets/data'

export default {
  data() {
    return {
      PRESET_CODES: [
        {"name": "Remise à zéro", "code": "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"},
        {"name": "Amateur", "code": "ehcbcecbbcbacaafaaddegaaebbcbbazzzzz"},
        {"name": "Intermédiaire", "code": "egdbcecbbcbabbaebaddedabdbbbbbazzzzz"},
        {"name": "Professionnel", "code": "efebcecbbccbabadcaddeaadcbbbbbazzzzz"},
        {"name": "Cauchemar", "code": "eeebcecbbcccacaccbcdeaadbaababazzzzz"},
       /* {"name": "x24", "code": "aeeaceaabecdaaaacaadeacdaaaaaazzzzzz"},*/
      ],
      code: '',
      config: config,
      editMode: true,
      helpShown: false
    }
  },
  methods: {
    _alphabetRange (start, end) {
      return new Array(end.charCodeAt(0) - start.charCodeAt(0)).fill().map((d, i) => String.fromCharCode(i + start.charCodeAt(0)));
    },
    copy() {
      this.$refs.clone.focus();
      document.execCommand('copy');
      let textElem = this.$refs.copiedText;
      textElem.classList.remove('animate');
      void textElem.offsetWidth;
      textElem.classList.add('animate');
    },
    loadCode(preset = null) {
      if (preset && typeof preset === 'string') this.code = preset;
      else this.editMode = false;

      let alphabetRange = this._alphabetRange('a', 'z');
      window.location.hash = this.code;
      let codeSplit = this.code.split('');
      let index = 0;
      this.config.forEach((subconfig, idxSubconfig) => {
        subconfig.parameters.forEach((parameter, idxParameter) => {
          this.config[idxSubconfig].parameters[idxParameter].selected = alphabetRange.indexOf(codeSplit[index]);
          index++;
        })
      });
      this.$nextTick(function () {
        this.updateForm();
      });
    },
    updateForm() {
      if (!this.editMode) return;
      let nbMaudits = this.$refs.nb_maudits[0].getAttribute('data-selected');
      if (nbMaudits === "-1") nbMaudits = 0;
      for (let i=6;i>nbMaudits;i--) {
        this.$refs["maudit_"+i][0].style.display = 'none';
      }
      for (let i=nbMaudits;i>0;i--) {
        this.$refs["maudit_"+i][0].style.display = 'block';
      }

      let sprint = this.$refs.sprint[0].getAttribute('data-selected');
      if (sprint === "0") {
        this.$refs["sprint_duree"][0].style.display = 'none';
        this.$refs["temps_recup_sprint"][0].style.display = 'none';
      }
      else {
        this.$refs["sprint_duree"][0].style.display = 'block';
        this.$refs["temps_recup_sprint"][0].style.display = 'block';
      }

      let entiteFriendly = this.$refs.entite_friendly[0].getAttribute('data-selected');
      if (entiteFriendly === "1") {
        this.$refs["periode_grace"][0].style.display = 'none';
        this.$refs["duree_chasses"][0].style.display = 'none';
        this.$refs["mourir_duree_chasses"][0].style.display = 'none';
      }
      else {
        this.$refs["periode_grace"][0].style.display = 'block';
        this.$refs["duree_chasses"][0].style.display = 'block';
        this.$refs["mourir_duree_chasses"][0].style.display = 'block';
      }

      let preuves = this.$refs.preuves[0].getAttribute('data-selected');
      if (preuves === "0") {
        this.$refs["empreintes_proba"][0].style.display = 'none';
        this.$refs["empreinte_durees"][0].style.display = 'none';
      }
      else {
        this.$refs["empreintes_proba"][0].style.display = 'block';
        this.$refs["empreinte_durees"][0].style.display = 'block';
      }
      let disjoncteur = this.$refs.disjoncteur[0].getAttribute('data-selected');
      if (disjoncteur === "0") {
        this.$refs["disjoncteur_map"][0].style.display = 'none';
      }
      else {
        this.$refs["disjoncteur_map"][0].style.display = 'block';
      }
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
      if (this.editMode) this.$nextTick(function () {
        this.updateForm();
      });
    },
    updateCode() {
      let alphabetRange = this._alphabetRange('a', 'z');
      let hash = this.config.map(subconfig => subconfig.parameters.map(parameter => parameter.selected)).flat();
      hash.forEach((value, index) => {
        if ([null, -1].includes(value)) hash[index] = "z";
        else hash[index] = alphabetRange[value];
      })
      hash = hash.join("");
      window.location.hash = hash;
      this.code = hash;
      this.updateForm();
    },
    handleClickRadio(index, parameter) {
      if (index===parameter.selected) {
        parameter.selected=null;
        this.$nextTick(function () {
          this.updateCode();
        });
      }
    }
  },
  computed: {
    getNonEmptySubConfig() {
      let subConfigs = [];
      this.config.forEach((subConfig) => {
        let notEmpty = false;
        subConfig.parameters.forEach((parameter, index) => {
          if (![null, -1].includes(parameter.selected)) {
            notEmpty = true;
            if (parameter.id === "sprint" && parameter.selected === 0) {
              for (let i =1;i<=2;i++) subConfig.parameters[index+i].selected = null;
            }
            if (parameter.id === "entite_friendly" && parameter.selected === 1) {
              for (let i =1;i<=3;i++) subConfig.parameters[index+i].selected = null;
            }
            if (parameter.id === "preuves" && parameter.selected === 0) {
              for (let i =1;i<=2;i++) subConfig.parameters[index+i].selected = null;
            }
            if (parameter.id === "disjoncteur" && parameter.selected === 0) subConfig.parameters[index+1].selected = null;
            if (parameter.id === "nb_maudits") {
              for (let i =parameter.selected+1;i<=6;i++) subConfig.parameters[index+i].selected = null;
            }
          }
        });
        if (notEmpty) subConfigs.push(subConfig);
      })
      return subConfigs;
    }
  },
  created: function () {
    let splittedHash = window.location.hash.split('#');
    if (splittedHash.length !== 2) return;
    this.code = splittedHash[1];
    this.editMode = false;
    this.loadCode();
  },
  mounted: function() {
    this.updateCode();
  }
}
</script>
<template>
  <div>
    <div class="help" v-if="helpShown">
      <div class="hideHelpButton"><i class="fa-sharp fa-solid fa-circle-xmark" @click="helpShown = false"></i></div>
      <p>Cet outil a été développé afin d'aider à partager des difficultés personnalisées sur le jeu Phasmophobia.</p>
      <p>
        <b>Tu as reçu un code ?</b><br>
        Rentre ce code dans le champ "Code" et appuie sur bouton "Charger" pour voir la configuration.
      </p>
      <p>
        <b>Tu souhaites partager une configuration ?</b>
      </p>
      <ol>
        <li>Si tu n'es pas en mode édition, appuie sur le bouton "Mode édition"</li>
        <li>Fais ta configuration en cochant les paramètres que tu souhaites.</li>
        <li>Une fois satisfait(e), appuie sur le bouton <i class="fa-solid fa-copy"></i> pour copier le code que tu pourras ensuite partager.</li>
      </ol>
      En mode édition tu peux précharger certaines configurations (Amateur, Intermédiaire, Professionnel et Cauchemar) correspondantes aux difficultés du jeu.<br>
      Le bouton remise à zéro permet d'effacer toute la configuration.
    </div>
    <h1>Configurateur de difficulté Phasmophobia <span class="showHelpButton" @click="helpShown = true"><i class="fa-solid fa-circle-question"></i></span></h1>
    <div class="form">
      <div>
        <span class="code_copy">
          <input type="text" v-model="code" placeholder="Code" v-on:focus="$event.target.select()" ref="clone" >
          <span class="copied" ref="copiedText">Code copié !</span>
        </span>
        <button @click="copy" class="copy"><i class="fa-solid fa-copy"></i></button>
        <button @click="loadCode">Charger</button>
        <button @click="toggleEditMode" :class="((editMode) ? 'on' : 'off') + ' edit'">Mode édition</button>
      </div>
      <div v-if="editMode">
        <button @click="loadCode(preset.code)" v-for="preset in PRESET_CODES">{{ preset.name }}</button>
      </div>
    </div>
    <div class="config view" v-if="!editMode">
      <div v-for="subconfig in getNonEmptySubConfig" class="subconfig">
        <h2>{{ subconfig.name }}</h2>
        <div class="parameter">
          <div v-for="parameter in subconfig.parameters">
            <template v-if="parameter.options[parameter.selected]">
              <div>
                <b v-html="parameter.name"></b> : {{ parameter.options[parameter.selected].name }} <span :class="'view_arrow '+parameter.options[parameter.selected].value"></span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="config" v-if="editMode">
      <div v-for="subconfig in config" class="subconfig">
        <h2>{{ subconfig.name }}</h2>
        <div v-for="parameter in subconfig.parameters" :class="'parameter ' + ((parameter.selected !== null && parameter.options[parameter.selected]) ? parameter.options[parameter.selected].value:'')" :id="parameter.id" :ref="parameter.id" :data-selected="parameter.selected" :key="parameter.id+'_'+parameter.selected">
          <h3 v-html="parameter.name"></h3>

          <div class="options">
            <template v-for="(option, index) in parameter.options">
              <label :for="parameter.id+''+index">
                <input :value="index" type="radio" :id="parameter.id+''+index" v-model="parameter.selected" v-on:change="updateCode" @click="handleClickRadio(index, parameter)">{{ option.name }}
              </label>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
