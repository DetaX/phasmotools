<script>
const AMATEUR = "ehcbcecbbcbacaafaaddegaaebbcbbaaaaaa";
const INTERMEDIAIRE = "egdbcecbbcbabbaebaddedabdbbbbbaaaaaa"
const PROFESSIONNEL = "efebcecbbccbabadcaddeaadcbbbbbaaaaaa"
const CAUCHEMAR = "eeebcecbbcccacaccbcdeaadbaababaaaaaa"
const TWENTYFOUR = "aeeaceaabecdaaaacaadeacdaaaaaaaaaaaa"

export default {
  data() {
    return {
      code: '',
      config: [
         {
          "name": "Joueur",
          "parameters": [
            {
              "name": "Santé mentale initiale <span class='small'>(%)</span>",
              "id": "sante_mentale_init",
              "options": [
                {
                  "name": "0",
                  "value": "+"
                },
                {
                  "name": "25",
                  "value": "+"
                },
                {
                  "name": "50",
                  "value": "+"
                },
                {
                  "name": "75",
                  "value": "+"
                },
                {
                  "name": "100",
                  "value": 0
                }
              ],
              "selected": null
            },
            {
              "name": "Santé mentale par pillule <span class='small'>(%)</span>",
              "id": "sante_mentale_pill",
              "options": [
                {
                  "name": "0",
                  "value": "+"
                },
                {
                  "name": "5",
                  "value": "+"
                },
                {
                  "name": "10",
                  "value": "+"
                },
                {
                  "name": "20",
                  "value": "+"
                },
                {
                  "name": "25",
                  "value": "+"
                },
                {
                  "name": "30",
                  "value": "+"
                },
                {
                  "name": "35",
                  "value": "+"
                },
                {
                  "name": "40",
                  "value": 0
                },
                {
                  "name": "45",
                  "value": "-"
                },
                {
                  "name": "50",
                  "value": "-"
                },
                {
                  "name": "75",
                  "value": "-"
                },
                {
                  "name": "100",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Multiplicateur de perte de santé mentale",
              "id": "sante_mentale_mult",
              "options": [
                {
                  "name": "0",
                  "value": "-"
                },
                {
                  "name": "0.5",
                  "value": "-"
                },
                {
                  "name": "1",
                  "value": 1.5
                },
                {
                  "name": "1.5",
                  "value": "+"
                },
                {
                  "name": "2",
                  "value": "+"
                }
              ],
              "selected": null
            },
            {
              "name": "Sprint",
              "id": "sprint",
              "options": [
                {
                  "name": "Off",
                  "value": "+"
                },
                {
                  "name": "On",
                  "value": 1
                }
              ],
              "selected": null
            },
            {
              "name": "Durée du sprint <span class='small'>(s)</span>",
              "id": "sprint_duree",
              "options": [
                {
                  "name": "1",
                  "value": "+"
                },
                {
                  "name": "2",
                  "value": "+"
                },
                {
                  "name": "3",
                  "value": 1
                },
                {
                  "name": "4",
                  "value": "-"
                },
                {
                  "name": "5",
                  "value": "-"
                },
                {
                  "name": "Illimitée",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Temps de récupération du sprint <span class='small'>(s)</span>",
              "id": "temps_recup_sprint",
              "options": [
                {
                  "name": "1",
                  "value": "-"
                },
                {
                  "name": "2",
                  "value": "-"
                },
                {
                  "name": "3",
                  "value": "-"
                },
                {
                  "name": "4",
                  "value": "-"
                },
                {
                  "name": "5",
                  "value": 1
                },
                {
                  "name": "6",
                  "value": "+"
                }
              ],
              "selected": null
            },
            {
              "name": "Vitesse du joueur <span class='small'>(%)</span>",
              "id": "vitesse_joueur",
              "options": [
                {
                  "name": "50",
                  "value": "+"
                },
                {
                  "name": "75",
                  "value": "+"
                },
                {
                  "name": "100",
                  "value": 1
                },
                {
                  "name": "125",
                  "value": "-"
                },
                {
                  "name": "150",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Lampes de poches",
              "id": "lampes",
              "options": [
                {
                  "name": "Off",
                  "value": "+"
                },
                {
                  "name": "On",
                  "value": 1
                }
              ],
              "selected": null
            },
            {
              "name": "Perte des objets au décès",
              "id": "perte_objets",
              "options": [
                {
                  "name": "Off",
                  "value": "*"
                },
                {
                  "name": "On",
                  "value": 1
                }
              ],
              "selected": null
            }
          ]
        },
        {
          "name": "Entité",
          "parameters": [
            {
              "name": "Vitesse de déplacement <span class='small'>(%)</span>",
              "id": "vitesse_entite",
              "options": [
                {
                  "name": "50",
                  "value": "-"
                },
                {
                  "name": "75",
                  "value": "-"
                },
                {
                  "name": "100",
                  "value": 1.5
                },
                {
                  "name": "125",
                  "value": "+"
                },
                {
                  "name": "150",
                  "value": "+"
                }
              ],
              "selected": null
            },
            {
              "name": "Fréquence de déplacement",
              "id": "freq_deplac_entite",
              "options": [
                {
                  "name": "Faible",
                  "value": "-"
                },
                {
                  "name": "Moyenne",
                  "value": 1
                },
                {
                  "name": "Élevée",
                  "value": "+"
                }
              ],
              "selected": null
            },
            {
              "name": "Changement de pièce préférée",
              "id": "chgt_piece",
              "options": [
                {
                  "name": "Nulle",
                  "value": 0
                },
                {
                  "name": "Faible",
                  "value": "+"
                },
                {
                  "name": "Moyennne",
                  "value": "+"
                },
                {
                  "name": "Élevée",
                  "value": "+"
                }
              ],
              "selected": null
            },
            {
              "name": "Nombre d'interactions",
              "id": "nombre_interactions",
              "options": [
                {
                  "name": "Faible",
                  "value": "+"
                },
                {
                  "name": "Moyennne",
                  "value": "+"
                },
                {
                  "name": "Élevée",
                  "value": 1.5
                }
              ],
              "selected": null
            },
            {
              "name": "Fréquence des événements",
              "id": "freq_event",
              "options": [
                {
                  "name": "Faible",
                  "value": 1
                },
                {
                  "name": "Moyennne",
                  "value": "-"
                },
                {
                  "name": "Élevée",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Entité amicale",
              "id": "entite_friendly",
              "options": [
                {
                  "name": "Off",
                  "value": 0
                },
                {
                  "name": "On",
                  "value": "*"
                }
              ],
              "selected": null
            },
            {
              "name": "Période de grâce <span class='small'>(s)</span>",
              "id": "periode_grace",
              "options": [
                {
                  "name": "0",
                  "value": "+"
                },
                {
                  "name": "1",
                  "value": "+"
                },
                {
                  "name": "2",
                  "value": "+"
                },
                {
                  "name": "3",
                  "value": "+"
                },
                {
                  "name": "4",
                  "value": "+"
                },
                {
                  "name": "5",
                  "value": 1.5
                },
                {
                  "name": "6",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Durée des chasses",
              "id": "duree_chasses",
              "options": [
                {
                  "name": "Faible",
                  "value": 1
                },
                {
                  "name": "Moyennne",
                  "value": "+"
                },
                {
                  "name": "Élevée",
                  "value": "+"
                }
              ],
              "selected": null
            },
            {
              "name": "Mourir augmente la durée des chasses",
              "id": "mourir_duree_chasses",
              "options": [
                {
                  "name": "Off",
                  "value": 1
                },
                {
                  "name": "Faible",
                  "value": 1.5
                },
                {
                  "name": "Moyenne",
                  "value": 1.5
                },
                {
                  "name": "Élevée",
                  "value": 1.5
                }
              ],
              "selected": null
            },
            {
              "name": "Preuves apportées",
              "id": "preuves",
              "options": [
                {
                  "name": "0",
                  "value": "+"
                },
                {
                  "name": "1",
                  "value": "+"
                },
                {
                  "name": "2",
                  "value": "+"
                },
                {
                  "name": "3",
                  "value": 1.5
                }
              ],
              "selected": null
            },
            {
              "name": "Probabilité des empreintes <span class='small'>(%)</span>",
              "id": "empreintes_proba",
              "options": [
                {
                  "name": "25",
                  "value": "+"
                },
                {
                  "name": "50",
                  "value": "+"
                },
                {
                  "name": "75",
                  "value": "+"
                },
                {
                  "name": "100",
                  "value": 1.5
                }
              ],
              "selected": null
            },
            {
              "name": "Durée des empreintes <span class='small'>(s)</span>",
              "id": "empreinte_durees",
              "options": [
                {
                  "name": "15",
                  "value": "+"
                },
                {
                  "name": "30",
                  "value": "+"
                },
                {
                  "name": "60",
                  "value": "+"
                },
                {
                  "name": "90",
                  "value": "+"
                },
                {
                  "name": "120",
                  "value": 1.5
                },
                {
                  "name": "180",
                  "value": "-"
                },
                {
                  "name": "Illimitée",
                  "value": "-"
                }
              ],
              "selected": null
            }
          ]
        },
        {
          "name": "Contrat",
          "parameters": [
            {
              "name": "Temps de préparation <span class='small'>(s)</span>",
              "id": "temps_prepa",
              "options": [
                {
                  "name": "0",
                  "value": "+"
                },
                {
                  "name": "60",
                  "value": "+"
                },
                {
                  "name": "60",
                  "value": "+"
                },
                {
                  "name": "120",
                  "value": "+"
                },
                {
                  "name": "180",
                  "value": "+"
                },
                {
                  "name": "240",
                  "value": "+"
                },
                {
                  "name": "300",
                  "value": 2.5
                }
              ],
              "selected": null
            },
            {
              "name": "Météo",
              "id": "meteo",
              "options": [
                {
                  "name": "Aléatoire",
                  "value": 0
                },
                {
                  "name": "Pluie légère",
                  "value": "+"
                },
                {
                  "name": "Pluie forte",
                  "value": "+"
                },
                {
                  "name": "Neige",
                  "value": "+"
                },
                {
                  "name": "Vent",
                  "value": "+"
                },
                {
                  "name": "Temps clair",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Portes ouvertes en début de partie",
              "id": "portes_debut",
              "options": [
                {
                  "name": "Aucune",
                  "value": 0
                },
                {
                  "name": "Faible",
                  "value": "+"
                },
                {
                  "name": "Moyenne",
                  "value": "+"
                },
                {
                  "name": "Élevée",
                  "value": "+"
                }
              ],
              "selected": null
            },
            {
              "name": "Caches",
              "id": "caches",
              "options": [
                {
                  "name": "Aucune",
                  "value": "+"
                },
                {
                  "name": "Faible",
                  "value": "+"
                },
                {
                  "name": "Moyenne",
                  "value": "+"
                },
                {
                  "name": "Élevée",
                  "value": "+"
                },
                {
                  "name": "Trés élevée",
                  "value": 2
                }
              ],
              "selected": null
            },
            {
              "name": "Moniteur de santé mentale",
              "id": "moniteur_sante",
              "options": [
                {
                  "name": "Off",
                  "value": "+"
                },
                {
                  "name": "On",
                  "value": 1.5
                }
              ],
              "selected": null
            },
            {
              "name": "Moniteur d'activité",
              "id": "moniteur_emf",
              "options": [
                {
                  "name": "Off",
                  "value": "+"
                },
                {
                  "name": "On",
                  "value": 1.5
                }
              ],
              "selected": null
            },
            {
              "name": "Disjoncteur au début du contrat",
              "id": "disjoncteur",
              "options": [
                {
                  "name": "Cassé",
                  "value": "+"
                },
                {
                  "name": "Off",
                  "value": "+"
                },
                {
                  "name": "On",
                  "value": 1.5
                }
              ],
              "selected": null
            },
            {
              "name": "Disjoncteur visible sur la carte",
              "id": "disjoncteur_map",
              "options": [
                {
                  "name": "Off",
                  "value": "+"
                },
                {
                  "name": "On",
                  "value": 1.5
                }
              ],
              "selected": null
            },
            {
              "name": "Quantité d'Objets Maudits",
              "id": "nb_maudits",
              "options": [
                {
                  "name": "0",
                  "value": "+"
                },
                {
                  "name": "1",
                  "value": 1
                },
                {
                  "name": "2",
                  "value": "-"
                },
                {
                  "name": "3",
                  "value": "-"
                },
                {
                  "name": "4",
                  "value": "-"
                },
                {
                  "name": "5",
                  "value": "-"
                },
                {
                  "name": "6",
                  "value": "-"
                }
                ],
              "selected": null
            },
            {
              "name": "Objet Maudit #1",
              "id": "maudit_1",
              "options": [
                {
                  "name": "Aléatoire",
                  "value": 1
                },
                {
                  "name": "Cartes de tarot",
                  "value": "-"
                },
                {
                  "name": "Planche Ouija",
                  "value": "-"
                },
                {
                  "name": "Miroir hanté",
                  "value": "-"
                },
                {
                  "name": "Boîte à musique",
                  "value": "-"
                },
                {
                  "name": "Cercle d'invocation",
                  "value": "-"
                },
                {
                  "name": "Poupée vaudou",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Objet Maudit #2",
              "id": "maudit_2",
              "options": [
                {
                  "name": "Aléatoire",
                  "value": 1
                },
                {
                  "name": "Cartes de tarot",
                  "value": "-"
                },
                {
                  "name": "Planche Ouija",
                  "value": "-"
                },
                {
                  "name": "Miroir hanté",
                  "value": "-"
                },
                {
                  "name": "Boîte à musique",
                  "value": "-"
                },
                {
                  "name": "Cercle d'invocation",
                  "value": "-"
                },
                {
                  "name": "Poupée vaudou",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Objet Maudit #3",
              "id": "maudit_3",
              "options": [
                {
                  "name": "Aléatoire",
                  "value": 1
                },
                {
                  "name": "Cartes de tarot",
                  "value": "-"
                },
                {
                  "name": "Planche Ouija",
                  "value": "-"
                },
                {
                  "name": "Miroir hanté",
                  "value": "-"
                },
                {
                  "name": "Boîte à musique",
                  "value": "-"
                },
                {
                  "name": "Cercle d'invocation",
                  "value": "-"
                },
                {
                  "name": "Poupée vaudou",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Objet Maudit #4",
              "id": "maudit_4",
              "options": [
                {
                  "name": "Aléatoire",
                  "value": 1
                },
                {
                  "name": "Cartes de tarot",
                  "value": "-"
                },
                {
                  "name": "Planche Ouija",
                  "value": "-"
                },
                {
                  "name": "Miroir hanté",
                  "value": "-"
                },
                {
                  "name": "Boîte à musique",
                  "value": "-"
                },
                {
                  "name": "Cercle d'invocation",
                  "value": "-"
                },
                {
                  "name": "Poupée vaudou",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Objet Maudit #5",
              "id": "maudit_5",
              "options": [
                {
                  "name": "Aléatoire",
                  "value": 1
                },
                {
                  "name": "Cartes de tarot",
                  "value": "-"
                },
                {
                  "name": "Planche Ouija",
                  "value": "-"
                },
                {
                  "name": "Miroir hanté",
                  "value": "-"
                },
                {
                  "name": "Boîte à musique",
                  "value": "-"
                },
                {
                  "name": "Cercle d'invocation",
                  "value": "-"
                },
                {
                  "name": "Poupée vaudou",
                  "value": "-"
                }
              ],
              "selected": null
            },
            {
              "name": "Objet Maudit #6",
              "id": "maudit_6",
              "options": [
                {
                  "name": "Aléatoire",
                  "value": 1
                },
                {
                  "name": "Cartes de tarot",
                  "value": "-"
                },
                {
                  "name": "Planche Ouija",
                  "value": "-"
                },
                {
                  "name": "Miroir hanté",
                  "value": "-"
                },
                {
                  "name": "Boîte à musique",
                  "value": "-"
                },
                {
                  "name": "Cercle d'invocation",
                  "value": "-"
                },
                {
                  "name": "Poupée vaudou",
                  "value": "-"
                }
              ],
              "selected": null
            }
          ]
        }
      ]
    }
  },
  methods: {
    _alphabetRange (start, end) {
      return new Array(end.charCodeAt(0) - start.charCodeAt(0)).fill().map((d, i) => String.fromCharCode(i + start.charCodeAt(0)));
    },
    formatDifference(value1, value2) {
      let value = value2 - value1;
      if (value > 0) value = "+" + value;
      return value;
    },
    loadCode() {
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
    loadAmateur() {
      this.code = AMATEUR;
      this.loadCode();
    },
    loadIntermediaire() {
      this.code = INTERMEDIAIRE;
      this.loadCode();
    },
    loadProfessionnel() {
      this.code = PROFESSIONNEL;
      this.loadCode();
    },
    loadCauchemar() {
      this.code = CAUCHEMAR;
      this.loadCode();
    },
    loadTwentyFour() {
      this.code = TWENTYFOUR;
      this.loadCode();
    },
    getParameterClass(parameter) {
      this.$nextTick(function () {
        let param = parameter.options[parameter.selected];
        if (!param) return;
        let value = param.value;
        let refName = parameter.id;
        let elem = this.$refs[refName][0];
        switch(value) {
          case "+":
              elem.classList.add('up');
            break;
          case "-":
            elem.classList.add('down');
            break;
          case "*":
            elem.classList.add('danger');
            break;
          default:
            break;
        }
      });

      return "parameter";
    },
    updateForm() {
      try {

        let nbMaudits = this.$refs.nb_maudits[0].getAttribute('data-selected');
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

      } catch(exception){}

    }
  },
  computed: {
    totalDifficulty() {
      //todo remove
      return this.config.map(subconfig => subconfig.parameters.map(parameter => parameter.options[parameter.selected].value)).flat().reduce((acc, o) => acc + parseFloat(o), 0)
    },
    updateCode() {
      let alphabetRange = this._alphabetRange('a', 'z');
      let hash = this.config.map(subconfig => subconfig.parameters.map(parameter => parameter.selected)).flat();
      hash.forEach((value, index) => {
        if (value === -1) hash[index] = "z";
        else hash[index] = alphabetRange[value];
      })
      hash = hash.join("");
      window.location.hash = hash;
      this.code = hash;
      this.updateForm();
    }
  },
  created: function () {
    let splittedHash = window.location.hash.split('#');
    if (splittedHash.length !== 2) return;
    this.code = splittedHash[1];
    this.loadCode();
  },
  mounted: function() {
    this.updateCode;
  }
}
</script>
<template>
  <h1>Générateur de config Phasmophobia</h1>
  <div class="form">
    <div>
      <input type="text" v-model="code" placeholder="Code">
      <button @click="loadCode">
        Charger
      </button>
    </div>
    <div>
      <button @click="loadAmateur">
        Amateur
      </button>
      <button @click="loadIntermediaire">
        Intermédiaire
      </button>
      <button @click="loadProfessionnel">
        Professionnel
      </button>
      <button @click="loadCauchemar">
        Cauchemar
      </button>
      <button @click="loadTwentyFour">
        x24
      </button>
    </div>

  </div>

  <div class="config">
    <div v-for="subconfig in config" class="subconfig">
      <h2>{{ subconfig.name }}</h2>
      <div v-for="parameter in subconfig.parameters" :class="getParameterClass(parameter)" :id="parameter.id" :ref="parameter.id" :data-selected="parameter.selected" :key="parameter.id+'_'+parameter.selected">
        <h3 v-html="parameter.name"></h3>
<!--        <select v-model="parameter.selected">-->
<!--          <option v-for="(option, index) in parameter.options" :value="index">-->
<!--            {{ option.name }} <template v-if="index !== parameter.selected"> ({{ formatDifference(parameter.options[parameter.selected].value,option.value) }})</template>-->
<!--          </option>-->
<!--        </select>-->
        <div class="options">
          <template v-for="(option, index) in parameter.options">
            <div>
              <input :value="index" type="radio" :id="parameter.id+''+index" v-model="parameter.selected" v-on:change="updateCode">
              <label :for="parameter.id+''+index">{{ option.name }}</label>
            </div>
          </template>
        </div>


      </div>
    </div>
  </div>


<!--  <div>Multiplicateur de difficulté : x{{ totalDifficulty }}</div>-->

</template>
