<template>
  <div class="container">
    <div class="sidebar">
      <div class="dates">
        <button
          class="see-all-button"
          @click="seeAll()"
        >
          See all
        </button>
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
      <div class="animation">
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
    dateLowerThen (date1, date2) {
      if (date2 === 'N/A') {
        return true
      }
      const year1 = Number(date1.slice(6, 10))
      const year2 = Number(date2.slice(6, 10))
      if (year1 < year2) {
        return true
      } else if (year1 > year2) {
        return false
      } else {
        const month1 = Number(date1.slice(3, 5))
        const month2 = Number(date2.slice(3, 5))
        if (month1 < month2) {
          return true
        } else if (month1 > month2) {
          return false
        } else {
          const day1 = Number(date1.slice(0, 2))
          const day2 = Number(date2.slice(0, 2))
          return (day1 < day2)
        }
      }
    },
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
      const satellites = this.$data.satellites
      for (let index = 0; index < satellites.length; index++) {
        const satelliteImg = this.$refs.satellites[index]
        satelliteImg.style.visibility = 'hidden'
      }
      for (let index = 0; index < satellites.length; index++) {
        const satelliteImg = this.$refs.satellites[index]
        if (!this.dateLowerThen(launchDate, satellites[index].launchDate)) {
          if (
            !satellites[index].status.toLowerCase().includes('falha') &&
            this.dateLowerThen(launchDate, satellites[index].endOfOperations)
          ) {
            satelliteImg.src = require('@/assets/satellite.gif')
            satelliteImg.style.visibility = 'visible'
          } else {
            satelliteImg.src = require('@/assets/satellite-off.png')
            satelliteImg.style.visibility = 'visible'
          }
        }
      }
    },
    seeAll () {
      const satellites = this.$data.satellites
      for (let index = 0; index < satellites.length; index++) {
        const satelliteImg = this.$refs.satellites[index]
        satelliteImg.src = require('@/assets/satellite.gif')
        satelliteImg.style.visibility = 'visible'
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
  z-index: 0;
}
.sidebar{
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 0px 1.5%;
  width: 25%;
  max-width: 25%;
  z-index: 1;
}
.dates{
  display: block;
  z-index: 2;
}
.see-all-button{
  width: 91%;
  margin: 2% 1%;
  padding: 4% 0%;
  font-weight: 700;
  font-size: 17px;
  border-radius: 8px;
  border-color: rgba(0,0,0,0);
  background-color: #03498B;
  color: white;
  z-index: 3;
}
.date-button{
  width: 45%;
  margin: 2% 1%;
  padding: 4% 0%;
  font-weight: 700;
  font-size: 17px;
  border-radius: 8px;
  border-color: rgba(0,0,0,0);
  background-color: #03498B;
  color: white;
  z-index: 3;
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
  position: relative;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  max-width: 50%;
  z-index: 1;
}
.animation{
  display: inline-block;
  position: relative;
  z-index: inherit;
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  z-index: 2;
}
.base-img{
  width: 85%;
  position: static;
  z-index: -2;
}
.base-img:hover{
  cursor: pointer;
}
.satellite-img{
  width: 5%;
  position: absolute;
  z-index: 3;
  visibility: visible;
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
  z-index: 1;
}
.card{
  margin: 45px 10px;
  border: white solid;
  border-radius: 8px;
  border-width: 2px;
  z-index: 2;
}
.card-title{
  text-align: center;
  border-bottom: white solid;
  border-bottom-width: 2px;
  padding: 5px;
  z-index: 3;
}
.card-body{
  text-align: left;
  line-height: 20px;
  padding: 10px;
  z-index: 3;
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
