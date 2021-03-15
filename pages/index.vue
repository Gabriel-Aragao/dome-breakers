<template>
  <div class="container">
    <div class="sidebar">
      <div class="dates">
        <button
          v-for="(date, index) in launchDates"
          :key="index"
          class="date-button"
          @click="dateStatus(date)"
        >
          {{ date }}
        </button>
      </div>
    </div>
    <div class="main">
      <h1>The Dome Breakers Brasil</h1>
      <img
        class="base-img"
        src="@/assets/flat.png"
        alt="Flat Earth"
        @click="hideDetails()"
      >
      <img
        v-for="(position, index) in positions"
        :key="index"
        ref="satellites"
        src="@/assets/satellite.gif"
        alt="Satelite em Operação"
        :style="position.style"
        class="satellite-img"
        @click="showDetails(index)"
      >
    </div>
    <div class="info">
      <div v-if="!isActive" class="about">
        <h2>About</h2>
        <p>
          On the flat Earth, satellites do not go into orbit, get stuck in the dome.
          They are the <strong>Dome Breakers</strong>.
        </p>
        <div class="card">
          <h4 class="card-title">
            Usage
          </h4>
          <p class="card-body">
            Select a date on the left to see the satellites' status back then.
          </p>
          <p class="card-body">
            Discover information about satellites by clicking in one of them.
          </p>
        </div>
        <div class="card">
          <h4 class="card-title">
            GitHub
          </h4>
          <p class="card-body">
            Checkout the
            <a href="https://github.com/Gabriel-Aragao/dome-breakers" target="_blank">
              GitHub repository of the project.
            </a>
          </p>
        </div>
      </div>
      <div v-else class="details">
        <h2>Details</h2>
        <div
          :class="{'is-active': isActive}"
          class="card"
        >
          <h4 class="card-title">
            {{ name }}
          </h4>
          <p class="card-body">
            <strong>NSSDC ID:</strong> {{ id }} <br>
            <strong>Launch date:</strong> {{ launchDate }} <br>
            <strong>Launch location:</strong> {{ launchLocation }} <br>
            <strong>Launch vehicle:</strong> {{ launchVehicle }} <br>
            <strong>Orbite:</strong> {{ orbite }} <br>
            <strong>Manufacturers:</strong> {{ manufacturer }} <br>
            <strong>Status:</strong> {{ status }}
          </p>
        </div>
        <div class="card">
          <h4 class="card-title">
            Usage
          </h4>
          <p class="card-body">
            To get back click on the Flat Earth
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DomeBreakers',
  data () {
    return {
      satellites: this.$store.state.satellites,
      launchDates: this.$store.state.launchDates,
      positions: this.$store.state.positions,
      isActive: false,
      selectedDate: '01/01/2021',
      id: '',
      name: '',
      launchDate: '',
      launchLocation: '',
      launchVehicle: '',
      orbite: '',
      manufacturer: '',
      status: ''
    }
  },
  methods: {
    showDetails (index) {
      this.$data.isActive = true
      this.$data.name = this.$data.satellites[index].name
      this.$data.id = this.$data.satellites[index].id
      this.$data.launchDate = this.$data.satellites[index].launchDate
      this.$data.launchLocation = this.$data.satellites[index].launchLocation
      this.$data.launchVehicle = this.$data.satellites[index].launchVehicle
      this.$data.orbite = this.$data.satellites[index].orbite
      this.$data.manufacturer = this.$data.satellites[index].mainManufacturer
      this.$data.status = this.$data.satellites[index].status
    },
    hideDetails () {
      this.$data.isActive = false
    },
    dateStatus (launchDate) {
      for (let index = 0; index < this.$data.satellites.length; index++) {
        const satellite = this.$refs.satellites[index]
        satellite.style.visibility = 'hiden'
        alert(satellite[index])
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-direction: row;
  background-color: #050540;
  height: 100vh;
}
.sidebar{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 1.5%;
  width: 25%;
  max-width: 25%;
}
.dates{
  display: block;
}
.date-button{
  width: 45%;
  max-width: 45%;
  margin: 2% 1%;
  padding: 4% 0%;
  font-weight: 700;
  font-size: 17px;
  border-radius: 8px;
  border-color: rgba(0,0,0,0);
  background-color: #03498B;
  color: white;
}
.date-button:hover{
  cursor: pointer;
  background-color: #026BB0;
}
.date-button:focus{
  background-color: #2CA0DC;
}
.main{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 50%;
  max-width: 50%;
}
.base-img{
  width: 80%;
  z-index: 0;
}
.base-img:hover{
  cursor: pointer;
}
.satellite-img{
  z-index: 1;
  width: 2.5%;
  position: absolute;
}
.satellite-img:hover{
  cursor: pointer;
}
.info{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  max-width: 25%;
  padding: 15px 25px;
  color: white;
  background-color: #050E4A;
}
.card{
  margin: 45px 10px;
  border: white solid;
  border-radius: 8px;
  border-width: 2px;
}
.card-title{
  text-align: center;
  border-bottom: white solid;
  border-bottom-width: 2px;
  padding: 5px;
}
.card-body{
  text-align: left;
  line-height: 20px;
  padding: 10px;
}
.is-active{
  visibility: visible;
}
h1{
  font-weight: 1000;
  font-size: 40px;
  letter-spacing: 1px;
  margin: 15px;
  color: white;
  text-align: center;
}
h2{
  margin: 20px;
  color: white;
  text-align: center;
}
p{
  text-align: justify;
}
a {
  color: white;
  font-weight: 700;
}
</style>
