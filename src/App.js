import './App.css';
import {
  MdOutlinePersonOutline, MdStore,
  MdLibraryBooks, MdComputer,
  MdEventNote, MdOutlineEvent,
  MdOutlineTimer, MdPersonPin,
  MdKeyboardBackspace
} from "react-icons/md";

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h5 className="qq">
          <span className="ww">B</span>EERSTORE
        </h5>
        <p className='p'><MdPersonPin /> Hi,Jonathan </p>
      </div>

      <div className='nav'>
        <a className='links' href="#"><MdOutlinePersonOutline className='icon' /> User Management</a><hr />
        <a className='links' href="#"><MdStore /> Store Management </a><hr />
        <a className='links' href="#"><MdLibraryBooks /> Create Report</a><hr />
        <a className='links' href="#"><MdComputer /> ECommerce Setting </a><hr />
        <a className='links' href="#"><MdEventNote /> Delivery Setting/ Fees</a><hr />
        <a className='links' href="#"><MdOutlineEvent /> Store Feature </a><hr />
        <a className='links' href="#"><MdOutlineTimer /> Holiday Hours </a><hr />
      </div>

      <div className='container-main '>
        <div>
          <h1><b>Edit Store</b></h1>
          <h5><span className='qqq'><MdKeyboardBackspace/></span> BACK TO STORE MANAGEMENT</h5><hr></hr>
        </div>
        <h2 > Basic Information </h2>
        <div className='flex-container'>
          <div>
            <form>
              <label> Store Number </label><br />
              <input className='input' id="sto-no" autoComplete="off" />
              <br />
              <br></br>

              <label> Street Number </label><br />
              <input className='input' id="st-no" autoComplete="off" />
              <br />
              <br></br>

              <label>City </label><br />
              <input className='input' id="city" autoComplete="off" />
              <br />
              <br></br>

              <label> Postal Code </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>

              <label> Geolocation Latitude </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>

              <label> Phone Number</label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>
            </form>
          </div>

          <div className='right'>
            <form>
              <label> Store Name</label><br />
              <input className='input' id="sto-n" autoComplete="off" />
              <br />
              <br></br>

              <label>Street Name </label><br />
              <input className='input' id="st-n" autoComplete="off" />
              <br />
              <br></br>

              <label> Province </label><br />
              <select className='select1'>
                <option> On</option>
                <option> Off</option>
              </select>
              <br />
              <br></br>

              <label> Country </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>

              <label> Geolocation Longitude </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>

              <label> Features </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>
            </form>
          </div>
        </div>

        <h2> Store Hours  </h2>
        <div className="flex-container" >
          <div>
            <form>
              <label> Monday </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>

              <label> Wednesday </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>

              <label> Friday </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>

              <label> Sunday </label><br />
              <input className='input' autoComplete="off" />
              <br />
            </form>
          </div>

          <div className='right'>
            <form>
              <label> Tuesday</label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>

              <label> Thursday </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>

              <label> Saturday </label><br />
              <input className='input' autoComplete="off" />
              <br />
              <br></br>
            </form>
          </div>

        </div>

        <h2>Delivery Fee</h2>
        <label> Select Delivery Fee</label>
        <br />
        <select className='select2'>
          <option> 11.95 </option>
          <option> 12.95 </option>
        </select>
        <br />
        <br></br>

        <h2> Displayed Store Features </h2>
        <div className='flex-container'>
          <div>
            <div className="check">
              <input type="checkbox" />
              <label> Accepting Empties</label>
            </div><br />

            <div className="check">
              <input type="checkbox" />
              <label> Kiosk </label>
            </div><br />

            <div className="check">
              <input type="checkbox" />
              <label> Delivery </label>
            </div><br />
          </div>

          <div className='right2'>
            <div className="check">
              <input type="checkbox" />
              <label> In-Store Pickup </label>
            </div><br />

            <div className="check">
              <input type="checkbox" />
              <label> Curbside Pickup </label>
            </div><br />

            <div className="check">
              <input type="checkbox" />
              <label> Drive-Thru </label>
            </div><br />
          </div>
        </div>
        <br /> 
        <button type="btn" className="s-btn"> Save </button>
        <button type="btn" className="c-btn"> Cancel </button>
      </div>
    </div>
  );
}

export default App;