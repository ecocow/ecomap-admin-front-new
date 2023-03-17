import dayjs from 'dayjs';
import { useThemeColors } from '/@src/composable/useThemeColors';
import * as formatters from '/@src/utils/apex-formatters';
import { dataSeries } from './data/dataSeries';
import { series } from './data/series';
function generateData(baseval, count, yrange) {
    let i = 0;
    const _series = [];
    while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        _series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return _series;
}
function generateDayWiseTimeSeries(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push([baseval, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}
export function useChartOptions() {
    const themeColors = useThemeColors();
    const options1 = ref({
        series: [
            {
                name: 'Sales',
                data: [105, 414, 357, 511, 497, 621, 695, 912, 748],
            },
        ],
        chart: {
            height: 280,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: [themeColors.green],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'straight',
        },
        title: {
            text: 'Line Chart',
            align: 'left',
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'],
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
    });
    const options2 = ref({
        series: [
            {
                name: 'Session Duration',
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
            },
            {
                name: 'Page Views',
                data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
            },
            {
                name: 'Total Visits',
                data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
            },
        ],
        chart: {
            height: 280,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: [themeColors.accent, themeColors.info, themeColors.green],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'straight',
            dashArray: [0, 8, 5],
        },
        title: {
            text: 'Multiple Lines',
            align: 'left',
        },
        legend: {
            tooltipHoverFormatter: function (val, opts) {
                return (val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '');
            },
            position: 'top',
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6,
            },
        },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: formatters.asMinutes,
                    },
                },
                {
                    title: {
                        formatter: formatters.perSession,
                    },
                },
                {
                    title: {
                        formatter: formatters.toString,
                    },
                },
            ],
        },
        grid: {
            borderColor: '#f1f1f1',
        },
    });
    const options4 = ref({
        series: [
            {
                name: 'New members',
                data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79],
            },
        ],
        chart: {
            type: 'line',
            height: 280,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'stepline',
        },
        colors: [themeColors.green],
        dataLabels: {
            enabled: false,
        },
        title: {
            text: 'Stepline Chart',
            align: 'left',
        },
        markers: {
            hover: {
                sizeOffset: 4,
            },
        },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
    });
    const options5 = ref({
        series: [
            {
                name: 'Balance',
                data: series.monthDataSeries1.prices,
            },
        ],
        chart: {
            type: 'area',
            height: 280,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'straight',
        },
        colors: [themeColors.green],
        title: {
            text: 'Area Chart',
            align: 'left',
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            opposite: true,
        },
        legend: {
            horizontalAlign: 'left',
        },
    });
    const options6 = ref({
        series: [
            {
                name: 'Completed',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: 'Pending',
                data: [11, 32, 45, 32, 34, 52, 41],
            },
        ],
        chart: {
            height: 280,
            type: 'area',
            toolbar: {
                show: false,
            },
        },
        colors: [themeColors.green, themeColors.info, themeColors.purple],
        title: {
            text: 'Multiple Area',
            align: 'left',
        },
        legend: {
            position: 'top',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'smooth',
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00.000Z',
                '2018-09-19T01:30:00.000Z',
                '2018-09-19T02:30:00.000Z',
                '2018-09-19T03:30:00.000Z',
                '2018-09-19T04:30:00.000Z',
                '2018-09-19T05:30:00.000Z',
                '2018-09-19T06:30:00.000Z',
            ],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    });
    let ts1 = 1388534400000;
    let ts2 = 1388620800000;
    let ts3 = 1389052800000;
    const dataSet = [[], [], []];
    for (let i = 0; i < 12; i++) {
        ts1 = ts1 + 86400000;
        const innerArr = [ts1, dataSeries[2][i].value];
        dataSet[0].push(innerArr);
    }
    for (let i = 0; i < 18; i++) {
        ts2 = ts2 + 86400000;
        const innerArr = [ts2, dataSeries[1][i].value];
        dataSet[1].push(innerArr);
    }
    for (let i = 0; i < 12; i++) {
        ts3 = ts3 + 86400000;
        const innerArr = [ts3, dataSeries[0][i].value];
        dataSet[2].push(innerArr);
    }
    const options7 = ref({
        series: [
            {
                name: 'Desktops',
                data: dataSet[0],
            },
            {
                name: 'Phones',
                data: dataSet[1],
            },
            {
                name: 'Tablets',
                data: dataSet[2],
            },
        ],
        chart: {
            type: 'area',
            stacked: false,
            height: 280,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100],
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#8e8da4',
                },
                offsetX: 0,
                formatter: formatters.toFixed(2, 1000000),
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        xaxis: {
            type: 'datetime',
            tickAmount: 8,
            min: new Date('01/01/2014').getTime(),
            max: new Date('01/20/2014').getTime(),
            labels: {
                rotate: -15,
                rotateAlways: true,
                formatter: formatters.toDate('DD MMM YYYY'),
            },
        },
        colors: [themeColors.accent, themeColors.info, themeColors.green],
        title: {
            text: 'Multiple Areas',
            align: 'left',
        },
        tooltip: {
            shared: true,
        },
        stroke: {
            width: [2, 2, 2],
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
    });
    const options8 = ref({
        series: [
            {
                name: 'Inflation',
                data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
            },
        ],
        chart: {
            height: 280,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: formatters.asPercent,
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ['#304758'],
            },
        },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            position: 'top',
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: formatters.asPercent,
            },
        },
        colors: [themeColors.green, themeColors.secondary, themeColors.orange],
        title: {
            text: 'Bar Chart',
            align: 'left',
        },
    });
    const options9 = ref({
        series: [
            {
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
        chart: {
            type: 'bar',
            height: 280,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        colors: [themeColors.accent, themeColors.info, themeColors.green, themeColors.purple],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)',
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
        title: {
            text: 'Multiple Bars',
            align: 'left',
        },
        tooltip: {
            y: {
                formatter: formatters.asKDollar,
            },
        },
    });
    const options10 = ref({
        series: [
            {
                name: 'Desktops',
                data: [44, 55, 41, 67, 22, 43],
            },
            {
                name: 'Phones',
                data: [13, 23, 20, 8, 13, 27],
            },
            {
                name: 'Tablets',
                data: [11, 17, 15, 15, 21, 14],
            },
            {
                name: 'Hybrid',
                data: [21, 7, 25, 13, 22, 8],
            },
        ],
        chart: {
            type: 'bar',
            height: 280,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: true,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'top',
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '01/01/2011 GMT',
                '01/02/2011 GMT',
                '01/03/2011 GMT',
                '01/04/2011 GMT',
                '01/05/2011 GMT',
                '01/06/2011 GMT',
            ],
        },
        title: {
            text: 'Stacked Bars',
            align: 'left',
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
        fill: {
            opacity: 1,
        },
    });
    const options11 = ref({
        series: [
            {
                name: 'Corporate',
                data: [
                    {
                        x: 'Team A',
                        y: [1, 5],
                    },
                    {
                        x: 'Team B',
                        y: [4, 6],
                    },
                    {
                        x: 'Team C',
                        y: [5, 8],
                    },
                    {
                        x: 'Team D',
                        y: [3, 11],
                    },
                ],
            },
            {
                name: 'Service',
                data: [
                    {
                        x: 'Team A',
                        y: [2, 6],
                    },
                    {
                        x: 'Team B',
                        y: [1, 3],
                    },
                    {
                        x: 'Team C',
                        y: [7, 8],
                    },
                    {
                        x: 'Team D',
                        y: [5, 9],
                    },
                ],
            },
        ],
        chart: {
            type: 'rangeBar',
            height: 280,
            toolbar: {
                show: false,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.green,
            themeColors.orange,
            themeColors.purple,
            themeColors.green,
        ],
        title: {
            text: 'Range Column',
            align: 'left',
        },
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
        dataLabels: {
            enabled: true,
        },
    });
    const options12 = ref({
        series: [
            {
                name: 'Spaceships',
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
            },
        ],
        chart: {
            type: 'bar',
            height: 280,
            toolbar: {
                show: false,
            },
        },
        colors: [themeColors.green],
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        title: {
            text: 'Horizontal Bar',
            align: 'left',
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [
                'South Korea',
                'Canada',
                'United Kingdom',
                'Netherlands',
                'Italy',
                'France',
                'Japan',
                'United States',
                'China',
                'Germany',
            ],
        },
    });
    const options13 = ref({
        series: [
            {
                name: 'Completed',
                data: [44, 55, 41, 64, 22, 43, 21],
            },
            {
                name: 'Pending',
                data: [53, 32, 33, 52, 13, 44, 32],
            },
        ],
        chart: {
            type: 'bar',
            height: 280,
            toolbar: {
                show: false,
            },
        },
        colors: [themeColors.info, themeColors.green],
        title: {
            text: 'Horizontal Bar Multiple',
            align: 'left',
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff'],
            },
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
        },
        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
    });
    const options14 = ref({
        series: [
            {
                data: [
                    {
                        x: 'Analysis',
                        y: [new Date('2019-02-27').getTime(), new Date('2019-03-04').getTime()],
                        fillColor: themeColors.accent,
                    },
                    {
                        x: 'Design',
                        y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
                        fillColor: themeColors.info,
                    },
                    {
                        x: 'Coding',
                        y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()],
                        fillColor: themeColors.green,
                    },
                    {
                        x: 'Testing',
                        y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
                        fillColor: themeColors.purple,
                    },
                    {
                        x: 'Deployment',
                        y: [new Date('2019-03-12').getTime(), new Date('2019-03-17').getTime()],
                        fillColor: themeColors.orange,
                    },
                ],
            },
        ],
        title: {
            text: 'Timeline',
            align: 'left',
        },
        chart: {
            height: 280,
            type: 'rangeBar',
            toolbar: {
                show: false,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false,
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                const label = opts.w.globals.labels[opts.dataPointIndex];
                const a = dayjs(val[0]);
                const b = dayjs(val[1]);
                const diff = b.diff(a, 'days');
                return label + ': ' + diff + (diff > 1 ? 'D' : 'd');
            },
            style: {
                colors: ['#f3f4f5', '#fff'],
            },
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            show: false,
        },
        grid: {
            row: {
                colors: ['transparent'],
                opacity: 1,
            },
        },
    });
    const options15 = ref({
        series: [
            {
                name: 'Bubble1',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Bubble2',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Bubble3',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Bubble4',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
        ],
        chart: {
            height: 280,
            type: 'bubble',
            toolbar: {
                show: false,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 0.8,
        },
        title: {
            text: 'Bubble Chart',
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
        },
        yaxis: {
            max: 70,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
    });
    const options16 = ref({
        series: [
            {
                name: 'Team 1',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Team 2',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Team 3',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Team 4',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Team 5',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                    min: 10,
                    max: 60,
                }),
            },
        ],
        title: {
            text: 'Scatter Chart',
        },
        chart: {
            height: 280,
            type: 'scatter',
            zoom: {
                type: 'xy',
            },
            toolbar: {
                show: false,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        dataLabels: {
            enabled: false,
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            max: 70,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
    });
    const options17 = ref({
        series: [44, 55, 13, 43, 22],
        chart: {
            height: 295,
            type: 'pie',
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 315,
                        toolbar: {
                            show: false,
                        },
                    },
                    legend: {
                        position: 'top',
                    },
                },
            },
        ],
        legend: {
            position: 'right',
            horizontalAlign: 'center',
        },
    });
    const options18 = ref({
        series: [44, 55, 41, 17, 15],
        title: {
            text: 'Donut Chart',
        },
        chart: {
            height: 290,
            type: 'donut',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 280,
                        toolbar: {
                            show: false,
                        },
                    },
                    legend: {
                        position: 'top',
                    },
                },
            },
        ],
        legend: {
            position: 'right',
            horizontalAlign: 'center',
        },
    });
    const options19 = ref({
        series: [70],
        title: {
            text: 'Radial Bar',
        },
        chart: {
            height: 295,
            type: 'radialBar',
            toolbar: {
                show: false,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                },
            },
        },
        labels: ['Power'],
    });
    const options20 = ref({
        series: [44, 55, 67, 83],
        title: {
            text: 'Radial Bar Multiple',
        },
        chart: {
            height: 295,
            type: 'radialBar',
            toolbar: {
                show: false,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function () {
                            return 249;
                        },
                    },
                },
            },
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    });
    const options21 = ref({
        series: [67],
        title: {
            text: 'Radial Bar Gauge',
        },
        chart: {
            height: 295,
            type: 'radialBar',
            offsetY: -10,
            toolbar: {
                show: false,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120,
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: formatters.asPercent,
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91],
            },
        },
        stroke: {
            dashArray: 4,
        },
        labels: ['Median Ratio'],
    });
    const options22 = ref({
        series: [76],
        title: {
            text: 'Radial Bar Gauge',
        },
        chart: {
            height: 295,
            type: 'radialBar',
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: '#e7e7e7',
                    strokeWidth: '97%',
                    margin: 5,
                    dropShadow: {
                        enabled: false,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2,
                    },
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px',
                    },
                },
            },
        },
        grid: {
            padding: {},
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.1,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91],
            },
        },
        labels: ['Average Results'],
    });
    const options23 = ref({
        series: [
            {
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            },
        ],
        chart: {
            height: 350,
            type: 'radar',
            toolbar: {
                show: false,
            },
        },
        colors: [
            themeColors.accent,
            themeColors.info,
            themeColors.green,
            themeColors.purple,
            themeColors.orange,
        ],
        title: {
            text: 'Radar Chart',
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
    });
    return {
        options1,
        options2,
        options4,
        options5,
        options6,
        options7,
        options8,
        options9,
        options10,
        options11,
        options12,
        options13,
        options14,
        options15,
        options16,
        options17,
        options18,
        options19,
        options20,
        options21,
        options22,
        options23,
    };
}
//# sourceMappingURL=chartOptions.js.map