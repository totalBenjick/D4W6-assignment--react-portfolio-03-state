import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear
 
*/

// SE PULSA EL BOTON, NECESITAMOS UN onClick



class ShowHideTech extends Component {
  constructor(props){
    super(props);

    this.state = {
      status:false,
      /*clasif:"techlist--hidden",*/
      cuadro:"+ Show Tech"
    }

  }

  changeStatus = (e) =>{
    e.preventDefault();
      if (this.state.status === false) {
            this.setState({
              status:!this.state.status,
              cuadro:"- Hide Tech",
            })

         }else{
          this.setState({
            status:!this.state.status,
            cuadro:"+ Show Tech",

          }
        )
      }
  }

  render() {

    let techlistStatus = `techlist--hidden`

    return (
      <section>
        <h4>Technologies</h4>
        <button className="toggle-techlist" onClick={this.changeStatus} >{this.state.cuadro}</button>

        <div className={`techlist ${(this.state.status ===true)? "": "techlist--hidden"}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech;
