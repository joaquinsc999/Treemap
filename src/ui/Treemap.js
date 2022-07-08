import React, {useEffect, useState} from "react"
import Chart from "react-apexcharts";


/* EXPLICACION DEL FORMATO DE LOS DATOS DEL TREEMAP 8 */
/*Para que el grafico funcione correr en la linea de comandos
'npm install --save react-apexcharts apexcharts' 
o 
'yarn add react-apexcharts apexcharts' */

/* Treemap data is an array of objects like 
this one treemap = [{x: 'Champions', y: 218}, {x: 'Loyal Customers', y: 149} ...the rest of the data] 
The 'x' represents the category, and the 'y' the number of data points that are part of that category
*/


/* El prop de width acepta un integer para setear el width del gráfico */


export const Treemap = ({ treemapData, width }) => {

  const config = {
    options: {
      plotOptions: {
        treemap: {
          distributed: true
        }
      }
    },
    series: [
      {
        data: treemapData
      },
    ]
  }

  return(
    <div className="treemap">
      <Chart
        options={config.options}
        series={config.series}
        type="treemap"
        width={width}
      />
    </div>
  )

}

