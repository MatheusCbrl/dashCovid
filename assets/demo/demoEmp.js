window.addEventListener('load', () => {
  DataAtualizacao = document.querySelector('#DataAtualizacao');
  DataAtualizacao.innerHTML = 'Atualizado: 05/06/2020 - 9:25';

  //Tabela Caxias do sul
  confCaxias = document.querySelector('#confCaxias');
  confCaxias.innerHTML = 0;
  SuspCaxias = document.querySelector('#SuspCaxias');
  SuspCaxias.innerHTML = 10;
  //Tabela Rio de Janeiro

  confRio = document.querySelector('#confRio');
  confRio.innerHTML = 45;
  SuspRio = document.querySelector('#SuspRio');
  SuspRio.innerHTML = 11;
  //TabelaSão Mateus
  confSM = document.querySelector('#confSM');
  confSM.innerHTML = 2;
  SuspSM = document.querySelector('#SuspSM');
  SuspSM.innerHTML = 31;

  console.log('Preemchendo Tabela...');
});

type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  initPickColor: function () {
    $('.pick-class-label').click(function () {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function () {
    chartColor = '#FFFFFF';

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: 'transparent',
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: 'transparent',
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15,
        },
      },
    };

    ctx = document.getElementById('lineChartExample').getContext('2d');

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: [
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
          '31',
          '32',
        ],
        datasets: [
          {
            label: 'Total de Casos',
            borderColor: '#f96332',
            pointBorderColor: '#FFF',
            pointBackgroundColor: '#f96332',
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
          },
        ],
      },
      options: gradientChartOptionsConfiguration,
    });
  },

  initDashboardPageCharts: function () {
    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 125,
              padding: 20,
              fontColor: '#2380f7',
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#2380f7',
            },
          },
        ],
      },
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 125,
              padding: 20,
              fontColor: '#9a9a9a',
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(225,78,202,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#9a9a9a',
            },
          },
        ],
      },
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 110,
              padding: 20,
              fontColor: '#ff8a76',
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(220,53,69,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#ff8a76',
            },
          },
        ],
      },
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 125,
              padding: 20,
              fontColor: '#9e9e9e',
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(0,242,195,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#9e9e9e',
            },
          },
        ],
      },
    };

    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 120,
              padding: 20,
              fontColor: '#9e9e9e',
            },
          },
        ],

        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#9e9e9e',
            },
          },
        ],
      },
    };

    //*******************************************************
    //CAXIAS DO SUL SEMANAL

    var ctx = document.getElementById('CaxiasdoSulSemanal').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var data = {
      labels: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
      datasets: [
        {
          label: 'Total dia: ',
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#FF6600',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#FF6600',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#FF6600',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [0, 0, 0, 0, 0, 0, 0],
        },
      ],
    };

    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    });
    //*******************************************************
    //SÃO MATEUS SEMANAL
    var ctxGreen = document.getElementById('SaoMateusSemanal').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var data = {
      labels: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
      datasets: [
        {
          label: 'Total dia: ',
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#ff6600',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ff6600',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ff6600',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [0, 0, 1, 0, 0, 0, 0],
        },
      ],
    };
    //**************************************************************************
    //RIO DE JANEIRO SEMANAL
    var ctx = document.getElementById('RiodeJaneirosemanal').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

    var myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      legend: {
        display: false,
      },
      data: {
        labels: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
        datasets: [
          {
            label: 'Total dia: ',
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ff6600',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ff6600',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ff6600',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [5, 4, 6, 0, 0, 0, 0],
          },
        ],
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    });

    //**************************************************************************
    //CONFIRMADOS
    var myChart = new Chart(ctxGreen, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen,
    });

    var chart_labels = [
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
    ];
    var chart_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ctx = document.getElementById('grafCasosConfirmados').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [
          {
            label: 'Total de casos: ',
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ff0d30',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ff0d30',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ff0d30',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: chart_data,
          },
        ],
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    };
    var myChartData = new Chart(ctx, config);
    $('#0').click(function () {
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });
    //RIO DE JANEIRO CONFIRMADOS
    $('#1').click(function () {
      var chart_data = [0, 30, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });
    //SÃO MATEUS CONFIRMADOS
    $('#2').click(function () {
      var chart_data = [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });
    //EMPRESA CONFIRMADOS
    $('#3').click(function () {
      var chart_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });

    //**************************************************************************
    //EMPRESA AFASTADOS POR SUSPEITA
    var myChart = new Chart(ctxGreen, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen,
    });

    var chart_labels = [
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
    ];
    var chart_data5 = [7, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ctx = document.getElementById('grafCasosAfastadosEmp').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [
          {
            label: 'Total de casos: ',
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ff0d30',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ff0d30',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ff0d30',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: chart_data5,
          },
        ],
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    };
    var myChartData5 = new Chart(ctx, config);
    $('#0').click(function () {
      var data = myChartData5.config.data;
      data.datasets[0].data = chart_data5;
      data.labels = chart_labels;
      myChartData5.update();
    });
    //RIO DE JANEIRO AFASTADOS
    $('#1').click(function () {
      var chart_data5 = [0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData5.config.data;
      data.datasets[0].data = chart_data5;
      data.labels = chart_labels;
      myChartData5.update();
    });
    //SÃO MATEUS AFASTADOS
    $('#2').click(function () {
      var chart_data5 = [11, 16, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData5.config.data;
      data.datasets[0].data = chart_data5;
      data.labels = chart_labels;
      myChartData5.update();
    });
    //EMPRESA AFASTADOS
    $('#3').click(function () {
      var chart_data5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData5.config.data;
      data.datasets[0].data = chart_data5;
      data.labels = chart_labels;
      myChartData5.update();
    });

    //**************************************************************************
    //RECUPERADOS
    var myChart = new Chart(ctxGreen, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen,
    });

    var chart_labels = [
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
    ];
    var chart_data1 = [16, 21, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ctx = document.getElementById('grafCasosRecuperados').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [
          {
            label: 'Total de casos: ',
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ff0d30',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ff0d30',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ff0d30',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: chart_data1,
          },
        ],
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    };
    var myChartData1 = new Chart(ctx, config);
    $('#0').click(function () {
      var data = myChartData1.config.data;
      data.datasets[0].data = chart_data1;
      data.labels = chart_labels;
      myChartData1.update();
    });
    //RIO DE JANEIRO RECUPERADOS
    $('#1').click(function () {
      var chart_data1 = [0, 48, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData1.config.data;
      data.datasets[0].data = chart_data1;
      data.labels = chart_labels;
      myChartData1.update();
    });
    //SÃO MATEUS RECUPERADOS
    $('#2').click(function () {
      var chart_data1 = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData1.config.data;
      data.datasets[0].data = chart_data1;
      data.labels = chart_labels;
      myChartData1.update();
    });
    //EMPRESA AFASTADOS
    $('#3').click(function () {
      var chart_data1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData1.config.data;
      data.datasets[0].data = chart_data1;
      data.labels = chart_labels;
      myChartData1.update();
    });
    //**************************************************************************
    //FUNCIONÁRIOS DA SAÚDE
    var myChart = new Chart(ctxGreen, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen,
    });

    var chart_labels = [
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
    ];
    var chart_data2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ctx = document.getElementById('grafCasosFuncSaude').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [
          {
            label: 'Total de casos: ',
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ff0d30',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ff0d30',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ff0d30',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: chart_data2,
          },
        ],
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    };
    var myChartData2 = new Chart(ctx, config);
    $('#0').click(function () {
      var data = myChartData2.config.data;
      data.datasets[0].data = chart_data2;
      data.labels = chart_labels;
      myChartData2.update();
    });
    //RIO DE JANEIRO FUNCIONÁRIOS DA SAÚDE
    $('#1').click(function () {
      var chart_data2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData2.config.data;
      data.datasets[0].data = chart_data2;
      data.labels = chart_labels;
      myChartData2.update();
    });
    //SÃO MATEUS FUNCIONÁRIOS DA SAÚDE
    $('#2').click(function () {
      var chart_data2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData2.config.data;
      data.datasets[0].data = chart_data2;
      data.labels = chart_labels;
      myChartData2.update();
    });
    //EMPRESA FUNCIONÁRIOS DA SAÚDE
    $('#3').click(function () {
      var chart_data2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData2.config.data;
      data.datasets[0].data = chart_data2;
      data.labels = chart_labels;
      myChartData2.update();
    });
    //**************************************************************************
    //CASOS UTI
    var myChart = new Chart(ctxGreen, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen,
    });

    var chart_labels = [
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
    ];
    var chart_data3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ctx = document.getElementById('grafCasosUTI').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [
          {
            label: 'Total de casos: ',
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ff0d30',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ff0d30',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ff0d30',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: chart_data3,
          },
        ],
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    };
    var myChartData3 = new Chart(ctx, config);
    $('#0').click(function () {
      var data = myChartData3.config.data;
      data.datasets[0].data = chart_data3;
      data.labels = chart_labels;
      myChartData3.update();
    });
    //RIO DE JANEIRO CASOS UTI
    $('#1').click(function () {
      var chart_data3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData3.config.data;
      data.datasets[0].data = chart_data3;
      data.labels = chart_labels;
      myChartData3.update();
    });
    //SÃO MATEUS CASOS UTI
    $('#2').click(function () {
      var chart_data3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData3.config.data;
      data.datasets[0].data = chart_data3;
      data.labels = chart_labels;
      myChartData3.update();
    });
    //EMPRESA CASOS UTI
    $('#3').click(function () {
      var chart_data3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData3.config.data;
      data.datasets[0].data = chart_data3;
      data.labels = chart_labels;
      myChartData3.update();
    });

    //**************************************************************************
    //CASOS DE ÓBITOS
    var myChart = new Chart(ctxGreen, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen,
    });

    var chart_labels = [
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
    ];
    var chart_data4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ctx = document.getElementById('grafCasosObitos').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [
          {
            label: 'Total de casos: ',
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ff0d30',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ff0d30',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ff0d30',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: chart_data4,
          },
        ],
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    };
    var myChartData4 = new Chart(ctx, config);
    $('#0').click(function () {
      var data = myChartData4.config.data;
      data.datasets[0].data = chart_data4;
      data.labels = chart_labels;
      myChartData4.update();
    });
    //RIO DE JANEIRO CASOS DE ÓBITOS
    $('#1').click(function () {
      var chart_data4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData4.config.data;
      data.datasets[0].data = chart_data4;
      data.labels = chart_labels;
      myChartData4.update();
    });
    //SÃO MATEUS CASOS DE ÓBITOS
    $('#2').click(function () {
      var chart_data4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData4.config.data;
      data.datasets[0].data = chart_data4;
      data.labels = chart_labels;
      myChartData4.update();
    });
    //EMPRESA CASOS DE ÓBITOS
    $('#3').click(function () {
      var chart_data4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var data = myChartData4.config.data;
      data.datasets[0].data = chart_data4;
      data.labels = chart_labels;
      myChartData4.update();
    });
  },
  showNotification: function (from, align) {
    color = Math.floor(Math.random() * 4 + 1);

    $.notify(
      {
        icon: 'tim-icons icon-bell-55',
        message:
          'Bem vindo ao <b>Dashboard COVID-19</b> - aqui poderá visualiar informações de uma forma mais rápida e fácil.',
      },
      {
        type: type[color],
        timer: 8000,
        placement: {
          from: from,
          align: align,
        },
      }
    );
  },
};
