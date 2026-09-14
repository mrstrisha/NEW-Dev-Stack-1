
import "./TechnologyList.css"
import TechnologyCard from "./TechnologyCard";

function TechnologyList({ technologies, stack, addToStack }) {
    console.log(technologies);

return ( <section className="technology-section" id="technologies">


  <div className="section-heading">
    <p className="section-label">Explore the Technologies</p>

    <h2>
      Popular <span className="gradient-text">Technologies</span>
    </h2>

    <p>
      Discover the tools and technologies that modern developers
      use to build amazing products.
    </p>
  </div>

  <div className="technology-grid ">

    {technologies.map(technology => (
      <TechnologyCard
        key={technology.id}
        technology={technology}
        stack={stack}
        addToStack={addToStack}
      />
    ))}

  </div>

</section>


);
}

export default TechnologyList;
