  
      function removeTransition(event){
        if(event.propertyName !== "transform"){
          return //Nothing
        }
        //console.log(this)
        this.classList.remove("playing")
      }

      function playSound(event){
        //Select the audio file that has the same data-key as the keyCode of the letter pressed.
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
        if (!audio){
          return 
          //If there is no audio, it returns nothing and finishes the function. 
        }
        audio.currentTime = 0 //Rewinds the audio so you can start playing it again
        audio.play()  //Play the sound!
        key.classList.add("playing")
        setTimeout( () => //Forces the removal of the playing class.
        key.classList.remove("playing"), 250)
        }

      const keys = Array.from(document.querySelectorAll(".key"))
      keys.forEach(key => key.addEventListener("transitionend", removeTransition))
      window.addEventListener("keydown",playSound)