const url= "http://universities.hipolabs.com/search?name=middle&";
let html1="";
 function searching (){
     let searchRequest = $(this).val()
    let search =`${url}${searchRequest}`
    fetch(search)
    .then((response)=>{
        return response.json()
        
    })
    .then((json)=>{
        let result=json;
        if (result){
            html1=`<table> <tr> <td>№</td> <td>Code</td> <td>Country</td> <td>Domains</td> <td>Name</td> <td>State Province</td> <td>Web pages</td></tr>`
        for(let i=0; i<result.length; i++){
            let index = i
            let code = result[i]["alpha_two_code"]
            let country = result[i]["country"]
            let domains = ''
            for (let n= 0; n<result[i]["domains"].length; n++){
                domains += `${result[i]["domains"][n]} `
            }
            let name = result[i]["name"]
            let state_province = result[i]["state-province"]
            if (state_province == null){
                state_province = '      -      '
            }
            let pages = ''
            for (let n= 0; n<result[i]["web_pages"].length; n++){
                pages += `${result[i]["web_pages"][n]} `
            }
            html1+= ` <tr> <td>${index}</td> <td>${code}</td> <td>${country}</td> <td>${domains}</td> <td>${name}</td> <td>${state_province}</td> <td>${pages}</td></tr> `
        }
        html1+=`</table>`
        $(".results").html(html1)
    }
    })
}

$("#search").on("click", searching); 


// for(let i=0; i<result.length; i++){
//     let image = result[i]["Poster"];
//     let id=result[i]["imdbID"];
//     let year =result[i]["Year"];
//     let title = result[i]["Title"];
//     html1+=`<div class="container" style="background-color: rgba(245, 233, 233, 0.350); border-radius:5px; margin-bottom: 30px; box-shadow: 5px 0 15px rgba(245, 233, 233, 0.350)">
//     <div class="img"><img style="width:350px" src="${image}"/></div>
//     <div class="title" style="font-size:23px; text-align:center; color: black; margin: 10px auto 10px auto; width:350px">${title}</div>
//     <div class="year" style="font-size:23px; text-align:center; color: black">${year}</div>
//     <div class="details">Details...<span style="display:none">${id}</span></div>
//     </div>`;
// 0:
// alpha_two_code: "KW"
// country: "Kuwait"
// domains: Array(1)
// 0: "aum.edu.kw"
// length: 1
// __proto__: Array(0)
// name: "American University of Middle East"
// state-province: null
// web_pages: Array(1)
// 0: "http://www.aum.edu.kw/"
// length: 1
// __proto__: Array(0)
// __proto__: Object