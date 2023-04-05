import React from "react";
import "../Dash/comentarios.css";

export default function Comentarios() {
  /*   const comentarios = axios(
    `${local}/admin/Comments/${id}?soft_delete=${boolean}`
  ).then((response) => {
    console.log(response.data);
  }); */

  return (
    <div class="container mt-5">
      <div class="row  d-flex justify-content-center">
        <div class="col-md-8">
          <div class="headings d-flex justify-content-between align-items-center mb-3">
            <h5>Comentarios(4)</h5>

            <div class="buttons">
              <span class="badge bg-white d-flex flex-row align-items-center">
                <span class="text-primary">ON</span>
                <div class="form-check form-switch"></div>
              </span>
            </div>
          </div>

          <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center">
                <span>
                  <small class="font-weight-bold text-primary">
                    james_olesenn
                  </small>{" "}
                  <small class="font-weight-bold">
                    Hmm, This poster looks cool
                  </small>
                </span>
              </div>

              <small>2 days ago</small>
            </div>

            <div class="action d-flex justify-content-between mt-2 align-items-center">
              <div class="reply px-4">
                <small>Eliminar</small>
                <span class="dots"></span>
                <small>Respuesta</small>
              </div>

              <div class="icons align-items-center">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-check-circle-o check-icon"></i>
              </div>
            </div>
          </div>

          <div class="card p-3 mt-2">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center">
                <span>
                  <small class="font-weight-bold text-primary">olan_sams</small>{" "}
                  <small class="font-weight-bold">
                    Loving your work and profile!{" "}
                  </small>
                </span>
              </div>

              <small>3 days ago</small>
            </div>

            <div class="action d-flex justify-content-between mt-2 align-items-center">
              <div class="reply px-4">
                <small>Eliminar</small>
                <span class="dots"></span>
                <small>Respuesta</small>
              </div>

              <div class="icons align-items-center">
                <i class="fa fa-check-circle-o check-icon text-primary"></i>
              </div>
            </div>
          </div>

          <div class="card p-3 mt-2">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center">
                <span>
                  <small class="font-weight-bold text-primary">
                    rashida_jones
                  </small>{" "}
                  <small class="font-weight-bold">
                    Really cool Which filter are you using?{" "}
                  </small>
                </span>
              </div>

              <small>3 days ago</small>
            </div>

            <div class="action d-flex justify-content-between mt-2 align-items-center">
              <div class="reply px-4">
                <small>Eliminar</small>
                <span class="dots"></span>
                <small>Respuesta</small>
              </div>

              <div class="icons align-items-center">
                <i class="fa fa-user-plus text-muted"></i>
                <i class="fa fa-star-o text-muted"></i>
                <i class="fa fa-check-circle-o check-icon text-primary"></i>
              </div>
            </div>
          </div>

          <div class="card p-3 mt-2">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center">
                <span>
                  <small class="font-weight-bold text-primary">
                    simona_rnasi
                  </small>{" "}
                  <small class="font-weight-bold text-primary">
                    @macky_lones
                  </small>{" "}
                  <small class="font-weight-bold text-primary">
                    @rashida_jones
                  </small>{" "}
                  <small class="font-weight-bold">Thanks </small>
                </span>
              </div>

              <small>3 days ago</small>
            </div>

            <div class="action d-flex justify-content-between mt-2 align-items-center">
              <div class="reply px-4">
                <small>Eliminar</small>
                <span class="dots"></span>
                <small>Respuesta</small>
              </div>

              <div class="icons align-items-center">
                <i class="fa fa-check-circle-o check-icon text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
