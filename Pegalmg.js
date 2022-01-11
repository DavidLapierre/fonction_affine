// ----------- SETUP BLOCK ------------
    // Le bloc de configuration est également considéré comme le bloc de données. 
    // Ce bloc est essentiellement un const (variable constante) composé de
    //  plusieurs objets javascript liés aux données. 
    // Il peut s'agir de points de données, d'étiquettes, de couleurs d'arrière-plan,
    //  de couleurs de survol, etc.
    var ordonnees2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var donnees2 = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    
        
    const data2 = {
        labels: ['0','100', '200', '300','400', '500', '600', '700', '800', '900', '1000'],
        datasets: [{
                    label: 'none',
                    data: ordonnees2,
                    pointStyle: 'cross',
                    pointRadius: 10,
                    backgroundColor: [
                        'black'  
                    ],
                    borderColor: [
                        'black',
                        'red',
                        'red',
                        'red',
                        'red',
                        'red',
                        'red',
                        'red',
                        'red',
                        'red',
                        'red'
                    ],
                    borderWidth: 2.5
                }]
    }
    // yScaleText plugin block
    
    const yScaleText2 = {
        title: {
                        display: true,
                        text: 'P = 10 x m',
                        font: {
                            size: 20,
                        }
                    },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 19
                            }
                        }
                    }
    }

    // ----- CONFIGURATION BLOCK --------
    // Le bloc de configuration comprend toutes les configurations d'un graphique.
    // La configuration doit être placée avant le bloc de rendu. 
    // Comme ce bloc a tendance à dépendre du bloc de données en raison de la variable data const.
    // ----------------------------------

    const config2 = {
        type: 'line',
        data : data2, // SE RAPPORTE AU BLOCK SETUP DU DESSUS !!!!
        options: {
                maintainAspectRatio: true,
                aspectRatio: 1,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 10,
                        min: 0,
                        ticks: {
                            stepSize:1.0
                        },
                        grid: {
                            color:'rgba(25, 86, 200,0.75)'
                        },
                        title: {
                            display: true,
                            text:'P (en Newton)',
                            font: {
                                size: 25,
                            }
                        },
                        
                    }, 
                    x: {
                        beginAtZero: true,
                        max: 10,
                        min:0,
                        ticks: {
                            stepSize:1.0
                        },
                        grid: {
                            color:'rgba(25, 86, 200,0.65)'
                        },
                        title: {
                            display: true,
                            text:'m (en grammes)',
                            font: {
                                size: 25,
                            }
                        },
                    }, 
                }
                ,
                plugins: {
                    title: {
                        display: true,
                        text: 'P = 10 x m',
                        font: {
                            size: 20,
                        }
                    },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 19
                            }
                        }
                    }
                }
            }
        };

    // -------- RENDER INITIALISATION BLOCK -------
    // Le dernier bloc qui devrait toujours être le dernier est le bloc de rendu ou d'initialisation.
    // Ce bloc dessine le graphique dans le canevas en fonction de tout le code ci-dessus. 
    // Cela signifie que tout le bloc doit être chargé avant le chargement de ce bloc.
    // Sinon, cela donnerait une erreur et pourrait exclure certains blocs de code.
    // -------------------------------------------
    const myChart2 = new Chart(
        document.getElementById('myChart2').getContext('2d'),
        config2
    );

    