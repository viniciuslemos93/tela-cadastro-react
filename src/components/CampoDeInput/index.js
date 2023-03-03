function CampoDeInput({nome, id}){
    return (
      <div className="lineInput">
         <label for={id}>{nome} </label>
         <input type="text" id={id} />
      </div>
  )

  }

export default CampoDeInput