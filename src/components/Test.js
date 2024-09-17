import React, { useState } from 'react'
import data from './data.json'

function Test() {
    const [count, setCount] = useState(0)
    const [store, setStore] = useState({
        name : '',
        email : '',
        DOB : '',
        info : '',
        contact : '',
    })

    // console.log(store);

    const handelchange = (e) =>{

      const name = e.target.name;
    const value = e.target.value;
    setStore(values => ({...values, [name]: value}))
      // setStore({...store, [e.target.name]: e.target.value});
        // setStore(...store, e.target.value)
    }

    const handelsubmit = (e) => {
        e.preventDefault();
    }

    // Create a function that calls external any api for each 500ms interval

    // const interval = setInterval(()=>{
    //   console.log(">>>>> done")
    //    }, 1000)
    //    console.log(interval)


    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  
    const [searchTerm, setSearchTerm] = useState('');
    
    // Filter the items based on the search term
    const filteredItems = items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };

  return (
  <>
  {/* Create a react component and fetch data from jsonplaceholder and list down all the products/users, api should be called for each reload of the page,
   and create a sample loader to show during data fetching */}
  <div>
    {data?.products.map((items)=>(
            <>
         <h1>title : {items.title}</h1>
         <p>description : {items.description}</p>
         </>
    ))
    }

    {/* Implement a counter component, but instead of using useState, use useReducer to handle multiple actions like increment, decrement, and reset */}
  </div>
   <p>count : {count}</p>
   <button onClick={( )=> setCount(count + 1)}> +</button>
   <button  onClick={() => setCount(count-1)}>-</button>
  <div>

  {/* Create a multi step form using single useState which collects used data i.e name, email, dob, contact info etc (any 5 inputs) */}

  <div>
  <form action="" onSubmit={handelsubmit} >
<input type="text"  placeholder='name' onChange={handelchange} value={store.name} name="name"/>
<input type="text"  placeholder='email' onChange={handelchange} value={store.email} name="email"/>
<input type="text"  placeholder='DOB' onChange={handelchange} value={store.DOB} name="DOB"/>
<input type="text"  placeholder='info' onChange={handelchange} value={store.info} name="info"/>
<input type="text"  placeholder='contact' onChange={handelchange} value={store.contact} name="contact"/>
<button type="submit" > Submit </button>
</form>
  </div>


  {/* Create a component that takes a list of items and a search input field. When the user types in the input field, the list of items should be filtered based on the input,
   below items for reference const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];   */}


   <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  </div>

    </>
   
  )
}

export default Test