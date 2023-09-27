import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeSearch() {
  const [query, setQuery] = useState(''); // Estado para la consulta de búsqueda
  const [recipes, setRecipes] = useState([]); // Estado para almacenar las recetas

  useEffect(() => {
    // Función para realizar la solicitud a la API de Edamam
    const getRecipes = async () => {
      try {
        const apiKey = 'de69a58d38126a4b86a12e795480ef50'; // Reemplaza con tu clave de API de Edamam
        const appId = 'ecc307f7'; // Reemplaza con tu ID de aplicación de Edamam

        // Construye la URL de la solicitud con la consulta de búsqueda
        const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}`;

        // Realiza la solicitud a la API
        const response = await axios.get(apiUrl);

        // Actualiza el estado con los resultados de la búsqueda
        setRecipes(response.data.hits);
      } catch (error) {
        console.error('Error al obtener recetas:', error);
      }
    };

    // Llama a la función getRecipes cuando cambia la consulta de búsqueda
    if (query) {
      getRecipes();
    }
  }, [query]);

  return (
    <div>
      <h2>Buscador de recetas</h2>
      <input
        type="text"
        placeholder="Buscar recetas"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.recipe.label}</h3>
            <p>Calorías: {recipe.recipe.calories.toFixed(2)}</p>
            {/* Agrega más detalles de la receta según lo que necesites */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeSearch;
