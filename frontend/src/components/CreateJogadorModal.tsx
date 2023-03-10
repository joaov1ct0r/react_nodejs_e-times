import React from "react";
import ICreateJogadorForm from "../interfaces/ICreateJogadorForm";
import useContextStates from "../hooks/useContextStates";

export default function CreateJogadorModal() {
  const { time, useFormCreateJogador, createJogador } = useContextStates();
  
  const { handleSubmit, register, reset, errors } = useFormCreateJogador();

  return (
    <div
      className="modal fade"
      id="createJogadorModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Crie o seu jogador
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            className="modal-body"
            onSubmit={handleSubmit((data: ICreateJogadorForm) => {
              createJogador({nome: data.nome, idade: data.idade, time_id: String(time.id)});

              reset();
            })}
          >
            <div className="input-group mb-3">
              <input
                {...register("time_id")}
                type="number"
                placeholder={String(time?.id)}
                className="form-control"
                disabled
              ></input>
            </div>

            <span className="input-group-text mb-3" id="basic-addon2">
              Escolha o nome do seu jogador:
            </span>
            <div className="input-group mb-3">
              <input
                {...register("nome", {
                  required: {
                    value: true,
                    message: "Nome é obrigatorio",
                  },
                  pattern: {
                    value: /[a-z][A-Z]{1,45}$/gi,
                    message: "Nome invalido",
                  },
                })}
                type="text"
                placeholder="Nome:"
                className="form-control"
                required
              ></input>
              <br />
              <p className="text text-danger">{errors.nome?.message}</p>
            </div>

            <div className="input-group mb-3">
              <input
                {...register("idade", {
                  required: {
                    value: true,
                    message: "Idade é obrigatorio",
                  },
                  pattern: {
                    value: /[0-9]{1,3}$/,
                    message: "Idade invalida",
                  },
                })}
                type="text"
                placeholder="Idade:"
                className="form-control"
                required
              ></input>
              <br />
              <p className="text text-danger">{errors.idade?.message}</p>
            </div>

            <button
              type="button"
              className="btn btn-danger mx-2"
              data-bs-dismiss="modal"
              onClick={() => reset()}
            >
              Fechar
            </button>
            <button type="submit" className="btn btn-success">
              Criar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}