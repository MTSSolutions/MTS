const searchBox = document.getElementById("search-input");
const textBox = document.getElementById("text-box");
const sugBox = document.getElementById("sug-box");
const searchIcon = document.querySelector(".search-icon")


textBox.onkeyup =  (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = sug.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());  
        });  
        emptyArray = emptyArray.map((data)=>{
            return data = '<li><a>'+ data +'</a></li>';
        });
        console.log(emptyArray);
        searchBox.classList.add("active");
        showSug(emptyArray);
        let allList = sugBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
           allList[i].setAttribute("onclick","select(this)")
            
        }
        let allSearch = sugBox.querySelectorAll("a");
        
    }else{
        searchBox.classList.remove("active");
    }
    
}

function select(element){
    let selectDataUser = element.textContent;
    textBox.value = selectDataUser;
    searchBox.classList.remove("active");
}

function showSug(list){
    let listData;
    if(!list.length){
        userValue = textBox.value;
        listData = '<li><a>'+userValue + '</a></li>';
    }else{
        listData = list.join('');
    }
    sugBox.innerHTML = listData;
}

    
