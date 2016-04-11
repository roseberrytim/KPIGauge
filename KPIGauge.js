Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', 'ux');
Ext.Loader.setConfig('disableCaching', false);
Ext.require(['Ext.chart.*', 'Ext.ux.chart.series.KPIGauge', 'Ext.ux.chart.axis.KPIGauge', 'Ext.chart.axis.Gauge', 'Ext.chart.series.*', 'Ext.Window']);

Ext.onReady(function () {

    Ext.create('Ext.Window', {
        width: 800,
        height: 400,
        minWidth: 650,
        minHeight: 225,
        title: 'Gauge Charts',
        tbar: [{
            text: 'Reload Data',
            handler: function () {
                // Add a short delay to prevent fast sequential clicks
                window.loadTask.delay(100, function () {
                    store1.loadData(generateData(1));
                    store3.loadData(generateData(1));
                    store4.loadData(generateData(1));
                });
            }
        }],
        layout: {
            type: 'hbox',
            align: 'stretch',
            padding: 5
        },
        items: [{
            xtype: 'chart',
            style: 'background:#000',
            animate: {
                easing: 'elasticIn',
                duration: 1000
            },
            store: store1,
            insetPadding: 50,
            flex: 1,
            gradients: [{
                id: 'gradientRed',
                angle: 15,
                stops: {
                    0: {
                        color: '#750000'
                    },

                    100: {
                        color: '#FF0000'
                    }
                }
            }, {
                id: 'gradientYellow',
                angle: 30,
                stops: {
                    0: {
                        color: '#9D8D00'
                    },
                    100: {
                        color: '#FFFF00'
                    }
                }
            }, {
                id: 'gradientGreen',
                angle: 45,
                stops: {
                    0: {
                        color: '#1C5910'
                    },
                    100: {
                        color: '#00ff00'
                    }
                }
            }],
            axes: [{
                type: 'kpigauge',
                position: 'left',
                minimum: 0,
                maximum: 100,
                steps: 10,
                margin: 0,
                label: {
                    fill: '#fff',
                    font: '12px Heveltica, sans-serif'
                }
            }],
            series: [{
                type: 'kpigauge',
                field: 'data1',
                needle: {
                    width: 2,
                    pivotFill: '#fff',
                    pivotRadius: 5
                },
                ranges: [{
                    from: 0,
                    to: 70,
                    color: 'url(#gradientRed)'
                }, {
                    from: 70,
                    to: 90,
                    color: 'url(#gradientYellow)'
                }, {
                    from: 90,
                    to: 100,
                    color: 'url(#gradientGreen)'
                }],
                donut: 70
            }]
        }, {
            xtype: 'chart',
            style: 'background:#fff',
            animate: {
                easing: 'elasticIn',
                duration: 1000
            },
            store: store1,
            insetPadding: 50,
            flex: 1,
            axes: [{
                type: 'kpigauge',
                position: 'left',
                minimum: 0,
                maximum: 100,
                steps: 10,
                margin: 0,
                label: {
                    fill: '#333',
                    font: '12px Heveltica, sans-serif'
                }
            }],
            series: [{
                type: 'kpigauge',
                field: 'data1',
                needle: {
                    width: 2,
                    pivotFill: '#000',
                    pivotRadius: 5
                },
                ranges: [{
                    from: 0,
                    to: 70,
                    color: '#FF0000'
                }, {
                    from: 70,
                    to: 90,
                    color: '#FFFF00'
                }, {
                    from: 90,
                    to: 100,
                    color: '#00FF00'
                }],
                donut: 70
            }]
        }]
    }).show();

});