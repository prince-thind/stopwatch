function TimeForm(){
    return(
     
        <form id="form" className="container">
            <div className="d-flex mt-5 justify-content-center">
              <div className="col-auto">
                <input
                  type="text"
                  id="time"
                  className="form-control"
                  placeholder="Time"
                />
              </div>
              <div className="col-auto px-2">
                <button className="btn btn-primary"> Create</button>
              </div>
          </div>
        </form>

    )
}

export default TimeForm;