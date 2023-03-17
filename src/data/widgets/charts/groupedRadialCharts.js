import { useThemeColors } from '/@src/composable/useThemeColors';
export function useGroupedRadialCharts() {
    const themeColors = useThemeColors();
    const widgetGaugeGroup1Options = ref({
        series: [57],
        chart: {
            height: 100,
            type: 'radialBar',
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        colors: [themeColors.accent],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                    size: '35%',
                },
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
                        show: false,
                        offsetY: -2,
                        fontSize: '22px',
                    },
                },
            },
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
    const widgetGaugeGroup2Options = ref({
        series: [36],
        chart: {
            height: 100,
            type: 'radialBar',
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        colors: [themeColors.orange],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                    size: '35%',
                },
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
                        show: false,
                        offsetY: -2,
                        fontSize: '22px',
                    },
                },
            },
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
    const widgetGaugeGroup3Options = ref({
        series: [88],
        chart: {
            height: 100,
            type: 'radialBar',
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        colors: [themeColors.green],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                    size: '35%',
                },
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
                        show: false,
                        offsetY: -2,
                        fontSize: '22px',
                    },
                },
            },
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
    return {
        widgetGaugeGroup1Options,
        widgetGaugeGroup2Options,
        widgetGaugeGroup3Options,
    };
}
//# sourceMappingURL=groupedRadialCharts.js.map