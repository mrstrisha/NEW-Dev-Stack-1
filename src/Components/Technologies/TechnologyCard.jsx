import"./TechnologiesCard.css"


function TechnologyCard({ technology, stack, addToStack }) {

const alreadyAdded = stack.some(
item => item.id === technology.id
);

return ( 
<div className="technology-card">

  <div className="card-top">

    <img
      src={technology.icon}
      alt={technology.name}
      className="technology-icon"
    />

    <span className="badge">
      {technology.badge}
    </span>

  </div>

  <h3>{technology.name}</h3>

  <p className="card-description">
    {technology.description}
  </p>

  <div className="card-info">

    <span className="category">
      {technology.category}
    </span>

    <span className="difficulty">
      {technology.difficulty}
    </span>

  </div>

  <div className="card-bottom">

    <span className="rating">
      ★ {technology.rating}
    </span>

    <button
      className={alreadyAdded ? "added-button" : "add-button"}
      disabled={alreadyAdded}
      onClick={() => addToStack(technology)}
    >
      {alreadyAdded
        ? "✓ Added to Stack"
        : "Add to Stack"
      }
    </button>

  </div>

</div>


);
}

export default TechnologyCard;