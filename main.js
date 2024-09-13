let     input = document.querySelector('.input'),
        btn   = document.querySelector('.btn'),
        time  = document.querySelector('.time'),
        gameZone = document.querySelector('.game__zone'),
        score = 0,
        gameTime = 0,
        interval = 0;
        miss =0;
   

btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        gameZone.innerHTML = ''
        score = 0
        miss = 0
        startGame()
    }else {
        alert('Нужно вести минимум 5 секунд')
    }
})

gameZone.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }else{
        miss++
        
        
    }
})


function startGame() {
    time.innerHTML = gameTime
    interval = setInterval(() => decreaseTime(), 1000)
    createBall()
}

function decreaseTime() {
    if(gameTime == 1) {
        time.innerHTML = 0
        endGame()
    }else {
        time.innerHTML = --gameTime
    }
    
}

function endGame() {
let alltries = score + miss
let procent = (score/alltries)*100
    gameZone.innerHTML = `<h2>Вы набрали ${score} баллов.

          Всего попыток: ${alltries}      Процент попаданий: ${procent.toFixed(1)}%</h2>`
    clearInterval(interval)
}


function createBall() {
    
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = random(20,80)
    let randomcolor =random(1,5)
    let form = ['arrow1','arrow2','nonagon','message','romb','cross']
    let randomform=form[random(0,form.length)]
    switch( randomform ){
        case 'arrow1':
            ball.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            break
        case 'arrow2':ball.style.clipPath = 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
            break
        case 'nonagon':ball.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            break
        case 'message':ball.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'
            break
        case 'romb':ball.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'
            break
            case 'cross':ball.style.clipPath = 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'
            break
        
        
    }
    if(randomcolor==1){
        ball.style.background = 'red'
       
    } else if(randomcolor==2){
        ball.style.background = 'yellow'
        

    }else if(randomcolor==3){
        ball.style.background = 'purple'

    }else if(randomcolor==4){
        ball.style.background = 'blue'

    }else if(randomcolor==5){
        ball.style.background = 'pink'

    }
    
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    
    
    let coor = gameZone.getBoundingClientRect()
    
    let leftValue = random(0,coor.width - size)
    let topValue  = random(0,coor.height - size)
    
    ball.style.left = leftValue + 'px'
    ball.style.top  = topValue + 'px' 
    
    gameZone.append(ball)
    
}


function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min )
}
let form = ['arrow1','arrow2','nonagon','message','romb']
let randomform=form[random(0,form.length)]
console.log(randomform);
