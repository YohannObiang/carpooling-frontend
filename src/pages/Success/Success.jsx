import React from "react";
import '../../App.css'

export default function Success() {
  
  
  
    return (
     
        <div className="SuccessPage">
        <div className="card">
        <div style={{borderRadius:'200px', height:'200px', width:'200px', background: '#F8FAF5', margin:'0 auto'}}>
          <i className="checkmark">✓</i>
        </div>
          <h1 className="success">Requête soumise</h1> 
          <p>Vous serez notifié aussitôt<br/>  qu'un chauffeur aura accepter votre requête!</p>
        </div>
      </div>
     
    );
  }