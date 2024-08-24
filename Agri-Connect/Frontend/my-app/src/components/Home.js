function Home() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: First slide"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <image
                className="img-fluid"
                href="https://www.cbi.eu/sites/default/files/styles/hero_banner_1920_x_480_big/public/visuals/exotic-tropical-fruit_banner3_pexels-jane-doan-1132047.jpg"
              ></image>
            </svg>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Second slide"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <image
                className="img-fluid"
                x="0"
                y="0"
                href="https://www.lifeextension.com/-/media/lifeextension/wellness/wellness-index-jumbotrons/superfoods_hero.jpg?rev=77ad246a25eb48c2bb912a1532b4672f&h=480&w=1920&la=en&hash=A5B45C713D00B05C6883D50539F46188"
              ></image>
            </svg>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Third slide"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <image
                className="img-fluid"
                x="0"
                y="0"
                href="https://static.vecteezy.com/system/resources/previews/025/480/722/large_2x/vegetables-set-and-spices-for-cooking-on-dark-background-ai-generated-free-photo.jpg"
              ></image>
            </svg>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <section id="contents" class="about py-5">
        <div class="container" style={{ color: "white" }}>
          <div class="row">
            <h2 style={{ textAlign: "center", color: "white" }}>Contents</h2>
            <div class="col-xl-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet.
              </p>
            </div>
            <div class="col-xl-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet.
              </p>
            </div>
            <div class="col-xl-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet.
              </p>
            </div>
            <div class="col-xl-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
