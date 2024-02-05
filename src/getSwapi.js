
const getSwapi = async (event) => {

  const result = await fetch('https://swapi.py4e.com/api/people');

  const items = await result.json();
  let persons=items.results;
  let results=persons.map(function(person) {
   return { 
    "nombre": `${person.name}`,
    "masa": `${person.mass}`,
    "peso": `${person.height}`,
    "color_cabello": `${person.hair_color}`,
    "color_piel": `${person.skin_color}`,
    "color_ojos": `${person.eye_color}`,
    "anio_nacimiento": `${person.birth_year}`,
    "genero": `${person.gender}`
  }
  });
  return {
    status: 200,
    body: {
      results,
    },
  };
};

module.exports = {
    getSwapi,
};