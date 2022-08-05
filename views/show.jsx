const React = require('react');
const Default = require('.layouts/Default');

function Show ({bread}) {
    console.log(bread.name)
        return (
            <Default>
                <h2>Show Page</h2>
                <h3>
                    <a href={`/breads/${bread.id}`}>
                    {bread.name}
                    </a>
               </h3>
                <p> 
                    and it
                    {
                        bread.hasGluten 
                        ? <span> does </span>
                        : <span> does NOT </span>
                    }
                    have gluten.
                </p>
                <img src={bread.image} alt={bread.name}/>
                <p>Baked by {bread.baker}</p>
                <a href={`/breads/${bread.id}/edit`}>
                    <button>Edit</button>
                </a>
                <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                    <input type='submit' value="DELETE"/>
                </form>
                <a href={`/breads/${index}/edit`}><button>Edit</button></a>
                <li><a href="/breads">Go Home</a></li>
            </Default>
        )
}

module.exports = show