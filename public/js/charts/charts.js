var chart
var ctx

async function BuscarDados() {

  ctx = document.getElementById('myChart').getContext('2d');

  var selectDataIndex = document.getElementById("selectData").selectedIndex;
  var selectDataOption = document.getElementById("selectData").options;
  var selectData = selectDataOption[selectDataIndex].value

  var Filial
  var Data


  if (selectData == 0) {
    await axios.get('/Pesquisa')
      .then(function (response) {

        Filial = response.data[0]
        Data = response.data[1]

      })
      .catch(function (err) {
        console.log(err)
      })

    const filiais = Filial.map((filial, index, array) => {
      return filial.Filial;
    })
    const totais = Filial.map((filial, index, array) => {
      return filial.Total;
    })

     chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: filiais,
        datasets: [{
          label: '',
          data: totais,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(161, 185, 106, 0.2)',
            'rgba(255, 64, 198, 0.2)',
            'rgba(93, 64, 255, 0.2)',
            'rgba(255, 70, 64, 0.2)',
            'rgba(140, 255, 64, 0.2)',
            'rgba(64, 255, 230, 0.2)',
            'rgba(214, 255, 64, 0.2)',
            'rgba(255, 64, 128, 0.2)',
            'rgba(252, 255, 64, 0.2)',
            'rgba(108, 206, 125, 0.2)',
            'rgba(84, 31, 230, 0.2)',
            'rgba(160, 2, 125, 0.2)',
            'rgba(7, 51, 71, 0.2)',
            'rgba(54, 68, 30, 0.2)',
            'rgba(36, 0, 0, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(161, 185, 106, 1)',
            'rgba(255, 64, 198, 1)',
            'rgba(93, 64, 255, 1)',
            'rgba(255, 70, 64, 1)',
            'rgba(255, 70, 64, 1)',
            'rgba(64, 255, 230, 1)',
            'rgba(214, 255, 64, 1)',
            'rgba(255, 64, 128, 1)',
            'rgba(252, 255, 64, 1)',
            'rgba(108, 206, 125, 1)',
            'rgba(84, 31, 230, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(160, 2, 125, 01)',
            'rgba(7, 51, 71, 1)',
            'rgba(54, 68, 30, 1)',
            'rgba(36, 0, 0, 1)',
          ],
          borderWidth: 2
        },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        }
      }
    });

  }

  if (selectData > 0){

    document.getElementById("container").innerHTML = '&nbsp;';
    document.getElementById("container").innerHTML = '<canvas id="myChart"  width="100%" height="100%"></canvas>';

    ctx = document.getElementById("myChart").getContext("2d");
    await axios.get('/PesquisaData/' + selectData)

    .then(function (response) {

      Filial2 = response.data
      Data2 = response.data

    })
    .catch(function (err) {
      console.log(err)
    })

  const filiais2 = Filial2.map((filial, index, array) => {
    return filial.Filial;
  })
  const totais2 = Filial2.map((filial, index, array) => {
    return filial.Total;
  })

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: filiais2,
      datasets: [{
        label: '',
        data: totais2,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
      },
      ],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1 ,

         }
        }]
      }
    }
  });

  }
}


BuscarDados()



