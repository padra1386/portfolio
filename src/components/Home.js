import "./Home.css";

function Home() {
  return (
    <div className="home container">
      <div className="home-top d-flex my-5 ">
        <h1 className="text-white header-name">Padra Ahani</h1>
        <h3 className="text-white mt-2">
          Love Programming, Reactjs, Nextjs, Web....
        </h3>
      </div>

      <div className="home-center">
        <div className="bar my-5">
          <h6 className="text-white mb-2">Reactjs</h6>
          <div class="progress">
            <div
              class="progress-bar"
              style={{ width: "50%" }}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>
        </div>

        <div className="bar my-5">
          <h6 className="text-white mb-2">Nextjs</h6>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
        </div>

        <div className="bar my-5">
          <h6 className="text-white mb-2">Html</h6>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
        </div>

        <div className="bar my-5">
          <h6 className="text-white mb-2">Css</h6>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>

        <div className="bar my-5">
          <h6 className="text-white mb-2">Firebase</h6>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "20%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              20%
            </div>
          </div>
        </div>
      </div>

      <div className="home-footer mt-5 d-flex">
        <h1 className="text-white">Want to call ?</h1>
        <button
          class="btn btn-primary mx-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        >
          See my information
        </button>

        <div
          class="offcanvas offcanvas-top bg-dark text-white"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div class="offcanvas-header ">
            <h5 id="offcanvasTopLabel">Padra Ahani</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="d-flex">
              <label class="form-label ">Email address:</label>
              <p className="mx-2">padrahani@gmail.com</p>
            </div>
            <div class="d-flex">
              <label class="form-label ">Instagram:</label>
              <a className="mx-2">https://www.instagram.com/padra._.ahani/</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
