import axios from "axios";
import { useState } from "react";

export default function ReviewForm({ movie_id, reloadReviews }) {
    // Endpoint API
    const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`;
  
    // Stato iniziale del form
    const initialValue = {
      name: "",
      text: "",
      vote: "",
    };
  
    // Stato del form
    const [formData, setFormData] = useState(initialValue);
  
    // Funzione per gestire il submit del form
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios
        .post(endpoint, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          setFormData(initialValue); // Reset del form dopo l'invio
          reloadReviews(); // Ricarica le recensioni
        })
        .catch((err) => console.log(err));
    };
  
    // Funzione per aggiornare lo stato quando cambiano i valori del form
    const setFieldValue = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    return (
    <>
      <div className="card">
        <h5>Add reviews</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={setFieldValue}
              />
            </div>
            <div className="form-group">
              <label>Text</label>
              <textarea
                name="text"
                className="form-control"
                value={formData.text}
                onChange={setFieldValue}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Vote</label>
              <input
                type="number"
                min={1}
                max={5}
                name="vote"
                className="form-control"
                value={formData.vote}
                onChange={setFieldValue}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Crea Recensione
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    );
  }
