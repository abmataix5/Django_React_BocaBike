import React from "react";
import NavDashboard from "../../components/admin/navDashboard"
export default function Home() {

    return (

  
<div className="container-fluid mt">
  <div className="row">

<NavDashboard></NavDashboard>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
   

   

      <h2>Estaciones con más alquileres</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col">Header</th>
              <th className="col">Header</th>
              <th className="col">Header</th>
              <th className="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
      
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>

    );
  }