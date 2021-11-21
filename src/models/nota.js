class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal(){
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }
    

    mediaCA() {
        let media = this.mediaFinal()
        if (media >= 9 && media <= 10){
            return 'SS'
        }
        else if (media >= 7 && media <= 8.9){
            return 'MS'
        }
        else if (media >= 5 && media <= 6.9){
            return 'MM'
        }
        else if (media >= 3 && media <= 4.9){
            return 'MI'
        }
        else if (media >= 0.1 && media <= 2.9){
            return 'II'
        }
        else if (media == 0 || media == null){
            return 'SR'
        }
    }
}


module.exports = Nota;