const onClickBtn =()=>{
    const input = document.getElementById('input');
    const inputValue = input.value;
    input.value = '';
    // console.log(inputValue); 
    try{
        const age = parseInt(inputValue);
        if(isNaN(age)){
            throw "Enter A number"
        }
        else if(age <= 10){
            throw "Babies not allowed"   
        }
        else if(age < 18){
            throw "You should be 18+"   
        }
        else{
            console.log('Welcome to the clan')
        }
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
    finally{
        console.log('all done')
    }

};