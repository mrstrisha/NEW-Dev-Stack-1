
import "./YourStuck.css"



function YourStack({ stack, removeFromStack, removeAll }) {

return ( 
    <div className="stack-section">


  <div className="stack-header">

    <div>
      <p className="section-label">YOUR SELECTION</p>

      <h2>Your Stack</h2>
    </div>

    <span className="stack-count">
      {stack.length}
    </span>

  </div>

  {stack.length === 0 ? (

    <div className="empty-stack">
      <div className="empty-icon">
        
      </div>

      <h3>Your stack is empty</h3>

      <p>
        Add technologies from the list to build
        your developer stack.
      </p>
    </div>

  ) : (

    <div>

      <div className="stack-items">

        {stack.map(item => (

          <div className="stack-item" key={item.id}>

            <img
              src={item.icon}
              alt={item.name}
            />

            <div className="stack-item-info">
              <h4>{item.name}</h4>
              <p>{item.category}</p>
            </div>

            <button
              className="remove-button"
              onClick={() => removeFromStack(item.id)}
            >
              ✕
            </button>

          </div>

        ))}

      </div>

      <button
        className="remove-all"
        onClick={removeAll}
      >
        Remove All
      </button>

    </div>

  )}

</div>


);
}

export default YourStack;
