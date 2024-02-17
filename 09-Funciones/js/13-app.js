
const reproductor = {
    cancion: '',
    reproducir: id =>  console.log(`Reproduciendo cancion con el id: ${id}`),
    pausar: () =>  console.log(`pausando... la concion`),
    borrar: id => console.log(`Borrando cancion... con el id; ${id}`),
    playList: nombre => console.log(`Cancion agregada a la play list: ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo cancion... con el id; ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = 'nuevanuevas'
reproductor.obtenerCancion

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(20)
reproductor.playList('maluma')
reproductor.playList('joger')
reproductor.reproducirPlayList('maluma')

