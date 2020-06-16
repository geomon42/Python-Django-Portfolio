import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Blog() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("http://127.0.0.1:8000/api/blog/");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <NavBar />
      <div>
        {items.map((item) => (
          <div>
            <div>
              <img src={item.image} />
            </div>
            <div>
              <h3>{item.blog_name}</h3>
            </div>
            <div>
              <p>Details : {item.details}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
