import Gallery_Item from "./PortraitPic"
import SearchForm from "./SearchForm"

function Gallery() {
  return (
    <section className="gallery-container">
      <SearchForm />

      <div className="gallery-subtitle">
        <h2 className="subtitle-1">Amaze yourself</h2>
        <h4 className="subtitle-2">Our top picks for you</h4>
      </div>
      {/* Portraits section */}
      <section className="gallery-portraits">
        <Gallery_Item
          className="portrait-card"
          pic={
            "https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="portrait-card"
          pic={
            "https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="portrait-card"
          pic={
            "https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="portrait-card"
          pic={
            "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="portrait-card"
          pic={
            "https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="portrait-card"
          pic={
            "https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="portrait-card"
          pic={
            "https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="portrait-card"
          pic={
            "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
      </section>
      <div className="gallery-subtitle">
        <h2 className="subtitle-1">More for you</h2>
        <h4 className="subtitle-2">Incredible pictures just for you.</h4>
      </div>
      <section className="gallery-squares">
        <Gallery_Item
          className="square-card"
          pic={
            "https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="square-card"
          pic={
            "https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="square-card"
          pic={
            "https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="square-card"
          pic={
            "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="square-card"
          pic={
            "https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="square-card"
          pic={
            "https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="square-card"
          pic={
            "https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
        <Gallery_Item
          className="square-card"
          pic={
            "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          }
        />
      </section>
    </section>
  )
}

export default Gallery
