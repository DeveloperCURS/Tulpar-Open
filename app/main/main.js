$(function () {
    app = IDACore();
    app.strings.ru = {
        "Main": "Главная"
    };

    app.regionCityCode = "390000000";

    app.buffer = {
        active: 8859
    };

    app.helpers = {
        makeMap: function (renderTo, mapData) {
            var config = CURSJS.config();

            config.renderTo = renderTo;
            config.regionCode = app.regionCityCode;
            config.title = "";           

            app.helpers.schemeHelper = CURSJS.scheme(config);
            var schemeData = {};
            $.each(mapData, function (idx, item) {
                item.val = 0;
                schemeData[item.cod] = item;
            });

            app.helpers.schemeHelper.draw(schemeData);

            config.onItemClick = app.handlers.onMapClick;
        },
        makeContentText: function (data) {
            var textContent = document.querySelector('.main__content-text > p');
            textContent.innerHTML = `
                Алтынсаринский район (2018 год)
Количество действующих предприятий составляет __ , при общем количестве зарегистрированных предприятий _. Валовый региональный продукт -_ тенге, отраслевая структура: __. 
Вместе с тем, количественное распределение малых и средних предприятий района выглядит следующим образом: _% в секторе услуг, _% предприятия торговли, _ % АПК, _%..., _% прочие. Значительные изменения по сравнению с прошлым годом произошли по __ (уменьшение) и в ___ (увеличение). Или так «Значительных изменений в отраслевой структуре предприятий района по сравнению с прошлым годом не произошло». 
Совокупный объем выплаченных в государственный бюджет налоговых отчислений составляет__ тенге. Объем пенсионных отчислений за период составил__  тенге, при средней заработной плате по району_ тенге и общем количестве занятых на предприятии ___ людей. 
Предприятия района поставили государственным органам товаров, работу и услуг на общую сумму __ тенге (что составляет __% к показателю прошлого года). При этом, __ тенге выполнено на территории района, ___ тенге поставлено за пределы района. 
Предприятия района получили государственной поддержки на сумму_ тенге. Наибольшей востребованностью пользуется Программа _, инструмент__ . Совокупный объем государственной поддержки по итогам года составил__ тенге.
            `;
        },
        chart: function (config) {
            $("#" + config.renderTo).highcharts({
                chart: {
                    type: 'line',
                    backgroundColor: 'transparent',
                    color: '#ff9a00',
                    marginLeft: 0,
                    marginBottom: 0,
                    spacingLeft: 0
                },
                title: {
                    text: "Количество активных предприятии",
                    x: -30,
                    style: {
                        color: '#fff',
                        fontSize: '1.7rem',
                        textAlign: 'left'
                    }
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: ['2015', '2016', '2017', '2018'],
                    visible: false
                },
                yAxis: {
                    visible: false
                },
                plotOptions: {
                    series: {
                        allowPointSelect: true,
                        color: '#ff9a00',
                        dataLabels: {
                            enable: false,
                            color: '#fff',
                            formatter: function () {
                                return '<span>' + this.x + '</span>';
                            }
                        }
                    }
                },
                series: [{
                    data: [{ y: 29.9, dataLabels: { enabled: true }, name: "2015" }, { y: 71.5, name: "2016" }, { y: 106.4, name: "2017" }, { y: 129.2, dataLabels: { enabled: true }, name: "2018" }],
                    showInLegend: false,
                    name: "Предприятии"
                }]
            });            
        }
    };

    app.service = {
        getRegions: function (callback) {
            $.ajax({
                method: "GET",
                url: "../../api/mapinfo",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                async: true,
                success: function (response) {
                    callback("map", response);
                },
                error: function (error) {
                    console.log(error);
                }
            })
        }
    };

    app.use = {

    };

    app.handlers = {
        onMapClick: function(e) {            
            $.each(app.helpers.schemeHelper.map.series[0].data, function (idx, point) {
                if (point.id === app.buffer.active) {
                    point.update({ color: '#364667' });
                }
            });

            app.buffer.active = e.currentTarget.id;
            e.currentTarget.update({ color: '#ff9a00' });

            if (e.currentTarget.cod !== "P390000000" && e.currentTarget.cod !== "P391000000" && e.currentTarget.cod !== "P392000000" && e.currentTarget.cod !== "P392400000" && e.currentTarget.cod !== "P391600000") {
                var span = document.getElementById('span-text') || document.createElement('span');
                span.setAttribute('id', 'span-text');
                span.style.position = 'absolute';
                span.style.left = e.pageX + "px";
                span.style.top = e.pageY + "px";
                span.style.fontSize = "1.2rem";
                span.style.display = "block";
                span.innerHTML = "<i class=\"fas fa-map-marker-alt\"></i> " + e.currentTarget.name;
                document.body.appendChild(span);
            } else {
                var span = document.getElementById('span-text') ? document.getElementById('span-text').style.display = "none" : "";
            }

            app.helpers.chart({ renderTo: 'graph-1' });
        }
    };

    app.create = function () {
        app.getURLParams();
        app.service.getRegions(app.helpers.makeMap);
        app.helpers.makeContentText({});
        console.log("Ok");
    };
    app.create();
});