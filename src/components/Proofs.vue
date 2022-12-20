<script>
import {proofs} from '@/assets/data'
import {entities} from '@/assets/data'
import {useHead} from "@vueuse/head";

export default {
  data() {
    return {
      code: '',
      proofs: proofs,
      entities: entities,
      currentEntity: null
    }
  },
  methods: {
    toggle(elem, type = "") {
      if (elem.status === 2) elem.status = 0;
      else elem.status++
      if (elem.status === 1 && type === "entity") {
        if (this.currentEntity && this.currentEntity!==elem && this.currentEntity.status === 1) this.currentEntity.status = 0;
        this.currentEntity = elem;
      }
    },
    hideClass(entity) {
      let show = this.proofs.filter(proof => proof.status === 1).every(proof => entity.proofs.includes(proof.id));
      if (!show) return 'hide';
      show = this.proofs.filter(proof => proof.status === 2).every(proof => !entity.proofs.includes(proof.id));
      if (!show) return 'hide';
      return '';
    }
  },
  computed: {
    getOrderedEntities() {
      return this.entities.sort((a, b) => {
        if (a.position < b.position) {
          return -1;
        }
        if (a.position > b.position) {
          return 1;
        }

        return 0;
      });
    },
    getOrderedProofs() {
      return this.proofs.sort((a, b) => {
        if (a.position < b.position) {
          return -1;
        }
        if (a.position > b.position) {
          return 1;
        }

        return 0;
      });
    }
  },
  created: function () {
  },
  mounted: function() {
    useHead({
      title: "Preuves",
    });
  }
}
</script>
<template>
  <div>
    <h1>Quelle est cette entité ?</h1>

    <div class="proofs">
      <h2>Preuves</h2>
      <hr>
      <div class="proofs-container">
        <div v-for="proof in getOrderedProofs" :class="'proof proof-'+proof.status" @click="toggle(proof)">
          {{proof.name}}
        </div>
      </div>
      <hr>
      <div class="text">D'après les preuves que nous avons rassemblées, nous pensons que l'entité est de type</div>
      <div class="entities-container">
        <div v-for="entity in getOrderedEntities">
        <span  :class="'entity entity-'+entity.status + ' '+hideClass(entity)" @click="toggle(entity, 'entity')" :data-color="entity.color">
          {{entity.name}}
        </span>
        </div>
      </div>
    </div>
  </div>

</template>
