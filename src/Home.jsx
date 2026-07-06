import { useNavigate } from "react-router-dom";
function Home() {
  
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/login");
  }

    
  return (
    <div>
      <h1>Hii welcome to the home page</h1>
      <div className="dope">
        <div >
     
          <input onClick={ handleNavigate} type="text" placeholder="enter your name" />
          <button>submit</button>
          <br />
          <br />
          <input type="text" placeholder="enter your age" />
          <button>submit</button>
          <br />
          <br />
          <input type="text" placeholder="enter your email" />
          <button>submit</button>
        </div>
        <div className="hpp">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedaZRc-XAL7U2gXSiTBTwBlU427PWzb4csJ_6KHIkQQ&s=10"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
