const TABLA = 'user'

module.exports=function() {
  let restorants = [];
  
  async function getList(){
    return restorants
  }
  async function search(req){
    let response = []
    restorants.forEach(res => {
      if (res.kindOfRestaurant == req.params.name){
        response.push(res)
      }
    });
    return response
  }

  async function saveRestorant(req){
    if (!req.body.name || !req.body.kindOfRestaurant || !req.body.songs) {
      throw {message: "Los campos name, kindOfRestaurant y songs son obligatorios"}
    }
    
    restorants.forEach(res => {
      if (res.name == req.body.name){
        throw {message: "El restaurante ya existe!"}
      }
    });

    const restorant={
      name: req.body.name,
      kindOfRestaurant: req.body.kindOfRestaurant,
      songs: req.body.songs
    }

    restorants.push(restorant)

    return restorant
  }

  return {
    saveRestorant,
    getList,
    search
  }
}
